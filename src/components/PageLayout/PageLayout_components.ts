import styled from "styled-components"

import { baseTheme } from "../../styles/theme.ts"

export const StPage = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${baseTheme.colors.bg};
`
export const StContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    max-width: 1020px;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    margin: 24px 0 72px;
    @media ${baseTheme.media.medium} {
        padding: 0 20px;
    }
    @media ${baseTheme.media.small} {
        padding: 0 10px;
    }
`
