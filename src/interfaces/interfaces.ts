export interface Task {
    id: number
    attributes: {
        title: string
        description: string
        status: "completed" | "not completed" | "in progress"
        createdAt: string
        publishedAt: string
        updatedAt: string
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
    removeAllTasks: (filter: string) => void
    updateTask: (task: Task) => void
}
export interface Params {
    "pagination[page]": number
    "pagination[pageSize]": number
    "filters[status]"?: string[]
}
export interface Values {
    title?: string
    description?: string
    status?: string
}
