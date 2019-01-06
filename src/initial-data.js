const initialData = {
    cards: {
        "meme1": { id: "meme1", title: "This is loss", price: 80 },
        "meme2": { id: "meme2", title: "NPC meme", price: 70 },
        "meme3": { id: "meme3", title: "Pepe the frog", price: 90},
        "meme4": { id: "meme4", title: "Ugandan Knuckles", price: 55 },
        "meme5": { id: "meme5", title: "Soup time", price: 95 },
        "meme6": { id: "meme6", title: "Harold in pain", price: 45 },
        "meme7": { id: "meme7", title: "Thicc", price: 75},
        "meme8": { id: "meme8", title: "Big Chungus", price: 15 }
    },
    columns: {
        "new-cards": {
            id: "new-cards",
            title: "Drop this cards from this area ...",
            cardIds: ["meme5","meme6","meme7","meme8"],
            played:false
        },
        "old-cards": {
            id: "old-cards",
            title: "... to this one!",
            cardIds: ["meme1", "meme2", "meme3", "meme4"],
            played:true
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ["new-cards","old-cards"]
};

export default initialData;
