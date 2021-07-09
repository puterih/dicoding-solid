// bentuk hubungan agregasi
class Shop {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    set seller(value) {
        this._seller = value;
    }
    
    get seller() {
        return this._seller;
    }
}

class Seller {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
}