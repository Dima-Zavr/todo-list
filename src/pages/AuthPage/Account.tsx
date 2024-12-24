import { PageLayout } from "../../components/PageLayout/PageLayout.tsx"
import { Button } from "antd"

export const Account = () => {
    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        window.location.replace("/")
    }
    return (
        <PageLayout>
            <h1>Тут личная страница пользователя с его данными</h1>
            <Button size="large" type="primary" onClick={() => logOut()}>
                Выйти из аккаунта
            </Button>
        </PageLayout>
    )
}
