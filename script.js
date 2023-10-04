let recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const cardCatalog = document.getElementById("cardCatalog");
const searchBar = document.getElementById("searchBar");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const above4Radio = document.getElementById("above4");
const below4Radio = document.getElementById("below4");

// fetch the data and dynamically generate the recipe cards.
function generateRecipeCard(recipe) {
  const card = document.createElement("div");
  card.className = "card";

  const imageContainer = document.createElement("div");
  imageContainer.className = "imageContainer";
  const image = document.createElement("img");
  image.src = recipe.imageSrc;
  image.className = "card-img"
  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

  const type = document.createElement("p");
  type.className = "para1";
  type.textContent = `${recipe.type}`;
  card.appendChild(type);

  const container1 = document.createElement("div");
  container1.className = "container1";
  const name = document.createElement("h3");
  name.textContent = recipe.name;
  container1.appendChild(name);


  const rating = document.createElement("p");
  rating.textContent = `⭐ ${recipe.rating}`;
  rating.className = "para2";
  container1.appendChild(rating);
  card.appendChild(container1);

  const container2 = document.createElement("div");
  container2.className = "container2";
  const time = document.createElement("p");
  time.textContent = `${recipe.time}`;
  time.className = "para3";
  container2.appendChild(time);

  
  const likeButton = document.createElement("span");
  likeButton.className = "last"
  likeButton.innerHTML =`<img src="./Assets/comments.png" alt="icon"`;
  likeButton.addEventListener("click", () => {
      recipe.isLiked = !recipe.isLiked;
      likeButton.textContent = recipe.isLiked ? "❤️" : "🖤"; // Adjusted content
      
    });
    
    // Initial content based on whether the recipe is liked or not
    likeButton.textContent = recipe.isLiked ? "❤️" : "🖤";
    
    container2.appendChild(likeButton);
    card.appendChild(container2);
    
    const comment = document.createElement("img");
    comment.src='./Assets/comments.png';
    comment.alt= 'icon';
    comment.className = "comment";
    container2.appendChild(comment);
  cardCatalog.appendChild(card);
}

function filterRecipes(searchQuery) {
  // Clear existing recipes
  cardCatalog.innerHTML = "";

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

// Listen for input in the search bar
searchBar.addEventListener("input", (event) => {
  const searchQuery = event.target.value.trim();
  filterRecipes(searchQuery);
});

// functionality to toggle recipe types (veg, non-veg, all).
function toggleRecipeDisplay(type) {
  // Clear existing recipes
  cardCatalog.innerHTML = "";

  // Filter recipes based on the selected type
  let filteredRecipes;
  if (type === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => recipe.type === type);
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}
// Event listeners for toggle buttons
btn1.addEventListener("click", () => toggleRecipeDisplay("all"));
btn2.addEventListener("click", () => toggleRecipeDisplay("veg"));
btn3.addEventListener("click", () => toggleRecipeDisplay("non-veg"));

function filterRecipesByRating() {
  // Clear existing recipes
  cardCatalog.innerHTML = "";

  let filteredRecipes;
  if (above4Radio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
  } else if (below4Radio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  } else {
    filteredRecipes = recipes;
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

// Event listeners for radio buttons
above4Radio.addEventListener("change", filterRecipesByRating);
below4Radio.addEventListener("change", filterRecipesByRating);

// Map over the recipes and generate cards for each recipe
recipes.forEach((recipe) => {
  generateRecipeCard(recipe);
});



  

