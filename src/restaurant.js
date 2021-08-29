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
    if (menuItem === restaurantName.menus[menuItem.type][i]) {
      return;
    }
}
return restaurantName.menus[menuItem.type].push(menuItem);
};

function removeMenuItem(restaurantName, menuItem, type) {
  for (var i = 0; i < restaurantName.menus[type].length; i++) {
      if (menuItem === restaurantName.menus[type][i].name) { 
        restaurantName.menus[type].splice(i, 1);
          return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
