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
    const filters = useTasksStore((state) => state.filters)

    return (
        <Flex>
            <Button
                type={filters.includes("not completed") ? "primary" : "default"}
                size="large"
                onClick={() => {
                    removeAllTasks("not completed")
                    setIsHasMore(true)
                }}
            >
                <CloseSquareOutlined />
                Не выполненные
            </Button>
            <Button
                type={filters.includes("in progress") ? "primary" : "default"}
                size="large"
                onClick={() => {
                    removeAllTasks("in progress")
                    setIsHasMore(true)
                }}
            >
                <ClockCircleOutlined />В процессе
            </Button>
            <Button
                type={filters.includes("completed") ? "primary" : "default"}
                size="large"
                onClick={() => {
                    removeAllTasks("completed")
                    setIsHasMore(true)
                }}
            >
                <CheckSquareOutlined />
                Выполненные
            </Button>
            <Button
                type={filters.includes("like") ? "primary" : "default"}
                size="large"
                onClick={() => {
                    removeAllTasks("like")
                    setIsHasMore(true)
                }}
            >
                <HeartOutlined />
                Избранные
            </Button>
        </Flex>
    )
}
