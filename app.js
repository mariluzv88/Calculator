// querySelector -- nav to html tag by class name and target element
let screen = document.querySelector('.screen')

const uploadToScreen = (number) => {
     screen.append(number)
}
// once clicked .... i want the button to show its value on screen

const clearScreen = () => {
    screen.innerHTML= ""
}
// clears screen
//  .innerHTML finds element in html and reassigns it
// parseInt changes striing to int
// typeof() tells you the type of data
const calculateTerms = (x,y,sign) =>{
    if(sign === "+"){
        screen.innerHTML = parseInt(x) + parseInt(y);
    }else if(sign === "-"){
        screen.innerHTML = parseInt(x) - parseInt(y);

    }else if(sign === "x"){
        screen.innerHTML = parseInt(x) * parseInt(y);

    }else if(sign === "%"){
            screen.innerHTML = parseInt(x) + parseInt(y);

   }else if(sign === "/"){
         screen.innerHTML = parseInt(x) / parseInt(y);
   }else{
    alert("error something is wrong")

                    
                }

}

const splitInput = () => {
    let nput = screen.textContent;
    console.log(nput);
    if(nput.includes("+")){
        let solve = nput.split("+");
        console.log("input:", solve);
        calculateTerms(solve[0], solve[1], "+");
    }
    else if(nput.includes("-")){
        let solve = nput.split("-");
        console.log("input:", solve);
        calculateTerms(solve[0], solve[1],"-",)
    }
    else if(nput.includes("x")){
        let solve = nput.split("x");
        console.log("input:", solve);
        calculateTerms(solve[0], solve[1],"x")
    }else if(nput.includes("%")){
        let solve = nput.split("%");
        console.log("input:", solve);
        calculateTerms(solve[0], solve[1], "%")
    }else{
        alert("Error 404: Try again please")
    }
}
// let hero = "catwomen is super awesome"
// let newData = hero.split("is")
// console.log(newData)



// hw atm screen / account balance/ buttons on the side 