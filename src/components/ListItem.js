import React, { useState } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

const ListItem = (props) => {
    let [hovered, setHovered] = useState(false)

    const onHoverStart = () => setHovered(true)
    const onHoverStop = () => setHovered(false)
    return (
        <div onMouseEnter={onHoverStart} onMouseLeave={onHoverStop}>
            <Checkbox label={props.item} className="margin-Y"/>
            <Button className={`basic red ${hovered ? "" : "hidden"}`}
                size="mini" compact floated="right"
                icon="trash alternate outline"/>
            <br />
        </div>
    )
}

export default ListItem
