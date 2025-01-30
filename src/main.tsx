import "./index.css"

import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Button, Result } from "antd"

import { PageHeader } from "./components/PageHeader/PageHeader"
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx"
import { MainPage } from "./pages/MainPage/MainPage"
import GlobalStyles from "./styles/global"

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
