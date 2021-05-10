import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    return (
        <div>
            <h5>{props.listDetails.title}</h5>
            <p>{props.listDetails.description}</p>
            <ul>
                {props.listDetails.items.map(
                    (item, index) => <ListItem key={index} item={item}/>)}
            </ul>
        </div>
    )
}

export default List
