export default [
    {
        id: 1,
        name: "Mobile Banking",
        icon: "smartphone",
        selected: false,
        subMenus: [
            {
                id: 11,
                name: "Investment",
                selected: false,
                icon: "savings",
                subMenus: [
                    {
                        id: 111,
                        name: "INV - Test Case 1",
                        selected: false
                    },
                    {
                        id: 112,
                        name: "INV - Test Case 2",
                        selected: false
                    },
                    {
                        id: 113,
                        name: "INV - Test Case 3",
                        selected: false
                    },
                ]
            },
            {
                id: 12,
                name: "Connect",
                selected: false,
                icon: "share",
                subMenus: [
                    {
                        id: 121,
                        name: "CON - Test Case 1",
                        selected: false
                    },
                    {
                        id: 122,
                        name: "CON - Test Case 2",
                        selected: false
                    },
                    {
                        id: 123,
                        name: "CON - Test Case 3",
                        selected: false
                    },
                ]
            }
        ]

    },
    {
        id: 2,
        name: "E Banking",
        icon: "computer",
        selected: false,
        subMenus: [
            {
                id: 21,
                name: "EB - Test Case 1",
                selected: false,
            },
            {
                id: 22,
                name: "EB - Test Case 2",
                selected: false,
            }
        ]

    },
    {
        id: 3,
        name: "Circle One",
        icon: "sensor_occupied",
        selected: false,
        subMenus: [
            {
                id: 31,
                name: "C1 - Test Case 1",
                selected: false,
            },
            {
                id: 32,
                name: "C2 - Test Case 2",
                selected: false,
            }
        ]

    }
]