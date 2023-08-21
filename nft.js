const NFTs = [];

function mintNFT(Flower, Colour, Type_of_pollination, Blooming_season) {
    const NFT = {
        "Name": Flower,
        "ColourOfFlower": Colour,
        "TypeOfPollination": Type_of_pollination,
        "BloomingSeason": Blooming_season,
    }
    NFTs.push(NFT);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nNAME   = " + NFTs[i].Name);
        console.log("COLOUR = " + NFTs[i].ColourOfFlower);
        console.log("POLLINATION TYPE = " + NFTs[i].TypeOfPollination);
        console.log("SEASON OF BLOOMING = " + NFTs[i].BloomingSeason);



    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("LENGTH = " + NFTs.length);
}

// call your functions below this line
mintNFT("Rose", "Red", "InsectPollinated", "EarlyWinter");
mintNFT("Rose", "Pink", "InsectPollinated", "EarlyWinter");
mintNFT("Lotus", "Pink", "InsectPollinated", "Summer");
mintNFT("Lily", "White", "InsectPollinated", "Autumn");
listNFTs();
getTotalSupply();
