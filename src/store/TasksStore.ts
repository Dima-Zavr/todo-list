import { create } from "zustand"

import { Tasks } from "../interfaces/interfaces.ts"

export const useTasksStore = create<Tasks>((set) => ({
    tasks: [],
    page: 1,
    limit: 5,
    filters: [],
    addTask: (task) =>
        set((state) => ({
            page: Math.ceil(state.tasks.length / state.limit) + 1,
            tasks: state.tasks.includes(task) ? state.tasks : [...state.tasks, task]
        })),

    removeAllTasks: (filter) =>
        set((state) => ({
            tasks: [],
            page: 1,
            filters: state.filters.includes(filter)
                ? state.filters.filter((el) => el !== filter)
                : [...state.filters, filter]
        })),

    removeTask: (del) =>
        set((state) => ({
            tasks: state.tasks.filter((el) => el.id !== del.id)
        })),

    updateTask: (newTask) =>
        set((state) => ({
            tasks: state.tasks.map((el) => {
                if (el.id === newTask.id) {
                    newTask.attributes.createdAt = el.attributes.createdAt
                    newTask.attributes.publishedAt = el.attributes.publishedAt
                    newTask.attributes.updatedAt = el.attributes.updatedAt
                    return newTask
                } else {
                    return el
                }
            })
        }))
}))
