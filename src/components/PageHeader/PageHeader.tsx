import { Outlet } from "react-router-dom"
import { Avatar } from "antd"

import { LoginOutlined, UserOutlined } from "@ant-design/icons"

import * as S from "./PageHeader_components"

export const PageHeader = () => {
    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Left>
                        <S.Title to="">T0d0 L1st</S.Title>
                    </S.Left>
                    <S.Right>
                        <S.Profile to={"/auth"}>
                            {localStorage.getItem("token") ? (
                                <>
                                    <Avatar size="large" icon={<UserOutlined />} />
                                    Профиль
                                </>
                            ) : (
                                <>
                                    <Avatar size="large" icon={<LoginOutlined />} />
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
