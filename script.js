let getinput = document.querySelector(".inputbox");
let submitbtn = document.querySelector(".submitbtn")
let resetbtn = document.querySelector(".resetbtn")
let result = document.querySelector(".result")
let images = document.querySelector(".images")

submitbtn.addEventListener("click",function(){
     if (getinput.value > 100 || getinput.value < 0){
          alert("marks 0 - 100 er modde deta hobe");   
     } else if(getinput.value >=90 && getinput.value <= 100){
          result.innerHTML = `You Get GPA-5 (A+)` 
          images.src ="images/m90.jpg"
     } else if(getinput.value >=80 && getinput.value <= 90){
          result.innerHTML = `You Get GPA-4 (A)` 
          images.src ="images/m90.jpg"
     } else if(getinput.value >=70 && getinput.value <= 80){
          result.innerHTML = `You Get GPA-3.50 (A-)` 
          images.src ="images/m70.jpg"
     } else if(getinput.value >=60 && getinput.value <= 70){
          result.innerHTML = `You Get GPA-3 (B+)` 
          images.src ="images/m60.jpg"
     } else if(getinput.value >=50 && getinput.value <= 60){
          result.innerHTML = `You Get GPA-2 (B)` 
          images.src ="images/m50.jpg"
     } else if(getinput.value >=40 && getinput.value <= 50){
          result.innerHTML = `You Get GPA-1 (C)` 
          images.src ="images/m40.jpg"
     } else if(getinput.value >=33 && getinput.value <= 40){
          result.innerHTML = `You Get GPA-5 (D)` 
          images.src ="images/m33.jpg"
     } else {
          result.innerHTML =("tumi fail");
          images.src = "images/bangla-bangladesh.gif"
     }
})
resetbtn.addEventListener("click", function() {
     result.innerHTML = "";
     images.src = "";
     getinput.value ="";

})
