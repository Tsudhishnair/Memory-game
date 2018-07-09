/*
 * Create a list that holds all of your cards
 */

const cards = document.getElementsByClassName("card");
const noOfCards = cards.length;

 /*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) { 
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 // code by sudhish


let card1,card2;
let cardClickNo = 1;
let totalsteps = 0;
for(let i=0;i<noOfCards;i++)
{
  cards[i].addEventListener("click",c,false);
} 

function c(evt)
{   if(cardClickNo == 1)
    {
        evt.target.classList.add("show","open");         
        card1=evt.target.innerHTML;
        cardClickNo = 2;
    }
    else
    {
        evt.target.classList.add("show","open");  
        card2=evt.target.innerHTML;
        if(card1===card2)
        {  cardClickNo = 1;
            const matchcards = document.querySelectorAll(".show");
            const matchcardlength = matchcards.length;
            for(let j=0;j<matchcardlength;j++)
            {
                matchcards[j].classList.add("match");
                matchcards[j].classList.remove("open","show");
            }
            totalsteps+=1;
            document.querySelector(".moves").innerHTML=totalsteps;
        }
        else
        {
            cardClickNo = 1;
            const matchcards = document.querySelectorAll(".show");
            const matchcardlength = matchcards.length;
            for(let j=0;j<matchcardlength;j++)
            {
                matchcards[j].classList.remove("open","show");
                matchcards[j].classList.add("mismatchedCardsShake"); 
            } 
            totalsteps+=1;
            document.querySelector(".moves").innerHTML=totalsteps;
        }
    }
}
