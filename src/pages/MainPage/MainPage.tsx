import { useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Form, Spin } from "antd"

import { LoadingOutlined } from "@ant-design/icons"

import { api } from "../../api/api.ts"
import { Filters } from "../../components/Filters/Filters.tsx"
import { MyCard } from "../../components/MyCard/MyCard.tsx"
import { MyModal } from "../../components/MyModal/MyModal.tsx"
import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import { Params, Response } from "../../interfaces/interfaces.ts"
import { useTasksStore } from "../../store/TasksStore.ts"
import { Ul } from "../../styles/components.ts"

export const MainPage = () => {
    const addTask = useTasksStore((state) => state.addTask)
    const tasks = useTasksStore((state) => state.tasks)
    const page = useTasksStore((state) => state.page)
    const limit = useTasksStore((state) => state.limit)
    const filters = useTasksStore((state) => state.filters)

    let params: Params = {
        "pagination[page]": page,
        "pagination[pageSize]": limit,
        "filters[status]": filters
    }

    const [isHasMore, setIsHasMore] = useState(true)

    const [form] = Form.useForm()
    const [isOpen, setIsOpen] = useState(false)

    const loadRecipes = () => {
        if (filters.length === 0) {
            delete params["filters[status]"]
        }
        api.get("/tasks", params).then((response: Response) => {
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
            <InfiniteScroll
                element={Ul}
                threshold={100}
                pageStart={0}
                loadMore={loadRecipes}
                hasMore={isHasMore}
                loader={<Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />}
            >
                {tasks?.map((task, i) => (
                    <li key={i} id={`${task.id}`}>
                        <MyCard task={task} form={form} setIsOpen={setIsOpen} />
                        <br />
                    </li>
                ))}
            </InfiniteScroll>
        </PageLayout>
    )
}
