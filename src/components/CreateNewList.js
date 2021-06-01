import { useDispatch } from 'react-redux'
import ListAction from '../actions/ListAction'
import { v4 } from 'uuid'
import { Button } from 'semantic-ui-react'

const CreateNewList = (props) => {
    const payload = {
        title: "",
        description: "",
        items: []
    }
    const dispatch = useDispatch()

    const createNewList = () => dispatch(
        ListAction.create({
            data : {
                ...payload,
                date: new Date() - 1000
            },
            listId: v4(),
            }))
    return (
        <>
            <div className="spacer"></div>
            <Button
            onClick={createNewList} size="massive" circular
            icon="add" positive className="floating-button" />
        </>
    )
}

export default CreateNewList
