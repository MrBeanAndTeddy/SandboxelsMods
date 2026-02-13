runAfterLoad(function() {

    console.log("Liquid Plasma Mod Loaded");

    // ===== TEST ELEMENT (to confirm mod loads) =====
    elements.test_element = {
        color: "#ff00ff",
        behavior: behaviors.POWDER,
        category: "solids",
        state: "solid",
        description: "If you see this, the mod is working."
    };

    // ===== LIQUID PLASMA =====
    elements.liquid_plasma = {
        color: ["#ff4d00","#ff9900","#ffd500"],
        behavior: behaviors.LIQUID,
        category: "liquids",
        viscosity: 0.6,
        density: 2500,
        temp: 5000,
        tempLow: 1200,
        stateLow: "slag",
        burn: 100,
        burnTime: 200,
        fireColor: ["#ff2200","#ffaa00","#ffff66"],
        reactions: {
            "water": { elem1: "steam", elem2: "steam" },
            "ice": { elem2: "steam" },
            "wood": { elem2: "fire" },
            "plant": { elem2: "fire" },
            "metal": { elem2: "slag" }
        },
        state: "liquid",
        description: "Extremely hot plasma fluid that melts and ignites most materials."
    };

    // ===== SLAG =====
    elements.slag = {
        color: "#555555",
        behavior: behaviors.WALL,
        category: "solids",
        density: 3000,
        tempHigh: 1500,
        stateHigh: "liquid_plasma",
        state: "solid",
        description: "Hardened residue formed when plasma cools."
    };

});
