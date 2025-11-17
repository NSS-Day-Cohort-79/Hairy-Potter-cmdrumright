// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 3);
let platter = makePottery("Platter", 4, 1);
let vase = makePottery("Vase", 6, 12);
let bowl = makePottery("Bowl", 4, 4);
let pot = makePottery("Pot", 8, 6);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000);
console.log(firedMug);
let firedPlatter = firePottery(platter, 2100);
console.log(firedPlatter);
let firedVase = firePottery(vase, 2200);
console.log(firedVase);
let firedBowl = firePottery(bowl, 2300);
console.log(firedBowl);
let firedPot = firePottery(pot, 2400);
console.log(firedPot);

// Determine which ones should be sold, and their price
let pricedMug = toSellOrNotToSell(firedMug);
console.log(pricedMug);
let pricedPlatter = toSellOrNotToSell(firedPlatter);
console.log(pricedPlatter);
let pricedVase = toSellOrNotToSell(firedVase);
console.log(pricedVase);
let pricedBowl = toSellOrNotToSell(firedBowl);
console.log(pricedBowl);
let pricedPot = toSellOrNotToSell(firedPot);
console.log(pricedPot);

// Invoke the component function that renders the HTML list
const potteryHTML = potteryList();
const potteryListElement = document.getElementById("potteryList");
potteryListElement.innerHTML = potteryHTML;
