

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

const callBtns = document.querySelectorAll(".card-call")
for(let callBtn of callBtns){
    Alert()
}




