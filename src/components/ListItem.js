import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Button, Checkbox } from 'semantic-ui-react'
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

    const updateItem = (event) =>{
        console.log(event.target.innerText);
        dispatch(ListAction.updateItem({
        listId: props.listId,
        itemId: props.itemId,
        content: event.target.innerText,
    }))}

    const removeItem = (event) => dispatch(ListAction.removeItem({
        listId: props.listId,
        itemId: props.itemId,
    }))

    let listInputClass = props.item.checked ? "checked" : ""

    return (
        <div
            className="d-flex my-1"
            onFocus={props.deleteBtn ? onHoverStart : null}
            onBlur={props.deleteBtn ? onHoverStop : null}
            onMouseEnter={props.deleteBtn ? onHoverStart : null}
            onMouseLeave={props.deleteBtn ? onHoverStop : null}>

            {
                props.editable ? (
                    <>
                    <Checkbox onClick={toggleItemCheck} checked={props.item.checked} className="mr-2 ml-0 my-1" />
                    {/* <Input onChange={updateItem} transparent value={props.item.content} className={listInputClass} /> */}
                    <div className={"d-contents editable " +listInputClass}>
                        <div className="break-word whitespaced" suppressContentEditableWarning={true} onBlur={updateItem} contentEditable={true}>{props.item.content}</div>
                    </div>
                    </>
                ) : (
                    <Checkbox onClick={toggleItemCheck} label={props.item.content} checked={props.item.checked} className="break-word whitespaced"/>
                )
            }
            {
                props.deleteBtn ? (
                    <Button className={`ml-auto height-max-content basic red ${hovered ? "" : "hidden"}`}
                    size="medium" compact onClick={removeItem}
                    icon="trash alternate outline" />
                ) : ""
            }
            <br />
        </div>
    )
}

export default ListItem
