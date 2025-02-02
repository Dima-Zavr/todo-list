import { createContext, useEffect, useState } from "react"

import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"

import { Account } from "./Account"
import { Login } from "./Login.tsx"
import { Register } from "./Register"

export const PageContext = createContext("account")

export const AuthPage = () => {
    const [stage, setStage] = useState("account")
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setStage("account")
        } else {
            setStage("register")
        }
    }, [])

    const Stages = {
        account: <Account />,
        login: <Login />,
        register: <Register />
    }

    return (
        <PageLayout>
            <PageContext.Provider value={{ setStage }}>{Stages[stage]}</PageContext.Provider>
        </PageLayout>
    )
}
