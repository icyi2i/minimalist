import { Menu, Header } from "semantic-ui-react"
import CreateNewList from "./CreateNewList"

const Navigation = () => {
    return (
        <Menu>
            <Menu.Item key="Home">
                <Header icon="tasks" size="huge"  content="minimalist!"/>
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item key="CreateListButton">
                    <CreateNewList />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Navigation
