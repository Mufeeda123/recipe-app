const recipes = [
  {
    name: "Pasta",
    category: "lunch",
    image: "images/pasta.webp",
    ingredients: [
      "200g Pasta",
      "2 Tomatoes",
      "100g Cheese",
      "2 tbsp Olive Oil",
      "Garlic, Salt, Pepper",
    ],
    steps: `
      <p><strong>Step 1:</strong> Boil pasta in salted water until al dente. Drain and keep aside.</p>
      <p><strong>Step 2:</strong> Heat olive oil in a pan and sauté garlic until fragrant.</p>
      <p><strong>Step 3:</strong> Add chopped tomatoes, salt, and pepper. Cook until sauce thickens.</p>
      <p><strong>Step 4:</strong> Mix in boiled pasta and toss well.</p>
      <p><strong>Step 5:</strong> Sprinkle cheese, let it melt, and serve hot.</p>
    `,
  },
  {
    name: "Chicken Biryani",
    category: "lunch",
    image: "images/biriyani.webp",
    ingredients: [
      "500g Basmati Rice",
      "500g Chicken",
      "Yogurt",
      "Onions",
      "Spices",
      "Saffron milk",
    ],
    steps: `
      <p><strong>Step 1:</strong> Wash and soak rice for 30 mins. Marinate chicken with yogurt and spices.</p>
      <p><strong>Step 2:</strong> Fry onions until golden and set aside.</p>
      <p><strong>Step 3:</strong> Cook chicken until half done.</p>
      <p><strong>Step 4:</strong> Half-cook rice with whole spices.</p>
      <p><strong>Step 5:</strong> Layer rice, chicken, and fried onions in a pot.</p>
      <p><strong>Step 6:</strong> Add saffron milk and seal the pot. Cook on low flame for 20 minutes.</p>
      <p><strong>Step 7:</strong> Rest for 10 mins before serving hot.</p>
    `,
  },
  {
    name: "Veg Fried Rice",
    category: "lunch",
    image: "images/friedrice.webp",
    ingredients: [
      "Rice",
      "Mixed Vegetables",
      "Soy Sauce",
      "Oil",
      "Salt",
      "Pepper",
    ],
    steps: `
      <p><strong>Step 1:</strong> Cook rice and let it cool.</p>
      <p><strong>Step 2:</strong> Heat oil in a pan, stir-fry vegetables until soft.</p>
      <p><strong>Step 3:</strong> Add cooked rice to the pan and mix well.</p>
      <p><strong>Step 4:</strong> Add soy sauce, salt, and pepper, stir-fry for 2-3 minutes.</p>
      <p><strong>Step 5:</strong> Serve hot with spring onions on top.</p>
    `,
  },
  {
    name: "Paneer Butter Masala",
    category: "lunch",
    image: "images/paneer.webp",
    ingredients: [
      "Paneer",
      "Tomato",
      "Butter",
      "Cream",
      "Spices",
      "Onion",
      "Garlic",
    ],
    steps: `
      <p><strong>Step 1:</strong> Chop tomatoes and blend into a smooth puree.</p>
      <p><strong>Step 2:</strong> Heat butter in a pan, sauté onions and garlic until golden.</p>
      <p><strong>Step 3:</strong> Add tomato puree and spices, cook for 10 mins.</p>
      <p><strong>Step 4:</strong> Add paneer cubes and cream, simmer for 5 mins.</p>
      <p><strong>Step 5:</strong> Garnish with coriander and serve with naan or rice.</p>
    `,
  },
  {
    name: "Fish Curry",
    category: "lunch",
    image: "images/fishcurry.webp",
    ingredients: [
      "Fish",
      "Coconut Milk",
      "Tamarind",
      "Spices",
      "Onion",
      "Tomato",
    ],
    steps: `
      <p><strong>Step 1:</strong> Marinate fish with salt, turmeric, and spices.</p>
      <p><strong>Step 2:</strong> Heat oil in a pan, sauté onions and tomatoes.</p>
      <p><strong>Step 3:</strong> Add coconut milk and tamarind extract, simmer.</p>
      <p><strong>Step 4:</strong> Add fish pieces, cook until done (8-10 mins).</p>
      <p><strong>Step 5:</strong> Serve hot with steamed rice.</p>
    `,
  },
  {
    name: "Masala Dosa",
    category: "breakfast",
    image: "images/masaladosa.webp",
    ingredients: [
      "Rice Batter",
      "Potatoes",
      "Onion",
      "Spices",
      "Oil",
      "Curry Leaves",
    ],
    steps: `
      <p><strong>Step 1:</strong> Prepare potato masala by boiling, mashing, and seasoning potatoes with spices and onions.</p>
      <p><strong>Step 2:</strong> Heat a non-stick pan, pour dosa batter, spread thin.</p>
      <p><strong>Step 3:</strong> Drizzle oil around edges, cook until crisp.</p>
      <p><strong>Step 4:</strong> Place potato masala in the center, fold dosa.</p>
      <p><strong>Step 5:</strong> Serve with coconut chutney and sambar.</p>
    `,
  },
  {
    name: "Chocolate Cake",
    category: "dessert",
    image: "images/chocolate cake.webp",
    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk",
      "Baking Powder",
    ],
    steps: `
      <p><strong>Step 1:</strong> Preheat oven to 180°C. Grease the cake tin.</p>
      <p><strong>Step 2:</strong> Mix flour, cocoa powder, sugar, and baking powder.</p>
      <p><strong>Step 3:</strong> Beat eggs and butter, combine with dry ingredients, add milk.</p>
      <p><strong>Step 4:</strong> Pour batter into the tin, bake for 30-35 mins.</p>
      <p><strong>Step 5:</strong> Cool the cake, frost with chocolate cream, and serve.</p>
    `,
  },
  {
    name: "Mango Smoothie",
    category: "breakfast",
    image: "images/mango smoothie.webp",
    ingredients: ["Mango", "Milk", "Honey", "Ice Cubes", "Yogurt (optional)"],
    steps: `
      <p><strong>Step 1:</strong> Peel and chop mangoes.</p>
      <p><strong>Step 2:</strong> Add mango pieces, milk, honey, and ice cubes to a blender.</p>
      <p><strong>Step 3:</strong> Blend until smooth.</p>
      <p><strong>Step 4:</strong> Pour into glasses and serve chilled.</p>
    `,
  },
  {
    name: "Grilled Sandwich",
    category: "dinner",
    image: "images/sandwich.webp",
    ingredients: ["Bread", "Cheese", "Tomato", "Butter", "Lettuce"],
    steps: `
      <p><strong>Step 1:</strong> Butter slices of bread.</p>
      <p><strong>Step 2:</strong> Layer cheese, tomato, and lettuce between bread slices.</p>
      <p><strong>Step 3:</strong> Grill the sandwich until golden brown on both sides.</p>
      <p><strong>Step 4:</strong> Cut diagonally and serve hot.</p>
    `,
  },
  {
    name: "Idli Sambar",
    category: "breakfast",
    image: "images/idli.webp",
    ingredients: [
      "Idli Batter",
      "Lentils",
      "Tamarind",
      "Spices",
      "Curry Leaves",
    ],
    steps: `
      <p><strong>Step 1:</strong> Steam idlis in a steamer for 10-12 minutes.</p>
      <p><strong>Step 2:</strong> Cook lentils, grind tamarind, and make sambar with spices.</p>
      <p><strong>Step 3:</strong> Serve hot idlis with sambar and coconut chutney.</p>
    `,
  },
  {
    name: "Veg Pizza",
    category: "dinner",
    image: "images/pizza.webp",
    ingredients: [
      "Pizza Base",
      "Tomato Sauce",
      "Cheese",
      "Vegetables",
      "Oregano",
    ],
    steps: `
      <p><strong>Step 1:</strong> Preheat oven to 200°C.</p>
      <p><strong>Step 2:</strong> Spread tomato sauce over pizza base.</p>
      <p><strong>Step 3:</strong> Add cheese and assorted vegetables on top.</p>
      <p><strong>Step 4:</strong> Sprinkle oregano and bake for 12-15 minutes.</p>
      <p><strong>Step 5:</strong> Serve hot.</p>
    `,
  },
  {
    name: "Fruit Salad",
    category: "dinner",
    image: "images/salad.webp",
    ingredients: ["Apple", "Banana", "Grapes", "Mango", "Honey", "Lemon Juice"],
    steps: `
      <p><strong>Step 1:</strong> Wash and chop all fruits into bite-sized pieces.</p>
      <p><strong>Step 2:</strong> Mix fruits in a large bowl.</p>
      <p><strong>Step 3:</strong> Drizzle honey and lemon juice, toss gently.</p>
      <p><strong>Step 4:</strong> Serve fresh chilled.</p>
    `,
  },
  {
    name: "Pasta",
    category: "lunch",
    image: "images/pasta.webp",
    ingredients: [
      "200g Pasta",
      "2 Tomatoes",
      "100g Cheese",
      "2 tbsp Olive Oil",
      "Garlic, Salt, Pepper",
    ],
    steps: `
      <p><strong>Step 1:</strong> Boil pasta in salted water until al dente. Drain and keep aside.</p>
      <p><strong>Step 2:</strong> Heat olive oil in a pan and sauté garlic until fragrant.</p>
      <p><strong>Step 3:</strong> Add chopped tomatoes, salt, and pepper. Cook until sauce thickens.</p>
      <p><strong>Step 4:</strong> Mix in boiled pasta and toss well.</p>
      <p><strong>Step 5:</strong> Sprinkle cheese, let it melt, and serve hot.</p>
    `,
  },
  {
    name: "Chicken Biryani",
    category: "lunch",
    image: "images/biriyani.webp",
    ingredients: [
      "500g Basmati Rice",
      "500g Chicken",
      "Yogurt",
      "Onions",
      "Spices",
      "Saffron milk",
    ],
    steps: `
      <p><strong>Step 1:</strong> Wash and soak rice for 30 mins. Marinate chicken with yogurt and spices.</p>
      <p><strong>Step 2:</strong> Fry onions until golden and set aside.</p>
      <p><strong>Step 3:</strong> Cook chicken until half done.</p>
      <p><strong>Step 4:</strong> Half-cook rice with whole spices.</p>
      <p><strong>Step 5:</strong> Layer rice, chicken, and fried onions in a pot.</p>
      <p><strong>Step 6:</strong> Add saffron milk and seal the pot. Cook on low flame for 20 minutes.</p>
      <p><strong>Step 7:</strong> Rest for 10 mins before serving hot.</p>
    `,
  },
  {
    name: "Veg Fried Rice",
    category: "lunch",
    image: "images/friedrice.webp",
    ingredients: [
      "Rice",
      "Mixed Vegetables",
      "Soy Sauce",
      "Oil",
      "Salt",
      "Pepper",
    ],
    steps: `
      <p><strong>Step 1:</strong> Cook rice and let it cool.</p>
      <p><strong>Step 2:</strong> Heat oil in a pan, stir-fry vegetables until soft.</p>
      <p><strong>Step 3:</strong> Add cooked rice to the pan and mix well.</p>
      <p><strong>Step 4:</strong> Add soy sauce, salt, and pepper, stir-fry for 2-3 minutes.</p>
      <p><strong>Step 5:</strong> Serve hot with spring onions on top.</p>
    `,
  },
  {
    name: "Paneer Butter Masala",
    category: "lunch",
    image: "images/paneer.webp",
    ingredients: [
      "Paneer",
      "Tomato",
      "Butter",
      "Cream",
      "Spices",
      "Onion",
      "Garlic",
    ],
    steps: `
      <p><strong>Step 1:</strong> Chop tomatoes and blend into a smooth puree.</p>
      <p><strong>Step 2:</strong> Heat butter in a pan, sauté onions and garlic until golden.</p>
      <p><strong>Step 3:</strong> Add tomato puree and spices, cook for 10 mins.</p>
      <p><strong>Step 4:</strong> Add paneer cubes and cream, simmer for 5 mins.</p>
      <p><strong>Step 5:</strong> Garnish with coriander and serve with naan or rice.</p>
    `,
  },
  {
    name: "Fish Curry",
    category: "lunch",
    image: "images/fishcurry.webp",
    ingredients: [
      "Fish",
      "Coconut Milk",
      "Tamarind",
      "Spices",
      "Onion",
      "Tomato",
    ],
    steps: `
      <p><strong>Step 1:</strong> Marinate fish with salt, turmeric, and spices.</p>
      <p><strong>Step 2:</strong> Heat oil in a pan, sauté onions and tomatoes.</p>
      <p><strong>Step 3:</strong> Add coconut milk and tamarind extract, simmer.</p>
      <p><strong>Step 4:</strong> Add fish pieces, cook until done (8-10 mins).</p>
      <p><strong>Step 5:</strong> Serve hot with steamed rice.</p>
    `,
  },
  {
    name: "Masala Dosa",
    category: "breakfast",
    image: "images/masaladosa.webp",
    ingredients: [
      "Rice Batter",
      "Potatoes",
      "Onion",
      "Spices",
      "Oil",
      "Curry Leaves",
    ],
    steps: `
      <p><strong>Step 1:</strong> Prepare potato masala by boiling, mashing, and seasoning potatoes with spices and onions.</p>
      <p><strong>Step 2:</strong> Heat a non-stick pan, pour dosa batter, spread thin.</p>
      <p><strong>Step 3:</strong> Drizzle oil around edges, cook until crisp.</p>
      <p><strong>Step 4:</strong> Place potato masala in the center, fold dosa.</p>
      <p><strong>Step 5:</strong> Serve with coconut chutney and sambar.</p>
    `,
  },
  {
    name: "Chocolate Cake",
    category: "dessert",
    image: "images/chocolate cake.webp",
    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk",
      "Baking Powder",
    ],
    steps: `
      <p><strong>Step 1:</strong> Preheat oven to 180°C. Grease the cake tin.</p>
      <p><strong>Step 2:</strong> Mix flour, cocoa powder, sugar, and baking powder.</p>
      <p><strong>Step 3:</strong> Beat eggs and butter, combine with dry ingredients, add milk.</p>
      <p><strong>Step 4:</strong> Pour batter into the tin, bake for 30-35 mins.</p>
      <p><strong>Step 5:</strong> Cool the cake, frost with chocolate cream, and serve.</p>
    `,
  },
  {
    name: "Mango Smoothie",
    category: "breakfast",
    image: "images/mango smoothie.webp",
    ingredients: ["Mango", "Milk", "Honey", "Ice Cubes", "Yogurt (optional)"],
    steps: `
      <p><strong>Step 1:</strong> Peel and chop mangoes.</p>
      <p><strong>Step 2:</strong> Add mango pieces, milk, honey, and ice cubes to a blender.</p>
      <p><strong>Step 3:</strong> Blend until smooth.</p>
      <p><strong>Step 4:</strong> Pour into glasses and serve chilled.</p>
    `,
  },
  {
    name: "Grilled Sandwich",
    category: "dinner",
    image: "images/sandwich.webp",
    ingredients: ["Bread", "Cheese", "Tomato", "Butter", "Lettuce"],
    steps: `
      <p><strong>Step 1:</strong> Butter slices of bread.</p>
      <p><strong>Step 2:</strong> Layer cheese, tomato, and lettuce between bread slices.</p>
      <p><strong>Step 3:</strong> Grill the sandwich until golden brown on both sides.</p>
      <p><strong>Step 4:</strong> Cut diagonally and serve hot.</p>
    `,
  },
  {
    name: "Idli Sambar",
    category: "breakfast",
    image: "images/idli.webp",
    ingredients: [
      "Idli Batter",
      "Lentils",
      "Tamarind",
      "Spices",
      "Curry Leaves",
    ],
    steps: `
      <p><strong>Step 1:</strong> Steam idlis in a steamer for 10-12 minutes.</p>
      <p><strong>Step 2:</strong> Cook lentils, grind tamarind, and make sambar with spices.</p>
      <p><strong>Step 3:</strong> Serve hot idlis with sambar and coconut chutney.</p>
    `,
  },
  {
    name: "Veg Pizza",
    category: "dinner",
    image: "images/pizza.webp",
    ingredients: [
      "Pizza Base",
      "Tomato Sauce",
      "Cheese",
      "Vegetables",
      "Oregano",
    ],
    steps: `
      <p><strong>Step 1:</strong> Preheat oven to 200°C.</p>
      <p><strong>Step 2:</strong> Spread tomato sauce over pizza base.</p>
      <p><strong>Step 3:</strong> Add cheese and assorted vegetables on top.</p>
      <p><strong>Step 4:</strong> Sprinkle oregano and bake for 12-15 minutes.</p>
      <p><strong>Step 5:</strong> Serve hot.</p>
    `,
  },
  {
    name: "Fruit Salad",
    category: "dinner",
    image: "images/salad.webp",
    ingredients: ["Apple", "Banana", "Grapes", "Mango", "Honey", "Lemon Juice"],
    steps: `
      <p><strong>Step 1:</strong> Wash and chop all fruits into bite-sized pieces.</p>
      <p><strong>Step 2:</strong> Mix fruits in a large bowl.</p>
      <p><strong>Step 3:</strong> Drizzle honey and lemon juice, toss gently.</p>
      <p><strong>Step 4:</strong> Serve fresh chilled.</p>
    `,
  },
];

const container = document.getElementById("recipe-container");
const searchBox = document.getElementById("search-box");
const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "all"; 

let titles = ["🍲 Recipe App", "🥗 Cook & Enjoy!", "🍰 Sweet Treats!"];
let index = 0;

setInterval(() => {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}, 2000);


// 2. RENDER CARDS
function renderCards(list) {
  container.innerHTML = "";
  list.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.category = recipe.category; // ✅ important
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
      <h3>${recipe.name}</h3>
      <button onclick="showRecipe('${recipe.name}')">View Recipe</button>
    `;
    container.appendChild(card);
  });
}
renderCards(recipes);

// 3. SEARCH
searchBox.addEventListener("input", () => {
  const q = searchBox.value.toLowerCase();
  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.ingredients.some((ing) => ing.toLowerCase().includes(q))
  );
  renderCards(filtered);
});

// 4. CATEGORY FILTER
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category.toLowerCase();
    const filtered =
      currentCategory === "all"
        ? recipes
        : recipes.filter((r) => r.category.toLowerCase() === currentCategory);
    renderCards(filtered);

    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    searchBox.value = "";
  });
});

// 5. SEARCH FUNCTION
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim();

  const filtered = recipes.filter((r) => {
    const matchCategory =
      currentCategory === "all" || r.category.toLowerCase() === currentCategory;
    const matchSearch = r.name.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    document.getElementById(
      "recipe-container"
    ).innerHTML = `<p style="font-size:1.2rem; text-align:center; margin-top:20px;">
      Oops! No recipes found in "${currentCategory}" for "${searchBox.value}".
    </p>`;
  } else {
    renderCards(filtered);
  }
});

// 6. SHOW RECIPE MODAL
window.showRecipe = function (name) {
  const recipe = recipes.find((r) => r.name === name);
  document.getElementById("modal-title").textContent = recipe.name;
  document.getElementById("modal-image").src = recipe.image;

  const ingList = document.getElementById("modal-ingredients");
  ingList.innerHTML = "<h4 class='section-heading'>Ingredients</h4>";
  recipe.ingredients.forEach((ing) => {
    const li = document.createElement("li");
    li.innerHTML = `
  <label>
    <input type="checkbox" class="ingredient-check"> 
    <span>${ing}</span>
  </label>
`;
    ingList.appendChild(li);
  });

  document.getElementById("modal-steps").innerHTML =
    "<h4 class='section-heading'>Cooking Instructions</h4>" + recipe.steps;

  document.getElementById("recipe-modal").style.display = "flex";
};

// 7. CLOSE MODAL
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("recipe-modal").style.display = "none";
});
window.addEventListener("click", (e) => {
  const modal = document.getElementById("recipe-modal");
  if (e.target === modal) modal.style.display = "none";
});

// 8. HEADER PADDING
function adjustRecipeContainer() {
  const headerHeight = document.querySelector("header").offsetHeight;
  container.style.paddingTop = `${headerHeight + 30}px`;
}
adjustRecipeContainer();
window.addEventListener("resize", adjustRecipeContainer);
