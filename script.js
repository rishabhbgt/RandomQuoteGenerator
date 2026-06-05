let main = document.querySelector('main');
let btn = document.querySelector('button');

let quotes = ["First, solve the problem. Then, write the code.",
    "Code is like humor. When you have to explain it, it's bad.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "Every bug is an opportunity to learn.",
    "Practice makes a programmer better.",
    "Debugging is like being a detective in a crime movie.",
    "The best error message is the one that never shows up.",
    "Keep coding, keep growing.",
    "A developer's superpower is persistence.",
    "Build projects, not just tutorials."];


btn.addEventListener('click',function(){
    let h1 = document.createElement('h1');

    let x = Math.random() * 80;
    let y = Math.random() * 80;
    let r = Math.random() * 360;
    let scl = Math.random() * 3;
    
    let a = Math.floor(Math.random() * quotes.length);
    
    h1.innerHTML = quotes[a];

    h1.style.position = 'absolute';
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.rotate = r + 'deg';
    h1.style.scale = scl ;

    main.appendChild(h1);
});


