import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import { useEffect, useState } from "react"
import { api } from "../../api/api.ts"
import { Button, Form, Input, Modal, Radio, Space } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { CustomCard } from "../../styles/components.ts"
import { Translation } from "../../translation/translation.ts"

interface Values {
    name?: string
    description?: string
    status?: string
}
interface Task {
    id: number
    attributes: {
        name: string
        description: string
        status: "completed" | "not completed"
        createdAt: string
        publishedAt: string
        updatedAt: string
    }
}
interface Response {
    data: Task[]
    meta: {
        pagination: {
            page: number
            pageCount: number
            pageSize: number
            total: number
        }
    }
}

const { TextArea } = Input

export const MainPage = () => {
    const [params, setParams] = useState({})
    const [response, setResponse] = useState<Response | {}>({})

    const [form] = Form.useForm()
    const [open, setOpen] = useState(false)
    const addTask = (values: Values) => {
        api.post("/tasks", { data: values }).then((response) => {
            console.log(response)
        })
        console.log("Received values of form: ", values)
        setOpen(false)
    }

    const deleteTask = (id) => {
        api.delete("/tasks/" + id).then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        api.get("/tasks", params).then((res) => {
            setResponse(res)
            console.log(res)
        })
    }, [params])
    return (
        <>
            <PageLayout>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    Добавить задачу
                </Button>
                <ul>
                    {response["data"]?.map((task) => (
                        <li key={task.id}>
                            <CustomCard
                                type={task.attributes.status}
                                title={`${task.attributes.name} ( ${Translation[task.attributes.status]} )`}
                                extra={
                                    <Space direction="horizontal">
                                        <Button
                                            onClick={() => {
                                                form.setFieldsValue({
                                                    name: task.attributes.name,
                                                    description:
                                                        task.attributes
                                                            .description,
                                                    status: task.attributes
                                                        .status
                                                })
                                                setOpen(true)
                                            }}
                                        >
                                            <EditOutlined />
                                        </Button>
                                        <Button
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            <DeleteOutlined />
                                        </Button>
                                    </Space>
                                }
                            >
                                <p>{task.attributes.description}</p>
                            </CustomCard>
                            <br />
                            <br />
                        </li>
                    ))}
                </ul>
            </PageLayout>
            <Modal
                open={open}
                title="Добавить новую задачу"
                okText="Добавить"
                cancelText="Отменить"
                okButtonProps={{ autoFocus: true, htmlType: "submit" }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="add_task"
                        clearOnDestroy
                        onFinish={(values) => addTask(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="name"
                    label="Название задачи"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, укажите название задачи!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Описание задачи"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, укажите название задачи!"
                        }
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="status"
                    className="collection-create-form_last-form-item"
                >
                    <Radio.Group>
                        <Radio value="not completed">Не выполнено</Radio>
                        <Radio value="completed">Выполнено</Radio>
                    </Radio.Group>
                </Form.Item>
            </Modal>
        </>
    )
}
