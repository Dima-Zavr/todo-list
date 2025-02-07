import { Button, Form, Input, Modal, Radio } from "antd"

import { api } from "../../api/api.ts"
import { IValues } from "../../interfaces/interfaces.ts"
import { useTasksStore } from "../../store/TasksStore.ts"

const { TextArea } = Input

export const MyModal = ({ form, setIsOpen, isOpen }) => {
    const updateTask = useTasksStore((state) => state.updateTask)

    const formAction = form.getFieldValue("action")
    const id = form.getFieldValue("id")

    const addTask = (values: IValues) => {
        api.post("/tasks", { data: values }).then((response) => {
            console.log(response)
        })
        setIsOpen(false)
    }

    const changeTask = (values: IValues) => {
        api.put("/tasks/" + id, { data: values }).then((response) => {
            console.log(response)
        })
        updateTask({
            id: id,
            attributes: {
                status: values.status,
                title: values.title,
                description: values.description
            }
        })
        setIsOpen(false)
    }

    return (
        <>
            <Button
                type="primary"
                size="large"
                block
                onClick={() => {
                    form.setFieldsValue({
                        action: "Добавить"
                    })
                    setIsOpen(true)
                }}
            >
                Добавить задачу
            </Button>
            <Modal
                open={isOpen}
                title={`${formAction} задачу`}
                okText={formAction}
                cancelText="Отменить"
                okButtonProps={{ autoFocus: true, htmlType: "submit" }}
                onCancel={() => setIsOpen(false)}
                destroyOnClose
                getContainer={() => document.getElementById(`${id}`)}
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="add_task"
                        clearOnDestroy
                        onFinish={(values) =>
                            formAction === "Добавить" ? addTask(values) : changeTask(values)
                        }
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="title"
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
                <Form.Item name="description" label="Описание задачи">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="status"
                    className="collection-create-form_last-form-item"
                    label="Статус задачи"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, укажите статус задачи!"
                        }
                    ]}
                >
                    <Radio.Group>
                        <Radio value="not completed">Не выполнено</Radio>
                        <Radio value="in progress">В процессе</Radio>
                        <Radio value="completed">Выполнено</Radio>
                    </Radio.Group>
                </Form.Item>
            </Modal>
        </>
    )
}
