class ProductService {
    constructor() {
        throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly`);
    }

    getProduct(id) {
        throw new Error('You have toimplement the method getProduct!');
    }
    calcu;ateProductPrice() {
        throw new Error('You have to implement the method calculatedProductPrice!');
    }
}

class ProductServiceImpl extends ProductService {
    getProduct(id) {
        // implementation code
    }

    calculateProductPrice() {
        // implementation code
    }
}