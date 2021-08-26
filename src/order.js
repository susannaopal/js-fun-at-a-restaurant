function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(orders)
  }
};

function refundOrder(num, deliveryOrders){
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (num === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i, 1)
    }
  }
};

function listItems(orders) {
  var deliveryOrders = [];
  for (var i = 0; i < orders.length; i++){
    deliveryOrders.push(orders[i].item);
  }
  return deliveryOrders.join(', ');
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
