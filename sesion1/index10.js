function tinhTong(a, b) {
    let tong = a + b;
    return tong;
}
let a = 5;
let b = 10;
let sum = tinhTong(a, b);
console.log("sum =" + sum);

let str1 = "ab";
let str2 = "cd";
//add and upper ABCD
function addAndUpper(str1, str2) {
    let strResult = str1 + str2;
    strResult = strResult.toUpperCase();
    return strResult;
}

let result = addAndUpper(str1, str2);
console.log(result); 

async function getAPI() {
    //doi lay ket qua sau khi gan vao bien response
    let response = await fetch( "https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json?fbclid=IwAR2gEw0kelqIdRa1J0MCaQrZ-H8vR79LRseXfQqEwUjGnHPPer_jIiQs6cQ" );
    //http het response
    console.log(response);

    let data = await response.json();
    console.log(data);
    let list = document.getElementById("ul");
    
    for(let i=0; i < data.length; i++){
        list.innerHTML += `<li>${data[i].quoteText}</li>`
        list.innerHTML += `<li>${data[i].quoteAuthor}</li>`
    }
    
    
}
getAPI();




async function getAPI() {
    //doi lay ket qua sau khi gan vao bien response
    let response = await fetch( "https://reqres.in/api/users?fbclid=IwAR1QocOyoL4OL05q8h4Mo_pR87yRwe65wv7tMG1NuxQAOY6SG97hO__pHyw" );
    //http het response
    let datta = await response.json();
    

    let users = datta.data;
    for(let i=0; i < users.length; i++){
    
    console.log(users[i]);
    console.log(users[i].first_name);
    }

}
getAPI();
async function postUserAPI() {
    let option = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Quan",
            job: "Massage for dev",
        }),
    };
    const res = await fetch("https://reqres.in/api/users?fbclid=IwAR1QocOyoL4OL05q8h4Mo_pR87yRwe65wv7tMG1NuxQAOY6SG97hO__pHyw", option);
    console.log(await res.json());
}
postUserAPI();