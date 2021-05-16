import { Link } from "react-router-dom"
import { Button, Header, Menu, Sidebar } from "semantic-ui-react"
import MediaInfo from "../Media"

const Nav = (props) => {

    const { Media } = MediaInfo

    const navigationOptions = [
        {
            path: "/lists",
            content: "Lists",
            icon: "tasks"
        },
        {
            path: "/lists/starred",
            content: "Starred",
            icon: "star"
        },
        {
            path: "/lists/trashed",
            content: "Trash",
            icon: "trash"
        },
    ]
    let overlayClass =  props.sidebarVisible ? "dimmed-overlay" : ""

    const toggleSidebar = ()=> props.setSidebarVisible(! props.visible)

    return (
        <>
            <Media lessThan="tablet">
                <Sidebar as={Menu} animation="push"
                    onHide={() => props.setSidebarVisible(false)}
                    visible={props.sidebarVisible}>
                    <Menu fluid vertical>
                        <div className="spacer"></div>
                        {
                            navigationOptions.map((menuItem, index) => (
                                <Menu.Item key={index}>
                                    <Link to={menuItem.path}>
                                        <Header
                                            as="h3"
                                            icon={menuItem.icon}
                                            content={menuItem.content}
                                            dividing/>
                                    </Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sidebar>
            </Media>

            <Menu fixed="top" size="large">
                <Menu.Item key="title">
                    <Link to="/">
                        <Header
                            icon="check square outline"
                            as="h5"
                            content="Minimalist!"
                            size="large"/>
                    </Link>
                </Menu.Item>
                <Menu.Menu
                    key="links"
                    as={Media}
                    className="right floated align-center"
                    greaterThanOrEqual="tablet">
                    {
                        navigationOptions.map((menuItem, index) => (
                            <Menu.Item key={index}>
                                <Link to={menuItem.path}>
                                    <Header
                                        as="h3"
                                        icon={menuItem.icon}
                                        content={menuItem.content}
                                        />
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu.Menu>
                <Menu.Menu
                    key="sidebar-toggler"
                    as={Media}
                    className="right-absolute align-center"
                    lessThan="tablet">
                    <Menu.Item key="sidebar-toggler">
                        <Button
                            basic
                            icon={props.sidebarVisible ? "close" : "sidebar"}
                            size="large"
                            onClick={toggleSidebar}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Media lessThan="tablet">
            <div className={`${overlayClass} fill-h`}></div>
            </Media>
        </>
    )
}

export default Nav
