function getValue(id){
    const elementValue=document.getElementById(id).innerText;
    const elementValueToNum=parseInt(elementValue);
    return elementValueToNum;
}


document.getElementById("phone-section").addEventListener("click",function(event){
    if(event.target.classList.contains("heart")){
        let previousLoveCount=getValue("love")
        previousLoveCount+=1;
        document.getElementById("love").innerText=previousLoveCount;
    }
    else if(event.target.classList.contains("call-btn")){
        const serviceName=event.target.parentNode.parentNode.querySelector(".service-name").innerText;
        const serviceNumber=event.target.parentNode.parentNode.querySelector(".service-number").innerText;
        const cointNumber=parseInt(document.getElementById("coin-count").innerText);
        if(cointNumber<20){
            alert("You don't have enough coin");
            return
        }
        const newCoinNumber=cointNumber-20;
        alert(`Calling ${serviceName} ${serviceNumber}...`);
        document.getElementById("coin-count").innerText=newCoinNumber;
        

    }
})