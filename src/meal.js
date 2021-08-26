function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
};

function createMenuItem(name, price, type) {
  var menuItem = {name: name, price: price, type: type}
  return menuItem
}

function addIngredients(foodItem, items) {

  // var ingredients = ingredients.push(foodItem);
  // // var ingredients = [];
  // for (var i = 0; i < ingredients.length; i++) {
  //   ingredients.push(cheese)
  // }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


