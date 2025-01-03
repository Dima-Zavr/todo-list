import { createContext, useEffect, useState } from "react"

import { PageLayout } from "@components/PageLayout/PageLayout.tsx"

import { Login } from "./Login"
import { Register } from "./Register"
import { Account } from "./Account"

export const PageContext = createContext("account")

export const AuthPage = () => {
    const [stage, setStage] = useState("account")
    useEffect(() => {
        if (!!localStorage.getItem("token")) {
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
            <PageContext.Provider value={{ setStage }}>
                {Stages[stage]}
            </PageContext.Provider>
        </PageLayout>
    )
}
