// Define the TV element
elements.youtube_tv = {
    color: "#444444",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 2000,
    onInteract: function(pixel) {
        let url = prompt("Paste YouTube URL (e.g., https://www.youtube.com):");
        if (url) {
            playYouTube(url);
        }
    },
    desc: "Place and click to watch YouTube videos!"
};

// Function to create the floating video player
function playYouTube(url) {
    let videoId = "";
    
    // Extract Video ID from URL
    try {
        if (url.includes("v=")) {
            videoId = url.split("v=")[1].split("&")[0];
        } else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0];
        } else {
            alert("Invalid YouTube link!");
            return;
        }
    } catch (e) {
        alert("Error parsing URL.");
        return;
    }

    // Create the UI Window
    let container = document.createElement("div");
    container.id = "yt-player-container";
    container.style.cssText = `
        position: fixed;
        top: 100px;
        left: 100px;
        z-index: 10000;
        background: #222;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        border: 2px solid #555;
    `;

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px; cursor:move;">
            <strong style="color:white; font-family:sans-serif; font-size:12px;">Sandboxels TV</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="cursor:pointer; background:#ff4444; border:none; color:white; border-radius:3px; padding: 2px 8px;">X</button>
        </div>
        <iframe width="480" height="270" 
            src="https://www.youtube.com{videoId}" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
    `;

    document.body.appendChild(container);
}

console.log("YouTube TV Mod Loaded! Check the 'Machines' tab.");
