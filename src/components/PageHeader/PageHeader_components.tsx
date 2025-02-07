import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { baseTheme } from "../../styles/theme"

export const STContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ${baseTheme.colors.primary};
    background-color: ${baseTheme.colors.bg};
    @media ${baseTheme.media.medium} {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: ${baseTheme.zIndex.btn};
        border-bottom: none;
        border-top: 1px solid ${baseTheme.colors.primary};
    }
`
export const StHeader = styled.header`
    max-width: 1360px;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 40px;
    margin: 0 auto;
    justify-content: space-between;
    @media ${baseTheme.media.medium} {
        justify-content: center;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 60px;
    }
`
export const StLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    @media ${baseTheme.media.medium} {
        gap: 0;
        width: 75%;
    }
`
export const StRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    @media ${baseTheme.media.medium} {
        gap: 0;
        width: 25%;
    }
`
export const StTitle = styled(NavLink)`
    display: flex;
    box-sizing: border-box;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${baseTheme.colors.font};
    padding: 10px;

    &.active {
        color: ${baseTheme.colors.primary};
    }

    &:hover {
        color: ${baseTheme.colors.primary};
        cursor: pointer;
    }

    @media ${baseTheme.media.medium} {
        flex: 1 0;
        height: 100%;
        font-size: 16px;
        padding: 5px;
    }
    @media ${baseTheme.media.small} {
        font-size: 14px;
    }
`
export const StProfile = styled(StTitle)`
    gap: 8px;
    @media ${baseTheme.media.medium} {
        gap: 0;
        & svg {
            display: none;
        }
    }
`
