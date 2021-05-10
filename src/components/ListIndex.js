import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListIndexAction from '../actions/ListIndexAction'
import List from './List'


const ListIndex = () => {
    // const store = useStore()

    const payload = {
        title: "Title 1",
        description: "description 1",
        items: ["Item 1", "Item 2", "Item 3", "Item 4",]
    }
    const dispatch = useDispatch()

    const listsSelector = (state) => state.lists
    const lists = useSelector(listsSelector)

    return (
        <div>
            <button onClick={() => dispatch(ListIndexAction.create(payload))}>
                Create new
            </button>
            {lists.map(
                (listDetails,
                index) => <List key={index} listDetails={listDetails}/>)}
        </div>
    )
}

export default ListIndex
