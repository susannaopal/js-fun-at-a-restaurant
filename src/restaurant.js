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
return restaurantName.menus[menuItem.type].push(menuItem)}
// //if else instead?
// //for loop easier?
// function addMenuItem(restaurantName, menuItem) {
//   for (var i = 0; i < restaurantName.menus.length; i++) {
//     if (restaurantName[i] === menuItem.type) {
//       return restaurantName.menu[type].push(menuItem)
//   }
// }
// };

// ***
// function addMenuItem(restaurantName, menuItem) {
//     if (menuItem.type === "breakfast") {
//       for (var i = 0; i <= restaurantName.menus.breakfast.length; i++) {
//         if (restaurantName.menus.breakfast[i] !== menuItem) {
//           return restaurantName.menus.breakfast.push(menuItem);
//         }
//       }
//     } else if (menuItem.type === "lunch") {
//       for (var i = 0; i <= restaurantName.menus.lunch.length; i++) {
//         if (restaurantName.menus.lunch[i] !== menuItem) {
//           return restaurantName.menus.lunch.push(menuItem);
//         }
//       }
//     } else if (menuItem.type === "dinner") {
//       for (var i = 0; i <= restaurantName.menus.dinner.length; i++) {
//         if (restaurantName.menus.dinner[i] !== menuItem) {
//           return restaurantName.menus.dinner.push(menuItem);
//         }
//       }
//   }
// };

// function addMenuItem(restaurantName, menuItem) {
//     if (menuItem.type === "breakfast") {
//       return restaurantName.menus.breakfast.push(menuItem);
//     } else if (menuItem.type === "lunch") {
//       return restaurantName.menus.lunch.push(menuItem);
//     } else if (menuItem.type === "dinner") {
//       return restaurantName.menus.dinner.push(menuItem);
//     }
// };



//hint from katie for above:
//if (menu item type...) {
//     if (the meal doesn't already exist) {
//          // add it to the array and return
//     }
// }

// function removeMenuItem(restaurantName, menuItem) {
// need to rotate through the array to remove an item to update setInterval(function () {
//   the return though then updates the array to add something
//   accesses the menus / their arrays and the item from the type of menu
//





module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
