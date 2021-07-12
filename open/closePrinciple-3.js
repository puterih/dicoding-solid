class Shipping {
    constructor() {
        if(this.constructor === Shipping) {
            throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantated directly`);
        }
    }

    class JNEShipping extend Shipping {
        calculated(product) {
            return /** calculated amount of this type with product */
        }
    }

    class TIKIShipping extends Shipping {
        calculate(product) {
            return /** calculate amount of thistype with product */
        }
    }
}