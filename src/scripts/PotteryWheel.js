// initialize primaryKey
let primaryKey = 1;

// export function that takes in pottery info and returns pottery object
export const makePottery = (shape, weight, height) => {
    return {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey++
    }
}
