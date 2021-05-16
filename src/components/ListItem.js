import React, { useState } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

const ListItem = (props) => {
    let [hovered, setHovered] = useState(false)

    const onHoverStart = () => setHovered(true)
    const onHoverStop = () => setHovered(false)

    return (
        <div
            onMouseEnter={props.deleteBtn ? onHoverStart : null}
            onMouseLeave={props.deleteBtn ? onHoverStop : null}>
            <Checkbox label={props.item} className="margin-Y-1"/>
            {
                props.deleteBtn ? (
                    <Button className={`basic red ${hovered ? "" : "hidden"}`}
                    size="mini" compact floated="right"
                    icon="trash alternate outline"/>
                ) : ""
            }
            <br />
        </div>
    )
}

export default ListItem
