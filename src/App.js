import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import MediaInfo from "./Media"
import About from './components/About'
import ListIndex from './components/ListIndex'
import Navigation from "./components/Navigation"
import reduxion from './reducers'
import { Sidebar } from "semantic-ui-react"
import "./styles/index.css"
import ListView from "./components/ListView"


const App = (props) => {

    const { MediaContextProvider } = MediaInfo

    const store = createStore(
        reduxion,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    return (
        <Provider store={store}>
            <BrowserRouter>
                <MediaContextProvider>
                    <Navigation />
                    <Sidebar.Pusher className="fill-h">
                        <div className="spacer"></div>
                        <Switch>
                            <Route path="/" exact>
                                <About />
                            </Route>
                            <Route path="/lists" exact>
                                <ListIndex />
                            </Route>
                            <Route path="/lists/starred" exact>
                                <ListIndex starred={true} />
                            </Route>
                            <Route path="/lists/archived" exact>
                                <ListIndex archived={true}/>
                            </Route>
                            <Route path="/lists/:id" exact>
                                <ListView />
                            </Route>
                        </Switch>
                    </Sidebar.Pusher>
                </MediaContextProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
