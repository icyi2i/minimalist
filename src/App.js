import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ListIndex from './components/ListIndex'
import Navigation from './components/Navigation'
import reduxion from './reducers'


const App = () => {

    const store = createStore(
        reduxion,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    return (
        <Provider store={store}>
            <Navigation />
            <ListIndex />
        </Provider>
    )
}

export default App
