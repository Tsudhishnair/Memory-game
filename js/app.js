/*
 * Create a list that holds all of your cards
 */
// ----------------------------------------------------------------------------------------
// cards array & length
let cards = document.getElementsByClassName("card");
const noOfCards = cards.length;
let totalsteps = 0;
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
//shuffling the card 

 document.querySelector(".restart").addEventListener("click",function(){
    let a = [];
    for (let i=0;i<cards.length;i++)
    {
        a[i] = cards[i].innerHTML;  
    }
    let shuffled = shuffle(a);
    for(let i=0;i<cards.length;i++)
    {
        cards[i].innerHTML = shuffled[i]; 
    }
    cards = document.getElementsByClassName("card");
    for(let i=0;i<cards.length;i++)
    {
        cards[i].className="card";
    }
    totalsteps = 0;
    document.querySelector(".moves").innerHTML = totalsteps;
    resetstars();
    resettimer();
 });
 
 function resetstars()
 { 
    document.querySelector(".star3").style.color="gold";
    document.querySelector(".star2").style.color="gold";
    document.querySelector(".star1").style.color="gold";
 }

// ----------------------------------------------------------------------------------------
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// ------------------------------------------------------------------------------------------
// Shuffle function 

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
// --------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------

// timer code 
let time = 0;

 let a = setInterval(t,1000);
 function t(){
    document.querySelector(".timer").innerHTML =time;
    time++;
 }

 //----------------------------------------------------------------------------------------------

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

//  --------------------------------------------------------------------------------------------

// code for matching cards
let card1,card2;
let cardClickNo = 1;

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
    {   if(!evt.target.classList.contains("show","open"))
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
               matchcards[j].classList.add("mismatchedCardsShake");  
               setTimeout(removeshow,500);   
            } 
            setTimeout(removewobble,500);
            totalsteps+=1;
            document.querySelector(".moves").innerHTML=totalsteps;
			  }  }
    }
}

//------------------------------------------------------------------------------------------ 

//------------------------------------------------------------------------------------------
//function code for wobble effect if mismatched
function removewobble()
{

    const mismatchedCards = document.querySelectorAll(".mismatchedCardsShake");
    const mismatchedCardslength = mismatchedCards.length;
    for(let j=0;j<mismatchedCardslength;j++)
    {
      mismatchedCards[j].classList.remove("mismatchedCardsShake");   
    } 
}
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//function code for hiding cards if mismatched
function removeshow(){
    const matchcards = document.querySelectorAll(".show");
    const matchcardlength = matchcards.length;
    for(let j=0;j<matchcardlength;j++)
    {
    matchcards[j].classList.remove("open","show");
    }
}

//----------------------------------------------------------------------------------------------
// function to restart the timer on refresh
function resettimer()
{
    time = 0;
}

//-----------------------------------------------------------------------------------------------
//function for starcount

document.addEventListener("click",function(){
if((totalsteps>8 && totalsteps<12)||(time>80 && time<100 ))
 {
	document.querySelector(".star3").style.color="grey";
	document.querySelector(".star3").style.textShadow="white";
 }
 else if((totalsteps>12 )||(time>100   ))
 {
    document.querySelector(".star2").style.color="grey";
    document.querySelector(".satr2").style.textShadow="white";
 }
});

setInterval(rescheck,100);
function rescheck(){
let allopencards = document.querySelectorAll(".match");
let allopencardslength = allopencards.length;
if(allopencardslength == cards.length)
{   
    let finishtime =time;
	clearInterval(a);
	let st = document.querySelector(".stars");
	document.querySelector(".result-star").innerHTML=st.innerHTML;
	document.querySelector(".result-steps").innerHTML = totalsteps;
	document.querySelector(".result-time").innerHTML = finishtime;   
	document.querySelector(".main").style.display="none";
	document.querySelector(".resultpage").style.display="";
	}
}