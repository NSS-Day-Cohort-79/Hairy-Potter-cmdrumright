import { usePottery } from "./PotteryCatalog.js"

export const potteryList = () => {
    let potteryHTML = ""
    for (const sellItem of usePottery()) {
        potteryHTML += `
            <section class="pottery" id="pottery--${sellItem.id}">
              <h2 class="pottery__shape">${sellItem.shape}</h2>
              <div class="pottery__properties">
                Item weighs ${sellItem.weight} and is ${sellItem.height} in height
              </div>
              <div class="pottery__price">Price is ${sellItem.price}</div>
            </section>
        `
    }
    return potteryHTML;
}
