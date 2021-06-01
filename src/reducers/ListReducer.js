import helpers from "../helpers"

const initialState = {
    "983f30d3-2d49-4574-9a1b-7001d83ad5f4" : {
        title: "Gorgeous Wooden Mouse",
        description: "Open-architected 4th generation strategy",
        items: [
            {
                content: "Enhanced eco-centric secured line",
                checked: false,
            },
            {
                content: "Inverse optimizing emulation",
                checked: false,
            },
        ],
        date: "Sun Jan 17 2021 12:55:44 GMT+0530 (India Standard Time)",
        starred: true,
    },
    "ef675284-4cd4-496c-93e6-341e7b22eb9b" : {
        title: "Tasty Steel Tuna",
        description: "Cross-platform user-facing access",
        items: [
            {
                content: "Digitized value-added orchestration",
                checked: true,
            },
            {
                content: "Customizable stable success",
                checked: true,
            },
            {
                content: "Persevering multi-tasking array",
                checked: true,
            },
            {
                content: "Enhanced human-resource open system",
                checked: true,
            },
            {
                content: "Future-proofed fresh-thinking synergy",
                checked: false,
            },
            {
                content: "Reduced actuating info-mediaries",
                checked: true,
            },
            {
                content: "Synergized local functionalities",
                checked: false,
            },
            {
                content: "Multi-tiered grid-enabled matrices",
                checked: false,
            },
        ],
        date: "Wed Nov 25 2020 19:51:26 GMT+0530 (India Standard Time)",
        starred: true,
    },
    "a30ab0e3-c78f-421c-ae7b-2acaa3453002" : {
        title: "Unbranded Soft Bike",
        description: "Re-engineered motivating implementation",
        items: [
            {
                content: "Stand-alone dedicated support",
                checked: false,
            },
            {
                content: "Optional optimal contingency",
                checked: false,
            },
            {
                content: "Organic real-time emulation",
                checked: true,
            },
        ],
        date: "Mon Jan 04 2021 23:34:46 GMT+0530 (India Standard Time)",
        starred: false,
    },
    "a63f960c-e622-466b-8948-69b3dd414066" : {
        title: "Awesome Concrete Keyboard",
        description: "Synergized high-level forecast",
        items: [
            {
                content: "Assimilated composite local area network",
                checked: true,
            },
            {
                content: "Customizable grid-enabled database",
                checked: false,
            },
            {
                content: "Reverse-engineered needs-based analyzer",
                checked: false,
            },
            {
                content: "Balanced static knowledge user",
                checked: true,
            },
            {
                content: "Realigned national model",
                checked: true,
            },
            {
                content: "Proactive cohesive forecast",
                checked: false,
            },
        ],
        date: "Fri Mar 26 2021 00:10:25 GMT+0530 (India Standard Time)",
        starred: false,
    },
    "15b21699-f06a-4598-8ed9-177b0d631cb0" : {
        title: "Refined Wooden Pants",
        description: "Ergonomic dynamic monitoring",
        items: [
            {
                content: "Persevering tangible hierarchy",
                checked: true,
            },
            {
                content: "Virtual systematic hub",
                checked: true,
            },
            {
                content: "Networked cohesive contingency",
                checked: true,
            },
        ],
        date: "Tue Dec 15 2018 06:44:37 GMT+0530 (India Standard Time)",
        starred: true,
    },
    "44ba9374-fe1f-4360-85bc-351b76f9545d" : {
        title: "Generic Metal Chicken",
        description: "Focused multi-state core",
        items: [
            {
                content: "Organized tertiary architecture",
                checked: false,
            },
            {
                content: "Robust 24/7 productivity",
                checked: false,
            },
            {
                content: "Switchable 24 hour encryption",
                checked: false,
            },
            {
                content: "Phased 3rd generation benchmark",
                checked: false,
            },
            {
                content: "Robust bifurcated architecture",
                checked: false,
            },
            {
                content: "Grass-roots modular definition",
                checked: false,
            },
        ],
        date: "Sat Jul 18 2016 17:47:15 GMT+0530 (India Standard Time)",
        starred: false,
    },
}

const ListReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    let listId = ""
    let itemId = ""

    switch (action.type) {
        case "lists/create":
            listId = action.payload.listId
            newState[listId] = action.payload.data
            break
        case "lists/delete":
            listId = action.payload.listId
            delete newState[listId]
            break
        case "lists/toggleStar":
            listId = action.payload.listId
            newState[listId].starred = ! newState[listId].starred
            break
        case "lists/toggleItemCheck":
            listId = action.payload.listId
            itemId = action.payload.itemId
            newState[listId].items[itemId].checked = (
                ! newState[listId].items[itemId].checked)
            break
        case "lists/updateTitle":
            listId = action.payload.listId
            newState[listId].title = action.payload.title
            break
        case "lists/updateDescription":
            listId = action.payload.listId
            newState[listId].description = action.payload.description
            break
        case "lists/addItem":
            listId = action.payload.listId
            newState[listId].items.push({
                checked: false,
                content: action.payload.content,
            })
            break
        case "lists/updateItem":
            listId = action.payload.listId
            itemId = action.payload.itemId
            newState[listId].items[itemId].content = action.payload.content
            break
        case "lists/removeItem":
            listId = action.payload.listId
            itemId = action.payload.itemId
            newState[listId].items = helpers.removeItem(
                newState[listId].items,
                itemId)
            break
        default:
            newState = state
    }
    return newState
}

export default ListReducer
