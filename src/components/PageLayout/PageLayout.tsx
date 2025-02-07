import { StContainer, StPage } from "./PageLayout_components"

export const PageLayout = ({ children }) => (
    <StPage>
        <StContainer>{children}</StContainer>
    </StPage>
)
