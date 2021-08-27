function createRestaurant(name) {
return {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: [],

  }
}
};

function addMenuItem(restaurantName, menuItem) {
  restaurantName.menus[menuItem.type].push(menuItem)
};


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}