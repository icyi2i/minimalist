const ListIndexAction = {
    create: (payload) => {
        return {
            type: "lists/create",
            payload
        }
    },
    fetchAll: () => ({
        type: "lists/fetchAll",
    }),
}

export default ListIndexAction
