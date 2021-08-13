const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('product-id');
console.log(myParam);

async function getAPIdata() {
    let response = await fetch("https://sheetdb.io/api/v1/xckrmwr0gr8vq?fbclid=IwAR2Dsq1eCQEsVzWd6VVGUbkzz3USoc4T9LUHP9UF_j3ND-ay40It3Dwkm3k");
    let data = await response.json();

    return data;

}
function handleData() {
    let Gotdata;
    getAPIdata().then(data => {
        let APIdata = data;


        for (let i = 0; i < APIdata.length; i++) {

            console.log(typeof (myParam))
            if (myParam.localeCompare(APIdata[i].id) === 0) {
                console.log("object", APIdata[i])
                Gotdata = APIdata[i];
                console.log("Got data", Gotdata);



                break;
            }
        }
        //Gotdata.id
        let container = document.querySelector("#container-for-each-product");
        let specificProductContainer = document.createElement("div");
        specificProductContainer.style.fontSize="50px"
        specificProductContainer.style.border="3px solid grey"
        specificProductContainer.style.margin = "30px 30px 30px 30px"
        specificProductContainer.style.width="50%"
        specificProductContainer.id = "id";
        let specificProductName = document.createElement("div");
        specificProductName.id = "name";
        specificProductName.innerText ="Name :"+`${Gotdata.name}` ;
        specificProductName.style.paddingLeft="20%"
        let specificProductType = document.createElement("div");
        specificProductType.id = "type";
        specificProductType.innerText ="Type :" +`${Gotdata.type}`;
        specificProductType.style.paddingLeft="20%"
        let specificProductCubic = document.createElement("div");
        specificProductCubic.id = "cubic";
        specificProductCubic.innerText ="Cubic: " +`${Gotdata.cubic}`;
        specificProductCubic.style.paddingLeft="20%"
        let specificProductDate = document.createElement("div");
        specificProductDate.id = "date";
        specificProductDate.innerText ="Date: "+ `${Gotdata.date}`;
        specificProductDate.style.paddingLeft="20%"
        let specificProductPrice = document.createElement("div");
        specificProductPrice.id = "price";
        specificProductPrice.innerText ="Price: "+ `${Gotdata.price}`;
        specificProductPrice.style.paddingLeft="20%"
        let specificProductBrand = document.createElement("div");
        specificProductBrand.id = "brand";
        specificProductBrand.innerText ="Brand: "+ `${Gotdata.brand}`;
        specificProductBrand.style.paddingLeft="20%"
        let specificProductImg = document.createElement("IMG")
        specificProductImg.id = "img";
        specificProductImg.src = Gotdata.img;
        specificProductImg.style.width="50%"
        let divForInfor= document.createElement("div");
        

        // specificProductContainer.appendChild(specificProductImg);
        specificProductContainer.appendChild(specificProductBrand);

        specificProductContainer.appendChild(specificProductName);
        specificProductContainer.appendChild(specificProductType);
        specificProductContainer.appendChild(specificProductCubic);
        specificProductContainer.appendChild(specificProductDate);
        specificProductContainer.appendChild(specificProductPrice);

        container.appendChild(specificProductImg);

        container.appendChild(specificProductContainer);
        // container.appendChild





    }
    )


}
handleData();


// console.log("Test", getSpecificProductData());