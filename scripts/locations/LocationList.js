import { useLocations } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

export const LocationList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    const locations = useLocations()
    // console.log(locations)

    let LocationHTMLRepresentation = ""
    for(const location of locations) {
        LocationHTMLRepresentation += Location(location)
    }

    contentElement.innerHTML += `
    <section class="locationList">
    <h3 class="lList">Location List</h3>
    <div class="locationContainer">
     ${LocationHTMLRepresentation}
     </div>
     </section>
`}