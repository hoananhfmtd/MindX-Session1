let heading = document.getElementById('h1');
let button = document.getElementById('id');
function callbackFunc() {
    heading.innerHTML = 'Da Click';
}

button.addEventListener('click', callbackFunc);


// let array = ['Backpack', 'MiBand Watch', 'Ring'];
// console.log(array);
// let list = document.getElementById("list");
// console.log(list);
// for(let i=0; i<array.length; i++) {
// list.innerHTML += `<li>${array[i]}</li>`
// }