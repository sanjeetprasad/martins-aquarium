export const Location = (locationObj) => {
    return `
    <div>
    <p>Location:</p>
    <div>${locationObj.locationName}</div>
    <img class="location__image" src="${locationObj.image}"
        alt="">
    <div>${locationObj.quote}</div>
    
    
    
    </div>
    `
}