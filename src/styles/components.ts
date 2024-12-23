import styled from "styled-components"
import { Form } from "antd"
import { baseTheme } from "./theme.ts"

export const MyForm = styled(Form)`
    padding: 32px;
    border: 1px solid ${baseTheme.colors.primary};
    border-radius: 32px;
`
