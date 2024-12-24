import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import React, { useContext } from "react"
import type { FormProps } from "antd"
import { Button, Flex, Form, Input } from "antd"
import { MyForm } from "../../styles/components.ts"
import { api } from "../../api/api.ts"
import { PageContext } from "./AuthPage.jsx"

type FieldType = {
    username?: string
    email?: string
    password?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    api.post("/auth/local/register", values).then((response) => {
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

export const Register = () => {
    const { setStage } = useContext(PageContext)
    return (
        <PageLayout>
            <MyForm
                name="register"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Flex justify="center">
                    <h1>Регистрация</h1>
                </Flex>
                <Form.Item
                    label="Имя"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message:
                                "Пожалуйста, введи ваше пользовательское имя!"
                        }
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введи ваш email!"
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
                        <Button size="large" onClick={() => setStage("login")}>
                            У меня уже есть аккаунт
                        </Button>
                        <Button size="large" type="primary" htmlType="submit">
                            Зарегистрироваться
                        </Button>
                    </Flex>
                </Form.Item>
            </MyForm>
        </PageLayout>
    )
}
