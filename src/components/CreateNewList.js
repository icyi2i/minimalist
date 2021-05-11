import { useDispatch } from 'react-redux'
import ListIndexAction from '../actions/ListIndexAction'
import { v4 } from 'uuid'
import { Button } from 'semantic-ui-react'

const CreateNewList = () => {
    const payload = {
        title: "",
        description: "",
        items: []
    }
    const dispatch = useDispatch()

    return (
        <Button
            onClick={() => dispatch(
                ListIndexAction.create({...payload, id: v4()}))}
            icon="add" labelPosition="left" content="Create new"
            color="green"/>
    )
}

export default CreateNewList
