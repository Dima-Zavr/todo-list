import { useState } from "react"
import { Button, Space } from "antd"

import { DeleteOutlined, EditOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons"

import { api } from "../../api/api.ts"
import { useTasksStore } from "../../store/TasksStore.ts"
import { CustomCard } from "../../styles/components.ts"

export const MyCard = ({ like, task, form, setIsOpen }) => {
    const removeTask = useTasksStore((state) => state.removeTask)

    const [isLike, setIsLike] = useState(like)

    const deleteTask = (id) => {
        api.delete("/tasks/" + id).then((response) => {
            console.log(response)
        })
        removeTask(task)
    }

    const likeTask = (id) => {
        let likeArr =
            localStorage.getItem("likeArr") === null
                ? []
                : JSON.parse(localStorage.getItem("likeArr"))
        if (likeArr?.includes(id)) {
            const newLikeArr = likeArr.filter((el) => el !== id)
            localStorage.setItem("likeArr", JSON.stringify(newLikeArr))
        } else {
            const newLikeArr = [...likeArr, id]
            localStorage.setItem("likeArr", JSON.stringify(newLikeArr))
        }
        setIsLike(!isLike)
    }

    return (
        <CustomCard
            type={task.attributes.status}
            title={`${task.id}. ${task.attributes.title}`}
            extra={
                <Space direction="horizontal">
                    <Button onClick={() => likeTask(task.id)}>
                        {isLike ? <HeartFilled /> : <HeartOutlined />}
                    </Button>
                    <Button
                        onClick={() => {
                            form.setFieldsValue({
                                action: "Редактировать",
                                id: task.id,
                                title: task.attributes.title,
                                description: task.attributes.description,
                                status: task.attributes.status
                            })
                            setIsOpen(true)
                        }}
                    >
                        <EditOutlined />
                    </Button>
                    <Button onClick={() => deleteTask(task.id)}>
                        <DeleteOutlined />
                    </Button>
                </Space>
            }
        >
            <p>{task.attributes.description}</p>
        </CustomCard>
    )
}
