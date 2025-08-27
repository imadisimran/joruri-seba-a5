function getValue(id) {
    const elementValue = document.getElementById(id).innerText;
    const elementValueToNum = parseInt(elementValue);
    return elementValueToNum;
}


document.getElementById("phone-section").addEventListener("click", function (event) {
    if (event.target.classList.contains("heart")) {
        let previousLoveCount = getValue("love")
        previousLoveCount += 1;
        document.getElementById("love").innerText = previousLoveCount;
    }
    else if (event.target.classList.contains("call-btn")) {
        const coinNumber = getValue("coin-count");
        if (coinNumber < 20) {
            alert("You don't have enough coin");
            return
        }
        const serviceName = event.target.parentNode.parentNode.querySelector(".service-name").innerText;
        const serviceNumber = event.target.parentNode.parentNode.querySelector(".service-number").innerText;
        const serviceNumberHeading=event.target.parentNode.parentNode.querySelector(".service-heading").innerText;
        
        const newCoinNumber = coinNumber - 20;
        document.getElementById("coin-count").innerText = newCoinNumber;
        alert(`📞Calling ${serviceName} ${serviceNumber}...`);

        const historyContainer=document.getElementById("history-container")
        const currentTime=new Date()
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
        <div class="flex justify-between items-center p-3 rounded-lg bg-gray-100 text-xs mt-5">
                    <div>
                        <h3 class="font-semibold">${serviceNumberHeading}</h3>
                        <p class="text-gray-400">${serviceNumber}</p>
                    </div>
                    <p>${currentTime.toLocaleTimeString("en-US")}</p>
                </div>
                `

        historyContainer.appendChild(newDiv);


    }
})


document.getElementById("clear-btn").addEventListener("click",function(){
    const historyContainer=document.getElementById("history-container")
    historyContainer.innerHTML="";
})