let toSell = [];

export const toSellOrNotToSell = (firedPottery) => {
    if (! firedPottery.cracked) {
        // add price and push to array
        if (firedPottery.weight >= 6) {
            firedPottery.price = 40;
        } else {
            firedPottery.price = 20;
        }
        toSell.push(firedPottery);
    }
    return firedPottery;
}

export const usePottery = () => structuredClone(toSell);

