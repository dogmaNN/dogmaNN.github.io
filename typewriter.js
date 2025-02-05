const typewriterH1 = document.querySelector(".typewriter h1");
let text = ["Hello there", "你好", "Make videos, Develop", "also play some roblox games"]
let t = 0;
let i = 0;

function typewriter(){
    while (true){
        if (i > text.length) {
            i = 0
        }
        if (t < text[i].length) {
            typewriterH1.innerHTML += text[0].charAt(t);
            t++;
            setTimeout(typewriter, 100);
        }

        i++;
    }
}

typewriter()