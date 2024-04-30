// Task 3: Simple Switch Statement
console.log("\nTask 3: Simple Switch Statement");
let day = 'Wednesday';
switch (day) {
  case 'Monday':
  case 'Tuesday':
    console.log('Weekday');
    break;
  case 'Wednesday':
    console.log('Midweek');
    break;
  default:
    console.log('Not a weekday');
}

// Task 4: Handling Unknown Input
console.log("\nTask 4: Handling Unknown Input");
let grade = 'B';
switch (grade) {
  case 'A':
    console.log('Good');
    break;
  case 'B':
    console.log('Satisfactory');
    break;
  case 'C':
    console.log('Passable');
    break;
  default:
    console.log('Unknown Grade');
}
