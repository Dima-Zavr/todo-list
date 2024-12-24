import styled from "styled-components"
import { Form, Card } from "antd"
import { baseTheme } from "./theme.ts"

export const MyForm = styled(Form)`
    padding: 32px;
    border: 1px solid ${baseTheme.colors.primary};
    border-radius: 32px;
`
export const CustomCard = styled(Card)`
    border-color: ${({ type }) =>
        type === "completed"
            ? "green"
            : type === "not completed"
              ? "red"
              : "white"};
`
