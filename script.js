setName();
function setName() {
    name = 'Michella';

    var name;
    
    console.log(name);

}

console.log('some text');
let avg = findAvg(2,2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}   


//why did it print apple and banana but not tomato
let fruits = ['apple', 'tomato', 'banana'];
let favFruit;
let leasFav;

function printFruits() {
    favFruit = fruits[1]; //why 2?
    leasFav = fruits[2];
    console.log(fruits[0]); //why 0?
}

function printFavFruit() {
    console.log(favFruit);
}

printFruits();
printFavFruit();

console.log(leasFav);


let expression = function(message) {
    alert(message);
}

expression('I am some text');


