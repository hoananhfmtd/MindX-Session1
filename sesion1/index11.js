async function getAPI() {
        let response = await fetch( "https://www.themealdb.com/api/json/v1/1/random.php?fbclid=IwAR1HBnhzpdZb437D-k3VWhtMdGNju_8At5ebWbGubQ2soQV-10D_5PPoulc" );
        let data = await response.json();
        let datafood = data.meals[0];
        let food = document.getElementById("food")
        
        const newInnerHTML = `
        <h4>${datafood.strMeal}</h4>
        <img src="${datafood.strMealThumb}" alt="Meal Image">

        `
        food.innerHTML = newInnerHTML;

    
    


    }
    getAPI();