import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Button, Divider, Form, Grid, Header, Input, Segment, TextArea } from "semantic-ui-react"
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
        <Grid centered className="px-0 py-2 m-0">
        <Grid.Column largeScreen="6" computer="10" tablet="12" mobile="16" className="p-0">
            <Segment className="mx-2 p-2 high">
                <div className="d-flex border border-bottom">
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
                <Divider />

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
                            ) : <p className="meta strong text-center">No items yet!</p>}
                </Segment>
            </Segment>

            <div className="spacer"></div>
            <div className="fixed-bottom-action">
                <CreateNewItem />
            </div>
        </Grid.Column>
        </Grid>
        {/* <Grid centered className="padded bottom-action">
            <Grid.Column largeScreen="6" computer="10" tablet="12" mobile="16">
                <CreateNewItem />
            </Grid.Column>
        </Grid> */}
        </>
    )
}

export default ListView
