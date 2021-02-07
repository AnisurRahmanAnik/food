const input = document.getElementById('inputValue'),
form = document.getElementById('form'),
random = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
result = document.getElementById('result'),
mealItem = document.getElementById('mealItem');

function searchMeal(e) {
    e.preventDefault();
    result.innerHTML = ""
    const term = input.value;
    console.log(term);
    if (term){


        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            
            result.innerHTML = `<h2> Result for searching '${term}': </h2>`;
            if(data.meals === null){
                result.innerHTML = `<p> Please enter a valid Keyword . Try again ! </p>`
            }else{
                mealsEl.innerHTML = data.meals
                .map(meal =>`<div class="meal">
                <img id="imgaes" src ="${meal.strMealThumb}" alt="${meal.strMeal}"/>

                <div class="meal-info" data-mealID= "${meal.idMea}"> 
                
                 <h3> ${meal.strMeal} </h3> 

                  </div>
                </div>` ) 

                .join("");
            }
        });
        input.value="";

    }else{
        alert("please enter a valid item")
    }
}


form.addEventListener("submit", searchMeal);