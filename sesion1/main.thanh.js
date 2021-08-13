async function getAPIdata() {
    let response = await fetch("https://sheetdb.io/api/v1/xckrmwr0gr8vq?fbclid=IwAR2Dsq1eCQEsVzWd6VVGUbkzz3USoc4T9LUHP9UF_j3ND-ay40It3Dwkm3k");
    let data = await response.json();

    return data;

}



// function search product by name 
function searchResult(productName) {
    let returnData = []
    getAPIdata().then(data => {
        let APIdata = data;
        // conso

        for (let i = 0; i < APIdata.length; i++) {
            console.log("each name", APIdata[i].name);
            // console.log(typeof (APIdata[i].name));
            if (APIdata[i].name.localeCompare(productName) === 0) {
                returnData.push(APIdata[i]);
            }
        }
        console.log(returnData);
    }
    )
    return returnData;
}
// 22 san pham -> start index = 2 
function onButtonClick(pagination) {

    let newProductDiv = document.querySelector(".new-product");
    newProductDiv.innerHTML = '';
    // console.log("newproductdiv after query :" + newProductDiv);
    let productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = '';
    // console.log("productsDiv after query :" + productsDiv);

    let i;
    console.log("pagination :" + pagination);

    switch (pagination) {
        case 1:
            i = 2;
            break;
        case 2:
            i = 8;
            break;
        case 3:
            i = 14
            break;
        case 4:
            i = 20;
            break;
    }
    console.log(i);

    getAPIdata().then(data => {
        // lấy data
        let apiData = data;

        console.log("i in then: " + i);
        for (let j = 0; j < 2; j++) {
            //0 - 1
            // tạo một div chứa các sản phẩm mới

            let newProductDiv = document.querySelector(".new-product");
            // newProductDiv.innerHTML = '';
            // tạo một thẻ <a> chứa thẻ div 
            // let surroundingAtag = document.createElement('a');
            // surroundingAtag.setAttribute('href', "product.html")
            // div sản phẩm 1

            let newProductOne = document.createElement("div");
            newProductOne.style.border="5px solid grey"

            newProductOne.id = data[j].id;
            console.log("div for each new product id : ", newProductOne.id)
            let surroundingAtag = document.createElement('a');
            surroundingAtag.style.textDecoration="none";

            let parameter = `${newProductOne.id}`

            surroundingAtag.setAttribute('href', "product.html?product-id=" + parameter)

            // newProductOne.addEventListener("click", onEachProductClick)

            // newProductOne.addEventListener("click",onProductClick)
            // tạo image sản phẩm 1
            var img = document.createElement('img');
            img.classList.add("new-product-img")
            img.src = data[j].img;
            img.width = "550";
            img.height="400";
            img.marginTop="100"
            // tạo tên sản phẩm mới 
            let newProductOneName = document.createElement("p");
            newProductOneName.classList.add("new-product-name")
            newProductOneName.innerText = `${data[j].name}`;
            newProductOneName.style.textDecoration="none";
            newProductOneName.style.color="black";
            newProductOneName.style.marginLeft="10%";
            // tạo giá tiền sản phẩm mới

            let newProductOnePrice = document.createElement("p")
            newProductOnePrice.innerText = `${data[j].price}`
            newProductOnePrice.classList.add("new-product-price");
            newProductOnePrice.style.textDecoration="none";
            newProductOnePrice.style.color="black";
            newProductOnePrice.style.marginLeft="10%";


            surroundingAtag.appendChild(img);
            surroundingAtag.appendChild(newProductOneName);
            surroundingAtag.appendChild(newProductOnePrice);
            newProductOne.appendChild(surroundingAtag);
            newProductDiv.appendChild(newProductOne);
        }
        productsDiv.innerHTML = '';
        // console.log("product div after clear : " + productsDiv)
        for (let j = i; j < i + 6; j++) {
            // tạo một thẻ <a> chứa thẻ div 
            // let surroundingAtag = document.createElement('a');
            // surroundingAtag.setAttribute('href', "product.html")
            // console.log(j);
            // console.log(i + 5);
            let productsDiv = document.querySelector(".products");
            // console.log("this is a product-div" + productsDiv)
            // div sản phẩm 1
            let eachProductDiv = document.createElement("div");
            eachProductDiv.id = data[j].id;
            eachProductDiv.style.marginBottom="10px"
            eachProductDiv.style.border="5px solid grey"

            console.log("div for each product id : ", eachProductDiv.id)
            let surroundingAtag = document.createElement('a');
            surroundingAtag.style.textDecoration="none";

            let parameter = `${eachProductDiv.id}`
            console.log("parameter " + parameter)

            surroundingAtag.setAttribute('href', "product.html?product-id=" + parameter)
            // eachProductDiv.addEventListener("click", onEachProductClick)

            // tạo image sản phẩm 1
            let productImg = document.createElement('img');
            productImg.classList.add("product-img")
            productImg.src = data[j].img;
            productImg.width = "400"
            productImg.height="350";
            // productImg.marginTop="100";
            // tạo tên sản phẩm mới 
            let eachProductName = document.createElement("p");
            eachProductName.classList.add("product-name")
            eachProductName.innerText = `${data[j].name}`
            eachProductName.style.textDecoration="none";
            eachProductName.style.color="black";
            eachProductName.style.marginLeft="10%";
            // tạo giá tiền sản phẩm mới

            let eachProductPrice = document.createElement("p")
            eachProductPrice.innerText = `${data[j].price}`
            eachProductPrice.classList.add("product-price");
            eachProductPrice.style.textDecoration="none";
            eachProductPrice.style.color="black";
            eachProductPrice.style.marginLeft="10%";

            surroundingAtag.appendChild(productImg);
            surroundingAtag.appendChild(eachProductName);
            surroundingAtag.appendChild(eachProductPrice);
            eachProductDiv.appendChild(surroundingAtag);
            productsDiv.appendChild(eachProductDiv);



        }

    }
    )
}

const buttonOne = document.querySelector("#btn-1")
const buttonTwo = document.querySelector("#btn-2")
const buttonThree = document.querySelector("#btn-3")
const buttonFour = document.querySelector("#btn-4")

buttonOne.addEventListener('click', () => { onButtonClick(1) })
buttonTwo.addEventListener('click', () => { onButtonClick(2) })
buttonThree.addEventListener('click', () => { onButtonClick(3) })
buttonFour.addEventListener('click', () => { onButtonClick(4) })


getAPIdata().then(data => {
    // lấy data
    let apiData = data;
    // console.log("image url" + data[0].img);
    // console.log("apiData : " + apiData);
    for (let i = 0; i < 8; i++) {
        if (i < 2) {
            //0 - 1
            // tạo một div chứa các sản phẩm mới
            let newProductDiv = document.querySelector(".new-product");


            // div sản phẩm 1
            let newProductOne = document.createElement("div");
            // -----------------------------------------------------------------
            newProductOne.style.marginTop="50px";
            newProductOne.id = data[i].id;
            newProductOne.style.border="5px solid grey"
            console.log("render time new product 1 div id", newProductOne.id)
            // console.log("test get id ")
            // newProductOne.addEventListener("click", onEachProductClick);
            // tạo một thẻ <a> chứa thẻ div 
            let surroundingAtag = document.createElement('a');
            surroundingAtag.style.textDecoration="none";

            let parameter = `${newProductOne.id}`

            surroundingAtag.setAttribute('href', "product.html?product-id=" + parameter)
            // tạo image sản phẩm 1
            var img = document.createElement('img');
            img.classList.add("new-product-img")
            img.src = data[i].img;
            img.width = "550";
            img.height="400";
            img.id = "img-id"
            img.marginTop="100";

            // tạo tên sản phẩm mới 
            let newProductOneName = document.createElement("p");
            newProductOneName.classList.add("new-product-name")
            newProductOneName.innerText = `${data[i].name}`
            newProductOneName.style.textDecoration="none";
            newProductOneName.style.color="black";
            newProductOneName.style.marginLeft="10%";

            // tạo giá tiền sản phẩm mới

            let newProductOnePrice = document.createElement("p")
            newProductOnePrice.innerText = `${data[i].price}`
            newProductOnePrice.classList.add("new-product-price");
            newProductOnePrice.style.textDecoration="none";
            newProductOnePrice.style.color="black";
            newProductOnePrice.style.marginLeft="10%";

            // newProductOne.appendChild(img);
            // newProductOne.appendChild(newProductOneName);
            // newProductOne.appendChild(newProductOnePrice);
            surroundingAtag.appendChild(img);
            surroundingAtag.appendChild(newProductOneName);
            surroundingAtag.appendChild(newProductOnePrice);
            newProductOne.appendChild(surroundingAtag);
            newProductDiv.appendChild(newProductOne);

        }
        else {
            let productsDiv = document.querySelector(".products");

            // div sản phẩm 1
            let eachProductDiv = document.createElement("div");
            eachProductDiv.id = data[i].id;
            eachProductDiv.marginTop="100";
            eachProductDiv.style.border="5px solid grey";
            eachProductDiv.style.marginBottom="10px"

            console.log("each product div id :", eachProductDiv.id)

            // eachProductDiv.addEventListener("click", onEachProductClick);
            // tạo một thẻ <a> chứa thẻ div 
            let surroundingAtag = document.createElement('a');
            surroundingAtag.style.textDecoration="none";
            let parameter = `${eachProductDiv.id}`

            surroundingAtag.setAttribute('href', "product.html?product-id=" + parameter)


            // console.log("test get id ")


            // tạo image sản phẩm 1
            let productImg = document.createElement('img');
            productImg.classList.add("product-img")
            productImg.src = data[i].img;
            productImg.width = "400"
            productImg.height="350";
            // productImg.marginTop="500";

            // productImg.id = "img-id";

            // tạo tên sản phẩm mới 
            let eachProductName = document.createElement("p");
            eachProductName.classList.add("product-name")
            eachProductName.innerText = `${data[i].name}`
            // eachProductName.style.textDecoration="none";
            eachProductName.style.textDecoration="none";
            eachProductName.style.color="black";
            eachProductName.style.marginLeft="10%";
            // tạo giá tiền sản phẩm mới

            let eachProductPrice = document.createElement("p")
            eachProductPrice.innerText = `${data[i].price}`
            eachProductPrice.classList.add("product-price");
            eachProductPrice.style.textDecoration="none";
            eachProductPrice.style.color="black";
            eachProductPrice.style.marginLeft="10%";

            surroundingAtag.appendChild(productImg);
            surroundingAtag.appendChild(eachProductName);
            surroundingAtag.appendChild(eachProductPrice);
            eachProductDiv.appendChild(surroundingAtag);
            productsDiv.appendChild(eachProductDiv);

        }


    }

}

)

