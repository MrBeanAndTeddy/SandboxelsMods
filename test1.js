// 1. Definition av den levande varelsen (Microbe)
elements.microbe = {
    name: "Test!",
    color: "#d1ffeb",
    behavior: behaviors.LIQUID, // De rör sig lite slumpmässigt i vätska
    category: "life",
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // Enkel AI: rör sig slumpmässigt för att se levande ut
        let moves = [[1,0], [-1,0], [0,1], [0,-1]];
        let move = moves[Math.floor(Math.random() * moves.length)];
        tryMove(pixel, pixel.x + move[0], pixel.y + move[1]);
    },
    excludeRandom: true // Gör att de inte dyker upp överallt slumpmässigt
};

// 2. Definition av den vita vätskan
elements.bio_liquid = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1000,
    // Varje tick finns en liten chans att en varelse "föds"
    tick: function(pixel) {
        if (Math.random() < 0.001 && isEmpty(pixel.x, pixel.y-1)) {
            createPixel("microbe", pixel.x, pixel.y-1);
        }
    },
    reactions: {
        "fire": { elem1: "steam", elem2: null }, // Kokar bort vid eld
    }
};
