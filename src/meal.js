function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
};

function createMenuItem(name, price, type) {
  var menuItem = {name: name, price: price, type: type}
  return menuItem
}

function addIngredients(items, ingredients) {
    for (var i = 0; i < ingredients.length; i++) {
      if (items === ingredients[i]) {
        return;
      }
    }
    ingredients.push(items);
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
