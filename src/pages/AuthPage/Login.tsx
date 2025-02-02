import React, { useContext } from "react"
import type { FormProps } from "antd"
import { Button, Flex, Form, Input } from "antd"

import { api } from "../../api/api.ts"
import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import { MyForm } from "../../styles/components.ts"

import { PageContext } from "./AuthPage.jsx"

type FieldType = {
    identifier?: string
    password?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    api.post("/auth/local", values).then((response) => {
        localStorage.setItem("token", response.jwt)
        localStorage.setItem("userId", response.user.id)
        console.log("Ответ", response)
        window.location.replace("/")
    })
    console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo)
}

export const Login = () => {
    const { setStage } = useContext(PageContext)
    return (
        <PageLayout>
            <MyForm
                name="login"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Flex justify="center">
                    <h1>Авторизация</h1>
                </Flex>
                <Form.Item
                    label="Имя"
                    name="identifier"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введи ваше пользовательское имя!"
                        }
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите пароль!"
                        }
                    ]}
                >
                    <Input.Password size="large" />
                </Form.Item>
                <Form.Item label={null}>
                    <Flex gap="middle" justify="flex-end" align="center">
                        <Button size="large" onClick={() => setStage("register")}>
                            У меня еще нет аккаунта
                        </Button>
                        <Button size="large" type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Flex>
                </Form.Item>
            </MyForm>
        </PageLayout>
    )
}
