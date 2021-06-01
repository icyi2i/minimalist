import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Button, Divider, Form, Header, Input, Segment, TextArea } from "semantic-ui-react"
import ListAction from "../actions/ListAction"
import CreateNewItem from "./CreateNewItem"
import ListItem from "./ListItem"

const ListView = () => {
    const { id } = useParams("id")

    let {
            title,
            description,
            items,
            starred } = useSelector((state) => state.lists[id])

    let starBtnIcon = starred ? "star" : "star outline"
    let starBtnClass = starred ? "" : "basic color-hover"
    let starBtnColor = starred ? "yellow" : "yellow"

    const dispatch = useDispatch()

    const toggleStar = () => dispatch(
        ListAction.toggleStar(
            {
                listId: id
            }
        ))

    const updateTitle = (event) => dispatch(
        ListAction.updateTitle(
            {
                listId: id,
                title: event.target.value
            }
        ))
    const updateDescription = (event) => dispatch(
        ListAction.updateDescription({
            listId: id,
            description: event.target.value
        })
    )

    let checkedItems = items.filter(item => item.checked).length

    return (
        <>
        <Segment className="m-2">
            <Input
                placeholder="Title"
                fluid
                size="massive"
                transparent
                value={title}
                onChange={updateTitle}/>
            <Divider />
            <Form>
            <TextArea
                placeholder="Description"
                rows={3}
                value={description}
                onChange={updateDescription}/>
            </Form>

            <Segment className="greater than mobile">
                {items.length ? items.map(
                    (item, index) => <ListItem
                                        key={index}
                                        listId={id}
                                        itemId={index}
                                        item={item}
                                        deleteBtn={true}
                                        editable={true}/>
                        ) : "No items yet!"}
            </Segment>

            <div className="mt-1 d-flex">
                <Header
                    size="small"
                    icon="check"
                    className="my-2"
                    content={`(${checkedItems}/${items.length})`}/>
                <Button
                    size="big"
                    color={starBtnColor}
                    className={starBtnClass + " p-2 mr-0 ml-auto d-inline-block"}
                    icon={starBtnIcon}
                    onClick={toggleStar} />
            </div>
        </Segment>
        <CreateNewItem />
        </>
    )
}

export default ListView
