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
            tasks: [...state.tasks, task]
        })),

    removeAllTasks: (filter) =>
        set((state) => ({
            tasks: [],
            page: 1,
            filters: state.filters.includes(filter)
                ? state.filters.filter((el) => el !== filter)
                : [...state.filters, filter]
        })),

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
