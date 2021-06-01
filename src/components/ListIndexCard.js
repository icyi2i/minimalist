import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Card, Divider, Header, Icon } from "semantic-ui-react"
import ListAction from "../actions/ListAction"
import helpers from "../helpers"
import ListItem from "./ListItem"

const ListIndexCard = (props) => {
    const {id, title, description, items, date, starred} = props

    let starBtnIcon = starred ? "star" : "star outline"
    let starBtnClass = starred ? "" : "basic color-hover"
    let starBtnColor = starred ? "yellow" : "yellow"


    let displayTitle = title.length ? helpers.trim(title, 40) : "Untitled"
    let checkedItems = items.filter(item => item.checked).length

    const dispatch = useDispatch()

    const deleteList = () => dispatch(ListAction.delete({listId: id}))
    const toggleStar = () => dispatch(ListAction.toggleStar({listId: id}))

    // console.log(id, starred);
    return (
        <Card fluid >
            <Card.Content>
                <Link to={`/lists/${id}`}>
                    <Header className="m-0 mb-1" size="tiny" as="h4" content={displayTitle}/>
                    {
                        description.length ?
                        <Card.Meta
                            as="p"
                            content={helpers.trim(description,
                                80)}/>
                        : ""
                    }
                </Link>

                <Divider clearing />
                <div className="greater than mobile p-0">
                    {
                        items.length ?
                        items.map(
                        (item, index) => <ListItem
                                            key={index}
                                            listId={id}
                                            itemId={index}
                                            item={item}
                                            deleteBtn={false}
                                            editable={false}/>
                            )
                        :
                        <Card.Meta
                            as="p" textAlign="center"
                            content="No items yet!"/>
                    }
                </div>
                <Divider clearing />

                <Card.Meta className="smaller mt-1">
                    <Icon name="clock outline"/>
                    <span>{helpers.humanizeDate(date)}</span>
                    <span className="right floated">
                        {`(${checkedItems}/${items.length})`}
                    </span>
                </Card.Meta>
            </Card.Content>
            <Button.Group>
                <Button
                    onClick={toggleStar}
                    size="tiny"
                    color={starBtnColor}
                    className={starBtnClass}
                    icon={starBtnIcon} />
                <Button
                    as={Link} to={`/lists/${id}`}
                    className="color-hover"
                    color="blue" inverted
                    icon="edit" />
                <Button
                    onClick={deleteList}
                    className="color-hover"
                    color="red" inverted
                    icon="trash alternate outline" />
                <Button
                    className="color-hover"
                    color="violet" inverted
                    icon="paint brush" />
            </Button.Group>
        </Card>
    )
}

export default ListIndexCard
