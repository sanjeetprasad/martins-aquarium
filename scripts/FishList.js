import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"




export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    const fishes = useFish()

    let FishHTMLRepresentation = ""
    for(const fish of fishes) {
        FishHTMLRepresentation += Fish(fish)
    }

    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
     ${FishHTMLRepresentation}
     </div>
     </section>
`}