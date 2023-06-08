export const increment = (incermentBy) => {
    return {
        type: "INCREMENT",
        payload: incermentBy
    }
}

export const decrement = (decrementBy) => {
    return {
        type: "DECREMENT",
        payload: decrementBy
    }
}