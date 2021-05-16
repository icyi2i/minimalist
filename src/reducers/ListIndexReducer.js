const initialState = [
    {
        id: "983f30d3-2d49-4574-9a1b-7001d83ad5f4",
        title: "Gorgeous Wooden Mouse",
        description: "Open-architected 4th generation strategy",
        items: [
            "Enhanced eco-centric secured line",
            "Inverse optimizing emulation",
        ],
        date: "Sun Jan 17 2021 12:55:44 GMT+0530 (India Standard Time)"
    },
    {
        id: "ef675284-4cd4-496c-93e6-341e7b22eb9b",
        title: "Tasty Steel Tuna",
        description: "Cross-platform user-facing access",
        items: [
            "Digitized value-added orchestration",
            "Customizable stable success",
            "Persevering multi-tasking array",
            "Enhanced human-resource open system",
            "Future-proofed fresh-thinking synergy",
            "Reduced actuating info-mediaries",
            "Synergized local functionalities",
            "Multi-tiered grid-enabled matrices",
        ],
        date: "Wed Nov 25 2020 19:51:26 GMT+0530 (India Standard Time)"
    },
    {
        id: "a30ab0e3-c78f-421c-ae7b-2acaa3453002",
        title: "Unbranded Soft Bike",
        description: "Re-engineered motivating implementation",
        items: [
            "Stand-alone dedicated support",
            "Optional optimal contingency",
            "Organic real-time emulation",
        ],
        date: "Mon Jan 04 2021 23:34:46 GMT+0530 (India Standard Time)"
    },
    {
        id: "a63f960c-e622-466b-8948-69b3dd414066",
        title: "Awesome Concrete Keyboard",
        description: "Synergized high-level forecast",
        items: [
            "Assimilated composite local area network",
            "Customizable grid-enabled database",
            "Reverse-engineered needs-based analyzer",
            "Balanced static knowledge user",
            "Realigned national model",
            "Proactive cohesive forecast",
        ],
        date: "Fri Mar 26 2021 00:10:25 GMT+0530 (India Standard Time)"
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
