import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Header, Icon, Input } from 'semantic-ui-react'
import ListIndexCard from './ListIndexCard'
import Masonry from "react-masonry-css"
import CreateNewList from "./CreateNewList"

const ListIndex = (props) => {
    // const store = useStore()

    const [searchText, setSearchText] = useState("")

    const filterSearch = (event) => setSearchText(event.target.value)

    const listsSelector = (state) => state.lists
    let lists = useSelector(listsSelector)

    // if (props.starred) {
    //     let filterStar = Object.keys(lists).filter(key => {
    //         return lists[key].starred
    //     })
    //     lists = [...new Set([
    //         ...filterStar,
    //         ...filterTitle,
    //         ...filterDescription])]
    // }


    let filterTitle = Object.keys(lists).filter(key => {
        let list = lists[key]
        return list.title.toLowerCase().includes(
            searchText.toLowerCase())
    })
    let filterDescription = Object.keys(lists).filter(key => {
        let list = lists[key]
        return list.description.toLowerCase().includes(
            searchText.toLowerCase())
    })

    let resultLists = [...new Set([...filterTitle, ...filterDescription])]

    resultLists = resultLists.sort((a,b) => {
        let dt_a = new Date(lists[a].date).getTime()
        let dt_b = new Date(lists[b].date).getTime()
        return (dt_a < dt_b) ? 1 : ((dt_a > dt_b) ? -1 : 0)
    })

    resultLists = props.starred ? resultLists.filter(key=> lists[key].starred) : resultLists

    const emptyMessage = ! searchText.length && ! resultLists.length ?
        "Try creating one!": ! resultLists.length ? "Search another term or check archive" : ""
    const emptyIcon = ! searchText.length && ! resultLists.length ?
        "smile outline" : ! resultLists.length ? "meh outline" : ""

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
                {! resultLists.length ? (
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
            {resultLists.length ? (
                <Grid as={Masonry} breakpointCols={breakpoints} className="padded" >
                    {
                        resultLists.map((listID) => (
                            <ListIndexCard key={listID} id={listID} {...lists[listID]}/>
                        ))
                        }
                </Grid>
                ):""}
            <CreateNewList floating={true}/>
        </div>
        </>
    )
}

export default ListIndex
