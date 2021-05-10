class Mkulima {
    constructor() {
        this.farms = []; //will take in the items I pass into the list[]
        this.vendors = [];
        this.products = [];
        this.orders = [];
    }
    addFarm(farmId, farmName, farmer, phone, address) {
        var shamba = {
            farmId: farmId,
            farmName: farmName,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        this.farms.push(shamba); //this command will push all my shamba objects{} into the farms list.
        return this.farms;

    }
    removeFarm(farmId) {
        var shambaRemove = this.farms.find(shambaRemove => farmId == farmId)
        delete this.farms[shambaRemove] //will remove the farm carrying the specific Id.
        return this.farms
    }
    updateFarm(farmId, farmName, farmer, phone, address) {
        let newFarm = this.farms.find(newFarm => farmName == "Pema farm") //find will fetch the specific farmName wanted.
        newFarm = {
            farmId: farmId,
            farmName: farmName,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        return newFarm
    }
    getFarm(farmId) {
        let pataShamba = this.farms.find(pataShamba => pataShamba.farmId == farmId)
        return pataShamba
    }
    addProduct(productId, name, price) {
        let product = {
            productId: productId,
            name: name,
            price: price,
        }
        this.products.push(product)
        return this.products
    }
    removeProduct(productId) {
        var products1 = this.products.find(products1 => productId == productId)
        delete this.products[products1]
        return this.products;
    }
    updateProduct(productId, name, price) {
        let newProduct = this.products.find(newProduct => name == "Zucchini")
        newProduct = {
            productId: productId,
            name: name,
            price: price,
        }
        return newProduct
    }
    getProduct(productId) {
        let products2 = this.products.find(products2 => products2.productId == productId)
        return this.products;
    }
    printProduct() {
        for (let product of this.products) {
            console.log(`${product.name},${product.price}`)
        }
    }
    calculateOrderCost(productId, quantity) {
        let orderCost = this.products.find(orderCost => orderCost.productId === productId)
        return orderCost.price * quantity;
    }
}
var mkulima = new Mkulima()
console.log(mkulima.addFarm(1023, "Pazuri farm", "Johnson Maingi", "0733456789", "Kitui"))
console.log(mkulima.addFarm(1305, "Jua farm", "Phyllis Njenga", "078024367", "Kiambu"))
console.log(mkulima.addFarm(1698, "Solio farm", "Alfayo Mwema", "0718564738", "Kakamega"))
console.log(mkulima.addFarm(3370, "Vegan farm", "Abel Nyambane", "0736451234", "Kisii"))
console.log(mkulima.removeFarm(1023))
console.log(mkulima.updateFarm(1305, "Pema farm", "Phyllis Njenga", "078024367", "Kiambu"))
console.log(mkulima.getFarm(1698))
console.log(mkulima.addProduct("c63", "Watermelon ", 200))
console.log(mkulima.addProduct("c64", "Kales ", 5000))
console.log(mkulima.addProduct("c65", "Zucchini ", 4000))
console.log(mkulima.updateProduct("c66 ", "Peppers ", 2500))
console.log(mkulima.removeProduct("c64"))
console.log(mkulima.getProduct("c65 "))
mkulima.printProduct()
console.log(mkulima.calculateOrderCost("c63", 12))