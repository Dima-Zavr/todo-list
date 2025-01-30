import { create } from "zustand"

import { Task } from "../pages/MainPage/MainPage.types.ts"

interface Tasks {
    tasks: Task[]
    page: number
    limit: number
    addTask: (task: Task) => void
    removeAllTasks: () => void
    updateTask: (task: Task) => void
}

export const useTasksStore = create<Tasks>((set) => ({
    tasks: [],
    page: 1,
    limit: 5,
    addTask: (task) =>
        set((state) => ({
            page: Math.ceil(state.tasks.length / state.limit) + 1,
            tasks: [...state.tasks, task]
        })),

    removeAllTasks: () => set({ tasks: [], page: 1 }),

    updateTask: (newTask) =>
        set((state) => ({
            tasks: state.tasks.map((el) => {
                if (el.id === newTask.id) {
                    return newTask
                } else {
                    return el
                }
            })
        }))
}))
