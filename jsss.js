
const targetDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;


function updateCountdown() {
    
    const now = new Date().getTime();
    
   
    const timeRemaining = targetDate - now;
    
   
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
   
    document.querySelector(".time1 #a1").textContent = days; 
    document.querySelector(".time2 #a1").textContent = hours;
    document.querySelector(".time3 #a1").textContent = minutes;
    document.querySelector(".time4 #a1").textContent = seconds;
    
   
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        document.querySelector(".time1 #a1").textContent = "0";
        document.querySelector(".time2 #a1").textContent = "0";
        document.querySelector(".time3 #a1").textContent = "0";
        document.querySelector(".time4 #a1").textContent = "0";
    }
}


const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();






let mybutton = document.getElementById("goTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";  
    } else {
        mybutton.style.display = "none";   
    }
};


mybutton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};


