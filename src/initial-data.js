const initialData = {
    cards: {
        "meme1": { id: "meme1", title: "It is loss", price: 80 },
        "meme2": { id: "meme2", title: "NPC meme", price: 70 },
        "meme3": { id: "meme3", title: "Pepe the frog", price: 90},
        "meme4": { id: "meme4", title: "Ugandan Knuckles", price: 55 },
        "meme5": { id: "meme5", title: "It is loss 2", price: 30 },
        "meme6": { id: "meme6", title: "NPC meme 2", price: 45 },
        "meme7": { id: "meme7", title: "Pepe the frog 2", price: 75},
        "meme8": { id: "meme8", title: "Ugandan Knuckles 2", price: 15 }
    },
    columns: {
        "new-cards": {
            id: "new-cards",
            title: "Play this cards",
            cardIds: ["meme1", "meme2", "meme3", "meme4","meme5","meme6","meme7","meme8"]
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ["new-cards"]
};

export default initialData;
