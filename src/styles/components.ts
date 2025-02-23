import { Card, Form } from "antd"
import styled from "styled-components"

import { baseTheme } from "./theme.ts"

export const StMyForm = styled(Form)`
    padding: 32px;
    border: 1px solid ${baseTheme.colors.primary};
    border-radius: 32px;
    width: 600px;
`
export const StCustomCard = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 3px solid
        ${({ type }) => {
            if (type === "completed") {
                return "green"
            } else if (type === "not completed") {
                return "red"
            } else if (type === "in progress") {
                return "yellow"
            }
        }};
`

export const StFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
