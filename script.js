// var dog = {
//     name: "louie",
//     species: "canine",
//     netWorth: 4.29,
//     isNuetured: false,

//     greeting: function(){
//         return this.name + " is worth $" + this.netWorth;
//     }
// }

// console.log(dog.name);
// console.log("Net worth is " + dog.netWorth);
// console.log(dog.greeting());

var output= document.getElementById("output");
var name = document.getElementById("firstName");

function buttonClick(){
    output.innerHTML = "Button Clicked";}

    function submitClick(e){
        e.preventDefault();
        output.innerHTML = firstName.value;
    }


