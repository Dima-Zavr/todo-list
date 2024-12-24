import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import React from "react"
import type { FormProps } from "antd"
import { Button, Form, Input } from "antd"
import { MyForm } from "../../styles/components.ts"
import { api } from "../../api/api.ts"

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
    return (
        <PageLayout>
            <h2>Регистрация</h2>
            <MyForm
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 1000 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
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
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введи ваш email!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите пароль!"
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </MyForm>
        </PageLayout>
    )
}
