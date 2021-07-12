// skenario checkout product
class Product {
    /** product entities */
}

class ShippingOrderService {
    checkout(product, type) {
        switch (type) {
            case ShippingType.JNE:
                /** do checkout product with shipping type */
                break;
            case ShippingType.TIKI:
                /** do checkout product with shipping type */
                break;
            default:
                throw new TypeError("Unsupported shipping type")
        }
    }
}