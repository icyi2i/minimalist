import { useDispatch } from 'react-redux'
import ListAction from '../actions/ListAction'
import { Button, Grid, Input } from 'semantic-ui-react'
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
    return (
        <>
            <div className="spacer"></div>
            <Grid centered className="padded bottom-action">
                <Grid.Column widescreen="4" largeScreen="6" computer="10" tablet="12" mobile="16">
                    <Input
                        size="large"
                        fluid
                        action={
                            <Button
                            onClick={createNewItem}
                            icon="add" className="" positive />
                        }
                        placeholder="Add new item..."
                        value={newItemContent}
                        onChange={updateNewItemContent}/>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default CreateNewItem
