// export function that returns fired pottery with fired and cracked properties
export const firePottery = (wetPottery, kilnTemp) => {
    let firedPottery = structuredClone(wetPottery);
    firedPottery.fired = true;
    if (kilnTemp > 2200) {
        firedPottery.cracked = true;
    } else {
        firedPottery.cracked = false;
    }
    return firedPottery
}
