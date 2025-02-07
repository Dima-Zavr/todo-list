export interface ITask {
    id: number
    attributes: {
        status: "not completed" | "in progress" | "completed"
        title: string
        description: string
        createdAt?: string
        publishedAt?: string
        updatedAt?: string
    }
}
export interface IResponse {
    data: ITask[]
    meta: {
        pagination: {
            page: number
            pageCount: number
            pageSize: number
            total: number
        }
    }
}
export interface ITasks {
    tasks: ITask[]
    page: number
    limit: number
    filters: string[]
    addTask: (task: ITask) => void
    addLikeTask: (task: ITask, likeArr: number[]) => void
    removeAllTasks: (filter: string) => void
    removeTask: (del: ITask) => void
    updateTask: (task: ITask) => void
}
export interface IParams {
    "sort[id]": "asc" | "desc"
    "pagination[page]": number
    "pagination[pageSize]": number
    "filters[status]"?: string[]
    "filters[id]"?: number[]
}
export interface IValues {
    status: "not completed" | "in progress" | "completed"
    title: string
    description: string
}
