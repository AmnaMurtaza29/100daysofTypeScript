// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let changeGuestList :string[] = ['Dada Abu Muhammad Yaqoob', 'Arfa Karim', 'Sir Zia'];

for(let i=0; i<changeGuestList.length; i++){

     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
 }

let absentGuest :string = 'Sir Zia' ;
let newGuest :string = 'Nana abu Muhammad Khan' ;

changeGuestList[2] = newGuest ;

 for(let i=0; i<changeGuestList.length; i++){
     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
 }

console.log(`Mr. ${absentGuest} is not coming to the party.`);