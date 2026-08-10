document.addEventListener("DOMContentLoaded", () => {

    /* recipe data */
    const RECIPES = {
        cookies: {
            title: "Chocolate Chip Cookies",
            image: "/Assets/images/bakingpics/cookies/cookies1.jpg",
            bakeInfo: {
                temp: "175°C / 350°F",
                time: "1 hour",
                cue: "Edges set, centre soft"
            },
            ingredients: [

                "100g Brown sugar, packed",
                "50g White sugar",
                "115g Unsalted butter, softened",
                "1 large Egg",
                "2 tsp Vanilla extract",
                "190g All-purpose flour",
                "3/4 tsp Baking soda",
                "1/2 tsp Salt",
                "160g Chocolate chips or less if you prefer"

            ],
            steps: [
                "In a large bowl, beat softened butter, brown sugar and white sugar. Beat until creamy, about 2 minutes.",
                "Add egg, vanilla extract and beat until combined, scrape the bottom and sides as needed.",
                "In a separate bowl mix flour, baking soda and salt.",
                "Add flour mixture into the butter mixture. 1/2 at the time, mix until combined.",
                "Stir in chocolate chips.",
                "At this stage if dough is too soft, cover and refrigerate for 20 minutes.",
                "Preheat oven to 350°F (175°C). line two baking trays with parchment paper.",
                "Scoop the dough onto a prepared baking sheet, leaving at least 3 inches (7.5 cm) of space between the cookies.",
                "Refrigerate for 30-40 minutes.",
                "Bake for 10-12 minutes, or until slightly golden around the edges.",
                "Allow to cool before serving."
            ],
            video: {
                embedId: "PFJAuAWxuvI",
                title: "Soft and Chewy Chocolate Chip Cookies Recipe",
                channel: "The Cooking Foodie",
                url: "https://www.youtube.com/watch?v=PFJAuAWxuvI"
            }
        },
        bakedRice: {
            title: "Baked Rice",
            image: "/Assets/images/bakingpics/bakedrice/bakedrice1.jpg",
            bakeInfo: {
                temp: "190°C / 375°F",
                time: "45 min",
                cue: "Cheese bubbling & golden"
            },
            ingredients: [
                "2 cups cooked rice",
                "1 cup shredded mozzarella",
                "1/2 cup cooked chicken or mushrooms",
                "1 cup tomato sauce",
                "1/2 onion, diced",
                "2 cloves garlic, minced",
                "Olive oil, salt, pepper, oregano"
            ],
            steps: [
                "Sauté the onion and garlic in olive oil until soft.",
                "Stir in the tomato sauce and simmer for 5 minutes.",
                "Mix in the cooked rice and your protein or veg of choice.",
                "Season with salt, pepper, and oregano.",
                "Transfer to a baking dish and top with mozzarella.",
                "Bake at 190°C for 20 minutes until the cheese is bubbling and golden."
            ],
            video: {
                embedId: "vvE6QmqdCCU",
                title: "Baked Chicken Rice | Cheesy Chicken Mushroom Baked Rice | Dinner Recipe",
                channel: "Cook' omania",
                url: "https://www.youtube.com/watch?v=vvE6QmqdCCU"
            }
        },
        macCheese: {
            title: "Mac and Cheese",
            image: "/Assets/images/bakingpics/maccheese/maccheese1.jpg",
            bakeInfo: {
                temp: "190°C / 375°F",
                time: "45 min",
                cue: "Top golden, sauce bubbling"
            },
            ingredients: [
                "400g macaroni",
                "115g Cheddar cheese",
                "85g Gruyere cheese",
                "5g Mozzarella cheese",
                "30g Flour",
                "60g Butter",
                "1L Milk ",
                "1 tsp Salt",
                "1/4 tsp Pepper",
                "1/4 tsp Nutmeg"
            ],
            steps: [
                " Preheat oven to 360F (180C).",
                " In a large bowl combine all the cheeses and set aside.",
                " Heat large pot of salted water, cook the macaroni to al dente (1-2 minutes less then package instructions). ",
                " While the pasta is cooking make the sauce: In a large pot, melt the butter, add flour and whisk over medium-low heat. Cook for a couple of minutes, whisking constantly. Gradually add the milk and whisk until smooth. Cook until slightly thickens, about 5-6 minutes.",
                " Gradually add 3/4 of the cheeses to the sauce and whisk until melted after each addition. Season with salt and pepper and mix. If you want to add more additions like bacon, herbs or spices, now it's the time.",
                " Drain the pasta and add to the sauce. ",
                " Transfer to a 12-inch (30cm) round baking dish, sprinkle the remaining 1/4 of the cheese and bake for 20-25 minutes or until golden and bubbly.",
            ],
            video: {
                embedId: "YxVZuuxxXxk",
                title: "Macaroni and Cheese Recipe | How to Make Mac and Cheese",
                channel: "The Cooking Foodie",
                url: "https://www.youtube.com/watch?v=YxVZuuxxXxk"
            }
        },
        pizza: {
            title: "Pizza",
            image: "/Assets/images/bakingpics/pizza/pizza1.jpg",
            bakeInfo: {
                temp: "250°C / 480°F",
                time: "24+hours",
                cue: "Crust charred, cheese melted"
            },
            ingredients: [
                "2 1/2 cups (600 milliliters) warm water",
                "1 teaspoon sugar",
                "2 teaspoons active dried yeast",
                "7 cups all-purpose flour, plus more for dusting",
                "6 tablespoons extra virgin olive oil, plus more for greasing",
                "1 1/2 tablespoons kosher salt",
                "1/4 cup semolina flour"
            ],
            steps: [
                " Sprinkle sugar and yeast into warm water and let sit for 10 minutes until bubbly to bloom the yeast.",
                " Make a well in the flour and salt mixture, add the oil and bloomed yeast, and mix into a shaggy dough.",
                " Turn the dough onto a work surface, knead for 10-15 minutes until soft and smooth, and shape into a taut round.",
                " Place the dough in a greased bowl, cover with plastic wrap, and let rise for 1 to 24 hours.",
                " Punch down the risen dough, knead briefly, divide into 4 equal portions, and shape them into balls.",
                " Cover the dough balls with a towel and let rest for 30-60 minutes while preparing toppings.",
                " Preheat the oven to 450-500°F (230-260°C) with a pizza stone or inverted baking sheet inside.",
                " Puree canned tomatoes with salt using a blender or immersion blender until smooth.",
                " Poke and stretch a dough portion thin using your fingertips to form your crust base.",
                " Transfer the stretched crust onto a semolina-dusted baking sheet and add sauce and preferred toppings.",
                " Bake for 15 minutes until the crust and cheese are golden brown.",
                " Top with your preferred garnish, slice, and enjoy!"
            ],
            video: {
                embedId: "sv3TXMSv6Lw",
                title: "The Best Homemade Pizza You'll Ever Eat",
                channel: "Tasty",
                url: "https://www.youtube.com/watch?v=sv3TXMSv6Lw"
            }
        },
        bread: {
            title: "Banana Bread",
            image: "/Assets/images/bakingpics/bread/bread1.jpg",
            bakeInfo: {
                temp: "220°C / 425°F",
                time: "1hour 30min",
                cue: "Hollow sound when tapped"
            },
            ingredients: [
                "3 ripe bananas (plus 1 sliced banana for topping)",
                "1/2 cup (100g) white sugar",
                "1/4 cup (50g) brown sugar",
                "2 eggs",
                "1 tsp vanilla extract",
                "1/2 cup (115g) melted butter",
                "2 cups (250g) flour",
                "1/2 tsp baking soda & 1/2 tsp baking powder",
                "1/4 tsp salt & 1 tsp cinnamon (optional)",
                "1/2 cup (80g) chocolate chips or nuts (optional)"
            ],
            steps: [
                "Preheat your oven to 175°C (350°F) and grease and line a 4x8-inch loaf pan with parchment paper.",
                "Mash the 3 bananas in a large bowl, then mix in the sugars, eggs, vanilla extract, and melted butter until combined.",
                "Sift in the flour, baking soda, baking powder, salt, and cinnamon, stirring just until incorporated without overmixing.",
                "Fold in the chocolate chips and optional chopped nuts until evenly distributed.",
                "Pour the batter into the prepared pan and place the halved banana cut-side-up on top.",
                "Bake for 50 to 60 minutes until a toothpick inserted into the center comes out clean.",
                "Cool in the pan for 5 to 10 minutes, then release the loaf to cool completely on a rack."
            ],
    video: {
        embedId: "h6JnvU9qAL8",
            title: "TheThe Best Banana Bread Recipe | Moist and Foolproof Recipe",
                channel: "The Cooking Foodie",
                    url: "https://www.youtube.com/watch?v=h6JnvU9qAL8"
    }
}
    };


/* recipe modal pop up*/
const recipeModal = document.getElementById("recipeModal");

if (recipeModal) {
    recipeModal.addEventListener("show.bs.modal", (event) => {
        const trigger = event.relatedTarget;
        const key = trigger.getAttribute("data-recipe");
        const recipe = RECIPES[key];
        if (!recipe) return;

        document.getElementById("recipeModalTitle").textContent = recipe.title;
        document.getElementById("recipeModalImage").src = recipe.image;
        document.getElementById("recipeModalImage").alt = recipe.title;

        // Populate Bake Info Banner
        document.getElementById("bakeInfoTemp").textContent = recipe.bakeInfo.temp;
        document.getElementById("bakeInfoTime").textContent = recipe.bakeInfo.time;
        document.getElementById("bakeInfoCue").textContent = recipe.bakeInfo.cue;

        const ingredientsList = document.getElementById("recipeModalIngredients");
        ingredientsList.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");

        const stepsList = document.getElementById("recipeModalSteps");
        stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");

        const videoWrap = document.getElementById("recipeModalVideoWrap");
        const videoFrame = document.getElementById("recipeModalVideo");
        const credit = document.getElementById("recipeModalCredit");

        if (recipe.video) {
            videoFrame.src = `https://www.youtube.com/embed/${recipe.video.embedId}`;
            videoWrap.classList.remove("d-none");
            credit.innerHTML =
                `Video: "${recipe.video.title}" by <a href="${recipe.video.url}" target="_blank" rel="noopener">${recipe.video.channel}</a>`;
        } else {
            videoFrame.src = "";
            videoWrap.classList.add("d-none");
            credit.textContent = "";
        }
    });

    // Stop the video when the modal closes
    recipeModal.addEventListener("hidden.bs.modal", () => {
        document.getElementById("recipeModalVideo").src = "";
    });

    // Keyboard accessibility for cards
    document.querySelectorAll(".showcase-card").forEach((card) => {
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                card.click();
            }
        });
    });
}



/* Back to top scroll button */
const topBtn = document.getElementById("backToTopBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

});

document.addEventListener("DOMContentLoaded", () => {
    // Grab the buttons and table elements
    const sweetBtn = document.getElementById("btnSweetTab");
    const savouryBtn = document.getElementById("btnSavouryTab");
    const sweetTable = document.getElementById("tableSweet");
    const savouryTable = document.getElementById("tableSavoury");

    // Make sure all elements exist before attaching click events
    if (sweetBtn && savouryBtn && sweetTable && savouryTable) {

        // Show Sweet Table
        sweetBtn.addEventListener("click", () => {
            sweetTable.classList.remove("d-none");
            savouryTable.classList.add("d-none");

            sweetBtn.classList.add("active");
            savouryBtn.classList.remove("active");
        });

        // Show Savoury Table
        savouryBtn.addEventListener("click", () => {
            savouryTable.classList.remove("d-none");
            sweetTable.classList.add("d-none");

            savouryBtn.classList.add("active");
            sweetBtn.classList.remove("active");
        });
    }
});