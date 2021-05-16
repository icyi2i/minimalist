import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import MediaInfo from "./Media"
import About from './components/About'
import ListIndex from './components/ListIndex'
import Nav from "./components/Nav"
import reduxion from './reducers'
import { Sidebar } from "semantic-ui-react"
import "./styles/index.css"
import { useState } from "react"


const App = (props) => {

    const { MediaContextProvider } = MediaInfo

    const store = createStore(
        reduxion,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    const [sidebarVisible, setSidebarVisible] = useState(false)


    return (
        <Provider store={store}>
            <BrowserRouter>
                <MediaContextProvider>
                        <Nav sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
                        <Sidebar.Pusher className="fill-h">
                            <div className="spacer"></div>
                            <Switch>
                                <Route path="/" exact>
                                    <About />
                                </Route>
                                <Route path="/lists" exact>
                                    <ListIndex />
                                </Route>
                            </Switch>
                        </Sidebar.Pusher>
                </MediaContextProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
