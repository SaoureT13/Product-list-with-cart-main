export default function reducer(cart, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...cart,
                {
                    name: action.itemName,
                    count: 1,
                },
            ];
        case "REMOVE_ITEM": {
            return cart.filter((item) => item.name !== action.itemName);
        }
        case "INCREMENT_ITEM": {
            return cart.map((item) => {
                if (item.name === action.itemName) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
        }
        case "DECREMENT_ITEM": {
            return cart
                .map((item) => {
                    if (item.name === action.itemName) {
                        if (item.count > 1) {
                            return { ...item, count: item.count - 1 };
                        } else {
                            return null;
                        }
                    }
                    return item;
                })
                .filter((item) => item !== null);
        }
        case "RESET_CART": {
            return [];
        }
        default:
            throw Error("Unknow action" + action.type);
    }
}
