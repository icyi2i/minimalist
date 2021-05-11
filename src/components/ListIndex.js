import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import List from './List'
import "../styles/masonry.css"

const ListIndex = () => {
    // const store = useStore()

    const listsSelector = (state) => state.lists
    const lists = useSelector(listsSelector)

    return (
        <div className="padded">
            <Grid centered columns="equal" className="masonry padded">
                {lists.sort((a,b) => a.id > b.id).map(
                    (listDetails, index) => (
                        <Grid.Column key={index} className="basic segment">
                            <List {...listDetails}/>
                        </Grid.Column>
                    ))}
            </Grid>
        </div>
    )
}

export default ListIndex
