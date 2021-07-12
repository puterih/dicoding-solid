class Product {
    /** product entitas */
}

class ShippingOrderService {
    checkout(product, type) {
        switch (type) {
            case ShippingType.JNE:
                /** do checkout product with shipping type */
                break;
            case ShippingType.TIKI:
                /** do checkout with shipping type */
                break;
            case ShippingType.POSINDO:
                /** do checkout with shipping type */
                break;
            default:
                throw new TypeError("Unsupported shipping type")
        }
}

const ShippingType = {
    JNE: "jne",
    TIKI: "tiki",
    POSINDO: "posindo"
};