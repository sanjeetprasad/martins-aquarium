import { Fish } from "./Fish.js"
import { useFish, mostHolyFish, soldierFish } from "./FishDataProvider.js"

const builtFishCointainerHTML = (arrayOfFish) => {

    let fishHTMLRepresentations = ""
    for(const fish of arrayOfFish) {

        fishHTMLRepresentations += Fish(fish)

}
return fishHTMLRepresentations

}





export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    //Building HTML for holy fish

    const holyFishes = mostHolyFish()
    // console.log(holyfishs)
    const holyFishHTML = builtFishCointainerHTML(holyFishes)
    // console.log(holyfish)

    // Building Html for soilder fish

    const soldierFishes = soldierFish()
    const soldierFishHTML = builtFishCointainerHTML(soldierFishes)

    
    

    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
     ${holyFishHTML}
     ${soldierFishHTML}
     </div>
     </section>
`}