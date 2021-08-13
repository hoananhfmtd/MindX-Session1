
let ul = document.getElementById("list");
console.log(ul.innerHTML);

ul.innerHTML += `<li>capuchino</li>`;
console.log(ul.innerHTML);

let heading = document.getElementById('hd');

function callbackFunc() {
    heading.innerHTML = 'da click';
}

// heading.addEventListener('click', callbackFunc);

heading.addEventListener('click', function () {
    alert('da click');
});


//bai tap: tao 1 button o HTML
//khi nguoi dung click button
//them 1 item moi vao list

//buoc 1: lay button, lay ra list
let button = document.getElementById("button");
let list = document.getElementById("list");
//buoc2: add event listener cho button
//buoc3: thay doi list o trong call back function
button.addEventListener("click", function (even) {
    list.innerHTML += `<li>new item</li>`;
    
});
//bat su kien user go ki tu
// let input = document.getElementById("input");
// input.addEventListener("keypress", function (event) {
//     console.log(event);
// });

//bat su kien user go enter
let input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
    console.log(event);
    //khi user bam phi enter
    if (event.keyCode === 13) {
        //lay ra value cua input
        let inputValue = input.nodeValue;
        list.innerHTML += `<li>${inputValue}</li>`;
    }
    
});

