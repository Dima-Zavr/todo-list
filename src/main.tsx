import GlobalStyles from "./styles/global"
import "./index.css"

import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { PageHeader } from "./components/PageHeader/PageHeader"
import { MainPage } from "./pages/MainPage/MainPage"
import { FavouritesPage } from "./pages/FavouritesPage/FavouritesPage"
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx"

import { api } from "./api/api"
import React from "react"
import { Button, Result } from "antd"

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHeader />,
        errorElement: (
            <Result
                status="404"
                title="404"
                subTitle="Простите этой страницы не существует"
                extra={<Button type="primary">Вернуться назад</Button>}
            />
        ),
        children: [
            {
                path: "",
                element: <MainPage />
                // loader: async () => {
                //     return await api.get("/tasks").then((data) => data)
                // }
            },
            {
                path: "favourites",
                element: <FavouritesPage />
                // loader: async () => {
                //     return await api.get("/pizza/catalog").then((data) => data)
                // }
            },
            {
                path: "auth",
                element: <AuthPage />
                // loader: async () => {
                //     return await api.get("/pizza/catalog").then((data) => data)
                // }
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
        <GlobalStyles />
    </>
)
