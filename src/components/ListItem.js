import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Button, Checkbox, Input } from 'semantic-ui-react'
import ListAction from "../actions/ListAction"

const ListItem = (props) => {
    let [hovered, setHovered] = useState(false)

    const onHoverStart = () => setHovered(true)
    const onHoverStop = () => setHovered(false)

    const dispatch = useDispatch()

    const toggleItemCheck = () => dispatch(ListAction.toggleItemCheck({
        listId: props.listId,
        itemId: props.itemId,
    }))

    const updateItem = (event) => dispatch(ListAction.updateItem({
        listId: props.listId,
        itemId: props.itemId,
        content: event.target.value,
    }))

    const removeItem = (event) => dispatch(ListAction.removeItem({
        listId: props.listId,
        itemId: props.itemId,
    }))

    let listInputClass = props.item.checked ? "checked-input d-contents" : "d-contents"

    return (
        <div
            className="d-flex my-1"
            onMouseEnter={props.deleteBtn ? onHoverStart : null}
            onMouseLeave={props.deleteBtn ? onHoverStop : null}>

            {
                props.editable ? (
                    <>
                    <Checkbox onClick={toggleItemCheck} checked={props.item.checked} className="mr-2 ml-0 my-1" />
                    <Input onChange={updateItem} transparent value={props.item.content} className={listInputClass} />
                    </>
                ) : (
                    <Checkbox onClick={toggleItemCheck} label={props.item.content} checked={props.item.checked} />
                )
            }
            {
                props.deleteBtn ? (
                    <Button className={`ml-auto basic red ${hovered ? "" : "hidden"}`}
                    size="mini" compact onClick={removeItem}
                    icon="trash alternate outline" />
                ) : ""
            }
            <br />
        </div>
    )
}

export default ListItem
