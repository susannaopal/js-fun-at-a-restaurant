class Chef {
  constructor(name, restaurant) {
    this.name = name || 'Hannah';
    this.restaurant = restaurant;
  }

  greetCustomer(customer, morning) {
    if (morning === false || morning === undefined) {
      return `Hello, ${customer}!`
    } else if (morning === true) {
      return `Good morning, ${customer}!`
    }
  }
  checkForFood(foodItem) {
    return `Yes, we're serving ${foodItem} today!`;

  }


}

module.exports = Chef;
