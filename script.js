

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// heart count functionalities

const heartCount = getElement("navbar-heart");
let count = 0;
const cardHearts = document.querySelectorAll(".card-heart")

for(let cardHeart of cardHearts){
    cardHeart.addEventListener("click", function(){
        count=count+1;
        heartCount.innerText = count;
     
    })
}

// call functionalities

const mainCoin = getElement("navbar-coin");
const cardCalls = document.getElementsByClassName("card-call");
for(let cardCall of cardCalls){
    cardCall.addEventListener("click",function(){
        const cardService = cardCall.parentNode.parentNode.children[1].children[1].innerText;

        const cardNumber = cardCall.parentNode.parentNode.children[1].children[2].innerText;
        console.log(cardNumber)

       
        const currentCoin = Number(mainCoin.innerText);
      
         const coinUpdate = currentCoin-20;

          if(coinUpdate<0){
            alert("❌You don't have enough coins. You need at least 20 coins to make a call.");
            return;
        }

      alert(`📞Calling ${cardService} ${cardNumber}`); 

         mainCoin.innerText = coinUpdate;

    })
}


// copy functionalities

const navBarCopy = getElement("navbar-copy");
let copyCount = 0;
const cardCopies = document.querySelectorAll(".card-copy");
for(const cardCopy of cardCopies){
    cardCopy.addEventListener('click',function(){
        const getCopiedNumber = cardCopy.parentNode.parentNode.children[1].children[2].innerText;

           const tempInput = document.createElement("textarea");
        tempInput.value = getCopiedNumber;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert(`Number is copied: ${getCopiedNumber}`);
        
        copyCount=copyCount+1;
    navBarCopy.innerText = copyCount;
    })
}



