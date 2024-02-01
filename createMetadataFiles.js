const fs = require("fs");

var raffle = [];

for (let i = 1000; i > 0; i--) {
    var tempObj = {
        name: "LUX* Christmas Collectible Raffle",
        image: `QmZNPpcTxVmmHYq6fVdbUKapbQFRvVwfnQSMkPjtzsko2V`,
        description: "On December 11th 2022, 1000 digital collectibles will be put out for purchase at 1K$. Each of these collectibles is attached to a hotel stay and to one of the 6 bespoke travel experiences crafted for this occasion. Gift your loved ones (or yourself) the best and most surprising Christmas present yet, and discover what’s inside on Christmas day."
    }
    raffle.push(tempObj);
}
var count = 0;
raffle.forEach(element => {
    fs.writeFileSync(`./luxMetadata/${count}.json`, JSON.stringify(element, null, 4));
    count++;
});
// raffle.forEach(element => {
//     fs.unlink(`./${count}.json`,function (err) {
//         if (err) throw err;
//         console.log('File deleted!');
//       });
//     count++;
// });
