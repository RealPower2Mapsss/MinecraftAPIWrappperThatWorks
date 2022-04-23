// const McPlayer = require("./src/McPlayer");

// const playerName = new McPlayer('jodu555');
// const playerUUID = new McPlayer('076b1e9c37714e84b1c70638514aba2e');
// const playerUUID2 = new McPlayer('076b1e9c-3771-4e84-b1c7-0638514aba2e');

// // playerUUID.getName();
// // playerUUID2.getName()

// playerUUID.getSkin();

const sharp = require('sharp');


// Turns out there aare skins where the head is not where i would it expect it to be! The Example is: My Skin and the skin from Editfusee

//TODO: This works fine for my skin
// sharp('sk.png').extract({ width: 8, height: 8, left: 40, top: 8 }).toFile('out.png')
//     .then(function (new_file_info) {
//         console.log("Image cropped and saved");
//     })
//     .catch(function (err) {
//         console.log("An error occured");
//         console.log(err);
//     });


sharp('sk2.png').extract({ width: 8, height: 8, left: 40, top: 8 }).toFile('out.png')
    .then(function (new_file_info) {
        console.log("Image cropped and saved");
    })
    .catch(function (err) {
        console.log("An error occured");
        console.log(err);
    });