import { Outlet } from "react-router-dom"
import { Avatar } from "antd"

import { LoginOutlined, UserOutlined } from "@ant-design/icons"

import { STContainer, StHeader, StLeft, StProfile, StRight, StTitle } from "./PageHeader_components"

export const PageHeader = () => (
    <>
        <STContainer>
            <StHeader>
                <StLeft>
                    <StTitle to="">T0d0 L1st</StTitle>
                </StLeft>
                <StRight>
                    <StProfile to={"/auth"}>
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
                    </StProfile>
                </StRight>
            </StHeader>
        </STContainer>
        <Outlet />
    </>
)
