import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Header, Icon, Input } from 'semantic-ui-react'
import ListIndexCard from './ListIndexCard'
import Masonry from "react-masonry-css"
import CreateNewList from "./CreateNewList"

const ListIndex = () => {
    // const store = useStore()

    const [searchItem, setSearchItem] = useState({
        content: "",
        class: "normal"
    })

    const filterSearch = (event) => {
        let inputContent = event.target.value
        setSearchItem({
            ...searchItem,
            content: inputContent
        })
    }

    const listsSelector = (state) => state.lists
    let lists = useSelector(listsSelector)

    let lists_title = lists.filter(x => {
        return x.title.toLowerCase().includes(searchItem.content.toLowerCase())
    })
    let lists_description = lists.filter(x => {
        return x.description.toLowerCase().includes(searchItem.content.toLowerCase())
    })
    lists = [...new Set([...lists_title, ...lists_description])]
    lists = lists.sort((a,b) => {
        let dt_a = new Date(a.date).getTime()
        let dt_b = new Date(b.date).getTime()
        return (dt_a < dt_b) ? 1 : ((dt_a > dt_b) ? -1 : 0)
    })

    const emptyMessage = searchItem.content.length ?
        "Search another term or check Trash" :
        "Try creating one!"
    const emptyIcon = searchItem.content.length ?
        "meh outline" :
        "smile outline"

    const breakpoints = {
        default: 8,
        540: 1,
        720: 2,
        960: 3,
        1200: 4,
        1600: 6,
      }

    return (
        <>
        <div className="padded">
            <Grid centered className="padded">
                <Grid.Column widescreen="4" largeScreen="6" computer="10" tablet="12" mobile="16">
                    <Input icon="search" placeholder="Search lists..." fluid onChange={filterSearch}/>
                </Grid.Column>
                {! lists.length ? (
                    <Grid.Row>
                        <Header as='h2' icon>
                            <Icon name={emptyIcon} size="huge"/>
                            No lists found!
                            <Header.Subheader>
                            {emptyMessage}
                            </Header.Subheader>
                        </Header>
                    </Grid.Row>
                ) : ""}
            </Grid>
            {lists.length ? (
                <Grid as={Masonry} breakpointCols={breakpoints} className="padded" >
                    {
                        lists.map((listDetails, index) => (
                            <ListIndexCard key={index} {...listDetails}/>
                        ))
                        }
                </Grid>
                ):""}
            <div className="spacer"></div>
            <CreateNewList floating={true}/>
        </div>
        </>
    )
}

export default ListIndex
