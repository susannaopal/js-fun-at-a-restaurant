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

//if else instead?
//for loop easier?
function addMenuItem(restaurantName, menuItem) {
  for (var i = 0; i < restaurantName.length; i++) {
    if (restaurantName[i] === menuItem) {
      return restaurantName.menus[menuItem.type].push(menuItem)
  }
}
};


module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
