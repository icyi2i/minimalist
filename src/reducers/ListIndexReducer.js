const initialState = [
    {
        id: "944384c1-bc68-4384-a869-80d7cfa12cc5",
        title: "Refined Concrete Bacon",
        description: "Stand-alone directional customer loyalty",
        items: ["Cheese", "Ball", "Bike", "Sausages", "Shirt", "Salad", "Chair", "Soap",]
    },
    {
        id: "5a5b6c42-56a2-474d-824d-dde4eb5ad288",
        title: "Small Metal Pants",
        description: "User-centric eco-centric info-mediarieson",
        items: ["Gloves", "Ball", "Hat", "Pizza",]
    },
    {
        id: "b3aba67b-2fc4-46b1-ab09-82bc582b3ec4",
        title: "Licensed Steel Gloves",
        description: "Self-enabling intermediate solution",
        items: ["Sausages", "Chair", "Soap", "Ball", "Hat", "Shirt",]
    },
    {
        id: "367dd793-88bb-423a-adab-a832395cbb5c",
        title: "Incredible Fresh Chair",
        description: "Cross-group maximized open system",
        items: ["Tuna", "Car", "Ball", "Gloves", "Chicken",]
    },
    {
        id: "75e46a34-371f-4701-8483-04bd904c29d7",
        title: "Intelligent Concrete Cheese",
        description: "Up-sized 24/7 application",
        items: ["Soap", "Bike", "Table", "Cheese", "Pants", "Table",]
    },
    {
        id: "0a4f414a-1778-4d6f-8949-86fe240b157f",
        title: "Fantastic Soft Car",
        description: "Up-sized 6th generation accessn",
        items: ["Ball", "Cheese", "Tuna", "Car",]
    },
]

const ListIndexReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        case "lists/create":
            newState = [ ...state, action.payload]
            break
        case "lists/fetchAll":
            newState = state
            break
        default:
            newState = state
    }
    return newState
}

export default ListIndexReducer
