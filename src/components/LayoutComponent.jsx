import { Layout } from "antd"
import HeaderComponent from "./header/HeaderComponent"
import FooterComponent from "./footer/FooterComponent"

const LayoutComponent = ({ children }) => {
    const { Content } = Layout
    return (
        <div>
            <Layout>
                <HeaderComponent/>
                    <Content>
                        {children}  
                    </Content>
                <FooterComponent/>
            </Layout>
        </div>
    )
}

export default LayoutComponent