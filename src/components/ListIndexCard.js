import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Header, Icon, Segment } from "semantic-ui-react"
import helpers from "../helpers"
import ListItem from "./ListItem"

const ListIndexCard = (props) => {
    const {id, title, description, items, date, starred} = props

    let starBtnIcon = starred ? "star" : "star outline"
    let starBtnClass = starred ? "" : "basic color-hover"
    let starBtnColor = starred ? "yellow" : "yellow"

    // console.log(id, starred);
    return (
        <Card fluid >
            <Card.Content>
                <Link to={`/lists/${id}`}>
                    <Header dividing className="m-0 mb-1" size="tiny" as="h4" content={helpers.trim(title, 40)}/>
                    <Card.Meta as="p" content={helpers.trim(description, 80)}/>
                </Link>

                <Segment className="greater than mobile">
                    {items.map(
                        (item, index) => <ListItem
                                            key={index}
                                            item={item}
                                            deleteBtn={false}/>
                            )}
                </Segment>

                <Card.Meta className="smaller mt-1">
                    <Icon name="clock outline"/>
                    <span>{helpers.humanizeDate(date)}</span>
                    <span className="right floated">(2/4)</span>
                </Card.Meta>
            </Card.Content>
            <Button.Group>
                <Button size="tiny" color={starBtnColor} className={starBtnClass} icon={starBtnIcon} />
                <Button as={Link} to={`/lists/${id}`} className="color-hover" color="blue" inverted icon="edit" />
                <Button className="color-hover" color="red" inverted icon="trash alternate outline" />
                <Button className="color-hover" color="violet" inverted icon="paint brush" />
            </Button.Group>
        </Card>
    )
}

export default ListIndexCard
