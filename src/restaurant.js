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

function addMenuItem(restaurantName, menuItem){
  for (var i = 0; i < restaurantName.menus[menuItem.type].length; i++) {
    if (restaurantName.menus[menuItem.type][i] === menuItem) {
      return;
    }
  }
return restaurantName.menus[menuItem.type].push(menuItem);
};


module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
