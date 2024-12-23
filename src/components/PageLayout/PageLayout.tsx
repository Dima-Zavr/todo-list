import { Container, Page } from "./PageLayout_components"

export const PageLayout = ({ children }) => (
    <Page>
        <Container>{children}</Container>
    </Page>
)
