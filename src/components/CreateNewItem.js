import { useDispatch } from 'react-redux'
import ListAction from '../actions/ListAction'
import { Button, Input } from 'semantic-ui-react'
import { useParams } from "react-router"
import { useState } from "react"

const CreateNewItem = (props) => {
    const { id } = useParams("id")
    const [newItemContent, setNewItemContent] = useState("");

    const dispatch = useDispatch()

    const createNewItem = () => {
        dispatch(
            ListAction.addItem({
                content: newItemContent,
                listId: id,
            })
        )
        setNewItemContent("")
    }

    const updateNewItemContent = (event) => {
        setNewItemContent(event.target.value)
    }
    const enterPressed = (event) => {
        if (event.key === "Enter") {
            createNewItem()
        }
    }
    return (
        <>
            <Input
                size="large"
                fluid
                className="mx-2 high"
                action={
                    <Button
                    onClick={createNewItem}
                    icon="add" className="" positive size="big" />
                }
                placeholder="Add new item..."
                value={newItemContent}
                onChange={updateNewItemContent}
                onKeyDown={enterPressed}/>
        </>
    )
}

export default CreateNewItem
