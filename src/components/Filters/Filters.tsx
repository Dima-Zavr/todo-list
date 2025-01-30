import { useState } from "react"
import { Button, Flex } from "antd"

import {
    CheckSquareOutlined,
    ClockCircleOutlined,
    CloseSquareOutlined,
    HeartOutlined
} from "@ant-design/icons"

export const Filters = ({ params, setParams, setIsHasMore }) => {
    const [isCompleted, setIsCompleted] = useState(false)
    const [isInProgress, setIsInProgress] = useState(false)
    const [isNotCompleted, setIsNotCompleted] = useState(false)
    const [isLike, setIsLike] = useState(false)
    return (
        <Flex>
            <Button
                type={isNotCompleted ? "primary" : "default"}
                size="large"
                onClick={() => {
                    setIsNotCompleted(!isNotCompleted)
                    if (!isNotCompleted) {
                        //ff
                    } else {
                        //ff
                    }
                    setIsHasMore(true)
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
                    if (isInProgress) {
                        //setParams((params["filters[status]"] = "in progress"))
                    } else {
                        //setParams(delete params["filters[status]"])
                    }
                }}
            >
                <ClockCircleOutlined />В процессе
            </Button>
            <Button
                type={isCompleted ? "primary" : "default"}
                size="large"
                onClick={() => {
                    setIsCompleted(!isCompleted)
                    if (isCompleted) {
                        setParams((params["filters[status]"] = "completed"))
                    } else {
                        setParams(delete params["filters[status]"])
                    }
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
