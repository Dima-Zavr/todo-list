import { useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Form, Spin } from "antd"

import { LoadingOutlined } from "@ant-design/icons"

import { api } from "../../api/api.ts"
import { Filters } from "../../components/Filters/Filters.tsx"
import { MyCard } from "../../components/MyCard/MyCard.tsx"
import { MyModal } from "../../components/MyModal/MyModal.tsx"
import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import { IParams, IResponse } from "../../interfaces/interfaces.ts"
import { useTasksStore } from "../../store/TasksStore.ts"
import { StFlex } from "../../styles/components.ts"

export const MainPage = () => {
    const addTask = useTasksStore((state) => state.addTask)
    const tasks = useTasksStore((state) => state.tasks)
    const page = useTasksStore((state) => state.page)
    const limit = useTasksStore((state) => state.limit)
    const filters = useTasksStore((state) => state.filters)

    let params: IParams = {
        "sort[id]": "asc",
        "pagination[page]": page,
        "pagination[pageSize]": limit
    }

    const [isHasMore, setIsHasMore] = useState(true)

    const [form] = Form.useForm()
    const [isOpen, setIsOpen] = useState(false)

    const likeArr =
        localStorage.getItem("likeArr") === null ? [] : JSON.parse(localStorage.getItem("likeArr"))

    const loadRecipes = () => {
        if (filters.length !== 0) {
            if (filters.includes("like")) {
                if (localStorage.getItem("likeArr") !== []) {
                    params["filters[id]"] = JSON.parse(localStorage.getItem("likeArr"))
                }
            }
            params["filters[status]"] = filters.filter((el) => el !== "like")
        }

        api.get("/tasks", params).then((response: IResponse) => {
            if (response.data?.length !== 0) {
                response.data?.map((el) => {
                    addTask(el)
                })
            } else {
                setIsHasMore(false)
            }
        })
    }

    return (
        <PageLayout>
            <MyModal form={form} setIsOpen={setIsOpen} isOpen={isOpen} />
            <br />
            <Filters params={params} setIsHasMore={setIsHasMore} />
            <br />
            <StFlex>
                <InfiniteScroll
                    threshold={100}
                    pageStart={0}
                    loadMore={loadRecipes}
                    hasMore={isHasMore}
                    loader={
                        <StFlex key={0}>
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
                        </StFlex>
                    }
                >
                    {tasks?.map((task) => (
                        <div id={`${task.id}`} key={task.id}>
                            <MyCard
                                like={likeArr?.includes(task.id)}
                                task={task}
                                form={form}
                                setIsOpen={setIsOpen}
                            />
                            <br />
                        </div>
                    ))}
                </InfiniteScroll>
            </StFlex>
        </PageLayout>
    )
}
