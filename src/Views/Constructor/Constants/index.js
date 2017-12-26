export const brands = {
    samsung: {
        value: "Samsung",
        id: 1
    },
    iphone: {
        value: "iPhone",
        id: 2
    },
    moto: {
        value: "Moto",
        id: 3
    },
    nokia: {
        value: "Nokia",
        id: 4
    },
    lg: {
        value: "LG",
        id: 5
    }
};

export const models = {
    [brands.samsung.id]: [
        {
            value: "Galaxy S3",
            id: 1
        },
        {
            value: "Galaxy S4",
            id: 2
        },
        {
            value: "Galaxy S5",
            id: 3
        },
        {
            value: "Galaxy Edge",
            id: 4
        }
    ],
    [brands.iphone.id]: [
        {
            value: "iPhone 5",
            id: 1
        },
        {
            value: "iPhone 5S",
            id: 2
        },
        {
            value: "iPhone 7",
            id: 3
        },
        {
            value: "iPhone X",
            id: 4
        }
    ],
    [brands.moto.id]: [
        {
            value: "X Play",
            id: 1
        }
    ],
    [brands.nokia.id]: [
        {
            value: "Lumia 2310",
            id: 1
        },
        {
            value: "Lumia 5123",
            id: 2
        },
        {
            value: "Lumia 1120",
            id: 3
        }
    ],
    [brands.lg.id]: [
        {
            value: "1523",
            id: 1
        },
        {
            value: "2234",
            id: 2
        },
        {
            value: "Cyber",
            id: 3
        }
    ]
}