//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;

while (count >= 1) {
    console.log(count);
    if (count === 5) {
        break;
    }
    count--;
}
