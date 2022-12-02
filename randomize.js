var raffle = [];
var grandBaie = [];
var leMorne = [];
var grandGaube = [];
var southAriAtoll = [];
var silverGrandGaube = [];
var goldSouthAriAtoll = [];

for (let i = 200; i > 0; i--) {
    var tempObj = {
        name: "LUX* Grand Baie Collectibles",
        image: `CID`,
        description: "1 night in a junior suite for two, on half board. A rooftop over the Indian Ocean all to yourself. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}
for (let i = 200; i > 0; i--) {
    var tempObj = {
        name: "LUX* Le Morne Collectibles",
        image: `CID`,
        description: "2 nights in a superior room for two, on half board. A private boat trip to swim with dolphins. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}
for (let i = 295; i > 0; i--) {
    var tempObj = {
        name: "LUX* Grand Gaube Collectibles",
        image: `CID`,
        description: "2 nights in a junior suite for two, on half board. A traditional pirogue boating experience to an islet. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}
for (let i = 295; i > 0; i--) {
    var tempObj = {
        name: "LUX* South Ari Atoll Collectibles",
        image: `CID`,
        description: "1 night in an overwater villa for two, on half board. An encounter with whale sharks guided by a Marine Biologist in the Maldives. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}
for (let i = 5; i > 0; i--) {
    var tempObj = {
        name: "SILVER COLLECTIBLES at LUX* Grand Gaube",
        image: `CID`,
        description: "5 nights in a superior room for two on half board. A traditional pirogue boating experience to an islet. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}
for (let i = 5; i > 0; i--) {
    var tempObj = {
        name: "GOLDEN COLLECTIBLES at LUX* South Ari Atoll",
        image: `CID`,
        description: "5 nights in an overwater villa for two on half board. An encounter with whale sharks guided by a Marine Biologist in the Maldives. An exclusive surprise should you wish to extend your trip"
    }
    raffle.push(tempObj);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  shuffle(raffle);
  console.log(raffle);