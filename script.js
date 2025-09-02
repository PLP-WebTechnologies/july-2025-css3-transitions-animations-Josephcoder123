// script.js

// Part 2: Function to change the box color
function changeBoxColor() {
    const box = document.querySelector('.box');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
    document.getElementById('colorMessage').innerText = `Box color changed to: ${randomColor}`;
}

// Part 3: Function to toggle animation
function toggleAnimation() {
    const animatedBox = document.querySelector('.animated-box');
    animatedBox.classList.toggle('animated');
}
