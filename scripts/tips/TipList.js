import { Tip } from "./Tip.js";
import { useTips } from "./TipDataProvider.js";


export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")

    const tips = useTips()

    let TipHTMLRepresentation = ""
    for(const tip of tips) {
        TipHTMLRepresentation += Tip(tip)
    }

    contentElement.innerHTML += `
    <section class="tipList">
    <h3>Tip List</h3>
    <div class="tipContainer">
     ${TipHTMLRepresentation}
     </div>
     </section>
`}