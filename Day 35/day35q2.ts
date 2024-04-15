//Question 104: Create a function that generates a random hexadecimal color code.

function getRandomHexColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomHexColor = getRandomHexColor();
console.log("Random hexadecimal color code:", randomHexColor);
