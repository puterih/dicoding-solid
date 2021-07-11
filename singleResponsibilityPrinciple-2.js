class Item {}

class Order {
    calculateTotalSum() {}

    getItems() {}

    getItemCount() {}

    addItem(item) {}

    deleteItem() {}
}

class OrderHistory {
    getDailyHistory() {}

    getMonthlyHistory() {}
}

classlass OrderPreview {
    printOrder(order) {}

    showOrder(order) {}
}

const main = () => {
    const item = new Item();
    const Order = new Order();
    order.addItem(item);
    const history = new OrderHistory();
    history.getDailyHistory();
    const viewer = new OrderPrebiew();
    viewer.printOrder(order);
};