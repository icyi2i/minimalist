import React from 'react'
import { Grid, Header, Icon, Segment } from "semantic-ui-react"

const About = () => {

    const features = [
        {
            icon: "list alternate outline",
            title: "Minimalism",
            subtitle: "Easy to use interface",
        },
        {
            icon: "paint brush",
            title: "Themes",
            subtitle: "Cateforize lists with themes",
        },
        {
            icon: "star",
            title: "Stars",
            subtitle: "Mark favorite lists with a star",
        },
    ]
    return (
        <div className="padded">
            <Segment textAlign="center" padded size="massive">

            <Header
                dividing
                size="huge"
                content="Minimalist"
                textAlign="center"
                subheader="A list app that offers!"
                className="my-4"/>

            <Grid columns="3" stackable>
                {
                    features.map((feature, index) => (
                        <Grid.Column key={index} className="content-center my-4">
                            <Icon size="large" name={feature.icon} />
                            <Header as="h2" className="mt-2 mb-4">
                                {feature.title}
                                <Header.Subheader as="p">
                                    {feature.subtitle}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                    ))
                }
            </Grid>
            </Segment>

        </div>
    )
}

export default About
