import * as S from "./PageHeader_components"
import { Outlet } from "react-router-dom"
import { LoginOutlined, UserOutlined } from "@ant-design/icons"

export const PageHeader = () => {
    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Left>
                        <S.Title to="">Главная страница</S.Title>
                        <S.Title to="favourites">Избранное</S.Title>
                    </S.Left>
                    <S.Right>
                        <S.Profile to={"/auth"}>
                            {!!localStorage.getItem("token") ? (
                                <>
                                    <UserOutlined />
                                    Профиль
                                </>
                            ) : (
                                <>
                                    <LoginOutlined />
                                    Войти
                                </>
                            )}
                        </S.Profile>
                    </S.Right>
                </S.Header>
            </S.Container>
            <Outlet />
        </>
    )
}
