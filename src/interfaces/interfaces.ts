export interface Task {
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
export interface Response {
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
export interface Tasks {
    tasks: Task[]
    page: number
    limit: number
    filters: string[]
    addTask: (task: Task) => void
    addLikeTask: (task: Task, likeArr: number[]) => void
    removeAllTasks: (filter: string) => void
    removeTask: (del: Task) => void
    updateTask: (task: Task) => void
}
export interface Params {
    "sort[id]": "asc" | "desc"
    "pagination[page]": number
    "pagination[pageSize]": number
    "filters[status]"?: string[]
    "filters[id]"?: number[]
}
export interface Values {
    status: "not completed" | "in progress" | "completed"
    title: string
    description: string
}
