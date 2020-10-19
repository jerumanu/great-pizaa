$(document).ready(function () {
    function pizaa(crust, topping, size) {
        this.crust = crust;
        this.topping = topping;
        this.size = size;


    };
    var newOder = []
    var total = 0
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
     //total = newOder.totalprice();



    $("form#type").submit(function (event) {
        event.preventDefualt();
        var crust2 = $("select#crust1").val();
        var topping2 = $("select#topping1").val();
        var size2 = $("select#size1").val();


        var newPizzaOder = new Pizaa(crust2, topping2, size2)
        newOder.push(newPizzaOder)
        $("select#crust1").val("");
        $("select#topping1").val("");
        $("select#size1").val("");
        total = 0;

        for (let i = 0; i < newOder.length; i++) {
            total += newOder[i].myPizzaPrice();
        }

        $("#teble").append(
            "<tr>" +
            '<th scope="row">' +

            newPizza.crust +
            "  @ " +
            newPizza.myCrustPrice() +
            "</th>" +
            "<td>" +
            newPizza.toppings +
            " @ " +
            newPizza.myToppingsPrice() +
            "</td>" +
            "<td>" +
            newPizza.Size +
            " @ " +
            newPizza.mySizePrice() +
            "</td>" +
            "<td>" +
            newPizza.myPizzaPrice() +
            "</td>" +
            "</tr>"
        );
        $("#table").append("");
        if (newOrder.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#Amount2").fadeIn();
        $("#Procced").fadeIn();
        $("#orders-div").fadeIn();

        $("#Amount2").empty();
        $("#Amount2").append(totalAmount);
        $(".Amount2").show();
    });
    $("#Procced").click(function () {
        $(".checkout-options").show();
    });

    $("#proceed-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#option1").val();
        customerName = name;
        $("#name").val("");
        $("#option1").val("");
        $(".checkout-options").hide();
        $("#Procced").hide();
        $("#Amount2").empty();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#Amount2").empty();
            $("#delivery-amount").append(300);
            totalAmount += 300;
            $("#Amount2").empty();
            $("#Amount2").empty();
            $("#Amount2").append(totalAmount);
            $(".Amount2").show();

            $("#Amount2").append(totalAmount);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hours");
        }
    });

    $(".location-form").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        $("#checkout").hide();
        $(".location").hide();
        $("#Amount2").empty();
        $("#Amount2").append(totalAmount);
        $(".Amount2").show();
        alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hours");
    });


})