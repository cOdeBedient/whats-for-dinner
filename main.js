var sideBubble = document.querySelector('#side');
var mainBubble = document.querySelector('#main');
var dessertBubble = document.querySelector('#dessert');
var mealBubble = document.querySelector('#meal');
var cookButton = document.querySelector('#lets-cook');
var mealField = document.querySelector('#meal-suggestion');

var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Baked Beans',
    'Roasted Balsamic Brussels Sprouts',
    'Apple Sauce',
    'Garlic Mashed Potatoes',
    'Truffle Fries',
    'Caeser Salad'
];

var mains = [
    'Chicken Riggies',
    'Ground Nut Stew',
    'Spinach Tofu Scramble',
    'Borscht',
    'Kung Pow Chicken',
    'Spaghetti Bolognese',
    'Liver and Onions',
    'Pot Roast',
    'Stuffed Shells',
    'Sausage Pepper and Onion Sub'
];

var desserts = [
    'Cheesecake',
    'Brown Butter Cookies',
    'Flan',
    'Huckleberry Sorbet',
    'Fresh Fruit',
    'Tapioca Pudding',
    'Ginger Snaps',
    'Apple Pie',
    'Cherry Pie'
];

cookButton.addEventListener('click', displayFood);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayFood() {
    if (sideBubble.checked) {
        mealField.innerHTML =
            `<h3><em>You Should Make:</em></h3>
            <p>${sides[getRandomIndex(sides)]}!</p>`;
    } else if (mainBubble.checked) {
        mealField.innerHTML =
            `<h3><em>You Should Make:</em></h3>
            <p>${mains[getRandomIndex(mains)]}!</p>`;
    } else if (dessertBubble.checked) {
        mealField.innerHTML =
            `<h3><em>You Should Make:</em></h3>
            <p>${desserts[getRandomIndex(desserts)]}!</p>`;
    } else if (mealBubble.checked) {
        var fullMeal = createRandomMeal();
        mealField.innerHTML =
            `<h3><em>You Should Make:</em></h3>
            <p id="full-meal">${fullMeal.main} with a side of ${fullMeal.side} and ${fullMeal.dessert} for dessert!</p>`;
    } else {
        mealField.innerHTML =
            `<h3>Please select a dish category!</h3>`;
    }
}

function createMeal(side, main, dessert) {
    return {
        side: side,
        main: main,
        dessert: dessert
    }
}

function createRandomMeal() {
    var randomMeal =
        createMeal(sides[getRandomIndex(sides)], mains[getRandomIndex(mains)], desserts[getRandomIndex(desserts)]);
    return randomMeal;
}