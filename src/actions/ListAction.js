const actionVerbs = [
    "create",
    "delete",
    "toggleStar",
    "toggleItemCheck",
    "updateTitle",
    "updateDescription",
    "addItem",
    "updateItem",
    "removeItem",
]

const ListAction = {}
actionVerbs.forEach(verb => {
    ListAction[verb] = (payload)=> {
        return {
            type: "lists/" + verb,
            payload,
        }
    }
})

export default ListAction
