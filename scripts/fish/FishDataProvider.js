/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Nemo",
        image: "./images/betta1.webp",
        species: "Betta splendens",
        length: 3,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Memo",
        image: "./images/betta2.jpg",
        species: "Betta splendens",
        length: 6,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        Name: "Dori",
        image: "./images/betta3.jpg",
        Species: "Betta splendens",
        Length: 12,
        Location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Nemo twin",
        image: "./images/betta4.jpg",
        species: "Betta splendens",
        length: 5,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Memo twin",
        image: "./images/betta5.jpg",
        species: "Betta splendens",
        length: 25,
        Llcation: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Dori twin",
        image: "./images/betta6.jpg",
        species: "Betta splendens",
        length: 15,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Rose",
        image: "./images/betta7.jpg",
        species: "Betta splendens",
        length: 2.8,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Hope",
        image: "./images/betta8.jpg",
        species: "Betta splendens",
        length: 2,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Bang",
        image: "./images/betta9.jpg",
        species: "Betta splendens",
        length: 9.1,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Tang",
        image: "./images/betta10.jpg",
        species: "Betta splendens",
        length: 8,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Lang",
        image: "./images/betta11.jpg",
        species: "Betta splendens",
        length: 6,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },
    {
        name: "Hang",
        image: "./images/betta12.jpg",
        species: "Betta splendens",
        length: 5,
        location: "Animalia",
        food: "Mollusks, Worms, Insect, Larvae, other dead fish"
    },

]
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if ( fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldier = []
    for (const fish of fishCollection) {
        if (fish.length % 5 ===0 && fish.length %3 !== 0) {
            soldier.push(fish)
        }
    }
    // console.log(soldier)
    return soldier
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length %3 !== 0 && fish.length %5 !== 0) {
            regularFish.push(fish)
        }

    }
    return regularFish
}