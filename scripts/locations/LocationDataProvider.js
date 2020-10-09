const locationCollection = [
    {
      locationName: "Japan",
      image: "./images/fishharvesting1.png",
     
      quote:
        "The act of fishing – for fish, dreams or whatever magic is available – is enough. It transports us to a special world, and a state of mind, where we are free",
    },
    {
        locationName: "Astralia",
        image: "./images/fishharvesting2.jpg",
       
        quote:
          "Having a fishing rod in your hand is merely an excuse to explore out-of-sight depths and reveal mysteries that previously only existed in dreams",
      },
      {
        locationName: "Canada",
        image: "./images/fishharvesting3.png",
       
        quote:
          "Some go to church and think about fishing, others go fishing and think about God.",
      }, {
        locationName: "USA",
        image: "./images/fishharvesting4.jpg",
       
        quote:
          "Most of the world is covered by water. A fisherman’s job is simple: Pick out the best parts.",
      },
  
  ];
  
  export const useLocations = () => {
    return locationCollection.slice();
  };