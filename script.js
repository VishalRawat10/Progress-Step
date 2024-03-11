let btns = document.querySelectorAll(".btns button");
btns[0].setAttribute("disabled", "true");
let progressBars = document.querySelectorAll(".line");
let levels= document.querySelectorAll(".level");
let prevCount = 3;
let nextCount = 0;

btns[1].addEventListener("click", ()=>{
    nextCount++;
    prevCount--;
    btns[0].removeAttribute("disabled");
    btns[1].classList.add("btn-border");
    btns[0].classList.remove("btn-border");
    if(nextCount <= 3){
        console.log(btns[1], "clicked.");
        levels[nextCount].classList.add("blue-border");
        progressBars[nextCount-1].classList.add("blue-border");
        levels[nextCount].classList.remove("remove-blue-border");
        progressBars[nextCount-1].classList.remove("remove-blue-border");
        if(nextCount == 3){
            btns[1].setAttribute("disabled", "true");
        }
    }  
})

btns[0].addEventListener("click", ()=>{
    prevCount++;
    nextCount--;
    btns[1].removeAttribute("disabled");
    btns[0].classList.add("btn-border");
    btns[1].classList.remove("btn-border");
    if(prevCount >= 0){
        console.log(btns[0], "clicked.");
        levels[nextCount+1].classList.remove("blue-border");
        progressBars[nextCount].classList.remove("blue-border");
        levels[nextCount+1].classList.add("remove-blue-border");
        progressBars[nextCount].classList.add("remove-blue-border");
        if(prevCount == 3){
            btns[0].setAttribute("disabled", "true");
        }
    }
})

function changes(next, prev){

}