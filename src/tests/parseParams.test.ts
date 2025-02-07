import { expect, test } from "vitest"

import { parseParams } from "../api/parseParams.ts"
import { IParams } from "../interfaces/interfaces.ts"

const params1: IParams = {
    "sort[id]": "asc",
    "pagination[page]": 2,
    "pagination[pageSize]": 4
}
test("проверяем параметры", () => {
    expect(decodeURI(parseParams("http://localhost/api/tasks", params1))).toBe(
        "http://localhost/api/tasks?sort[id]=asc&pagination[page]=2&pagination[pageSize]=4"
    )
})

const params2: IParams = {
    "sort[id]": "desc",
    "pagination[page]": 3,
    "pagination[pageSize]": 7,
    "filters[status]": ["completed", "not completed"]
}
test("проверяем параметры", () => {
    expect(decodeURI(parseParams("http://localhost/api/tasks", params2))).toBe(
        "http://localhost/api/tasks?sort[id]=desc&pagination[page]=3&pagination[pageSize]=7&filters[status]=completed&filters[status]=not completed"
    )
})

const params3: IParams = {
    "sort[id]": "asc",
    "pagination[page]": 1,
    "pagination[pageSize]": 10,
    "filters[status]": ["completed"],
    "filters[id]": [1, 2, 3]
}
test("проверяем параметры", () => {
    expect(decodeURI(parseParams("http://localhost/api/tasks", params3))).toBe(
        "http://localhost/api/tasks?sort[id]=asc&pagination[page]=1&pagination[pageSize]=10&filters[status]=completed&filters[id]=1&filters[id]=2&filters[id]=3"
    )
})
