$(Document).ready(function () {
    function pizaa(crust, topping, size) {
        this.crust = crust;
        this.topping = topping;
        this.size = size;

        var newOder = []
        var total =[0]
    };
    pizaa.prototype.myToppingPrice = function () {
        if (this.crust === "crispy") {
            if (this.topping === "pepe") {
                return 150
            } else
            if (this.topping === "mash") {
                return 200
            } else {
                return 250
            }


        } else
        if (this.crust === "Stuffed") {
            if (this.topping === "pepe") {
                return 170
            } else
            if (this.topping === "mash") {
                return 220
            } else {
                return 270
            }
        } else {
            if (this.topping === "pepe") {
                return 170
            } else
            if (this.topping === "mash") {
                return 220
            } else {
                return 270
            }
        }
    }
    pizaa.prototype.mySizePrize = function () {
        if (this.crust === "crispy") {
            if (this.size === "small") {
                return 100
            } else
            if (this.topping === "medium") {
                return 200
            } else {
                return 300
            }


        } else if (this.crust === "Stuffed") {
            if (this.size === "small") {
                return 100
            } else
            if (this.topping === "medium") {
                return 200
            } else {
                return 300
            }


        } else {
            if (this.size === "small") {
                return 100
            } else
            if (this.topping === "medium") {
                return 200
            } else {
                return 200
            }
        }
    }
    pizaa.prototype.totalprice = function () {
        return this.myToppingPrice() + this.mySizePrize()
    }
    total = newOder.totalprice();



    $("form#type").submit(function (event) {
        event.preventDefualt();
        var crust2 = $("select#crust1").val();
        var topping2 = $("select#topping1").val();
        var size2 = $("select#size1").val();


        var newPizzaOder = new Pizaa(crust2, topping2, size2)
        newOder.push(newPizzaOder)
        $("select#crust1").val("");
        $("select#topping1").val("");
        $ ("select#size1").val("");
    });
    $(".carousel").carousel({
        interval: 2000
    })
})