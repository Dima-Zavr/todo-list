import { useState } from "react"
import { Button, Flex } from "antd"

import {
    CheckSquareOutlined,
    ClockCircleOutlined,
    CloseSquareOutlined,
    HeartOutlined
} from "@ant-design/icons"

import { useTasksStore } from "../../store/TasksStore.ts"

export const Filters = ({ setIsHasMore }) => {
    const removeAllTasks = useTasksStore((state) => state.removeAllTasks)

    const [isCompleted, setIsCompleted] = useState(false)
    const [isInProgress, setIsInProgress] = useState(false)
    const [isNotCompleted, setIsNotCompleted] = useState(false)
    const [isLike, setIsLike] = useState(false)

    const func = (str) => {
        removeAllTasks(str)
        setIsHasMore(true)
    }

    return (
        <Flex>
            <Button
                type={isNotCompleted ? "primary" : "default"}
                size="large"
                onClick={() => {
                    setIsNotCompleted(!isNotCompleted)
                    func("not completed")
                }}
            >
                <CloseSquareOutlined />
                Не выполненные
            </Button>
            <Button
                type={isInProgress ? "primary" : "default"}
                size="large"
                onClick={() => {
                    setIsInProgress(!isInProgress)
                    func("in progress")
                }}
            >
                <ClockCircleOutlined />В процессе
            </Button>
            <Button
                type={isCompleted ? "primary" : "default"}
                size="large"
                onClick={() => {
                    setIsCompleted(!isCompleted)
                    func("completed")
                }}
            >
                <CheckSquareOutlined />
                Выполненные
            </Button>
            <Button
                type={isLike ? "primary" : "default"}
                size="large"
                onClick={() => setIsLike(!isLike)}
            >
                <HeartOutlined />
                Избранные
            </Button>
        </Flex>
    )
}
