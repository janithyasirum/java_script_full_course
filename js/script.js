//Challange 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born...good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
//Challange 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://64.media.tumblr.com/b0b2bee6118598d0343f0328cb97a5ee/tumblr_muz164vjYT1slwpo8o1_250.gifv";
    div.appendChild(image);
}
// Challange 3:Rock,Paper,Scissors
function rpsGame(Yourchoice) {
    console.log(Yourchoice);
    var humanchoice, botchoice;
    humanchoice = Yourchoice.id;

    botchoice = numberTochoice(randToRpsInt());
    console.log('computer choice:', botchoice);

    esults = decideWinner(humanchoice, botchoice); // [0,1]human lost | bot won
    console.log(results);

    message = finalmessage(results); //{ 'message': 'you won!', 'color': 'green' }
    console.log(message);
    // rpsFrontEnd(Yourchoice.id, botchoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberTochoice(number) {
    return ('rock', 'paper', 'scissors')(number);
}

function decideWinner(Yourchoice, computerchoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    var yourscore = rpsDatabase(Yourchoice)(computerchoice);
    var computerscore = rpsDatabase(computerchoice)(Yourchoice);
    return (yourscore, computerscore);
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };

    } else if (yourscore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You won!', 'color': 'green' };
    }
}