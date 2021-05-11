import React from "react"
import { Button, Card, Segment } from "semantic-ui-react"
import helpers from "../helpers"
import ListItem from "./ListItem"

const List = (props) => {
    const {id, title, description, items} = props
    console.log(id);
    return (
        <Card fluid >
            <Card.Content>
                <Card.Header content={helpers.trim(title, 40)}/>
                <Card.Meta  content={helpers.trim(description, 80)}/>
                <Segment>
                    {items.map(
                        (item, index) => <ListItem key={index} item={item}/>)}
                </Segment>
            </Card.Content>
            <Button.Group>
                <Button className="color-hover" color="blue" basic icon="edit" />
                <Button className="color-hover" color="red" basic icon="trash alternate outline" />
                <Button className="color-hover" color="pink" basic icon="paint brush" />
            </Button.Group>
        </Card>
    )
}

export default List
