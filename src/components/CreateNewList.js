import { useDispatch } from 'react-redux'
import ListIndexAction from '../actions/ListIndexAction'
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
        ListIndexAction.create({
            ...payload,
            id: v4(),
            date: new Date() - 1000
            }))
    return (
        <Button
            onClick={createNewList} size="massive" circular
            icon="add" positive className="floating-button" />
    )
}

export default CreateNewList
