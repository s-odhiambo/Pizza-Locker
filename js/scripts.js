function Details(type, size, crust, toppings, quantity){
  this.selectedType = type;
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

function Total(price, quantity, delivery){
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
  this.finalTotal = function(){
    return this.price * this.quantity + this.delivery;
  }
}





  //ui logic
$(document).ready(function(){
  $('#motiv').submit(function(event){
    event.preventDefault();

    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliverPrices = [200, 0]
    var size=["small", "medium", "large", "family"];
    
    var sizePrices = [1000, 1500 , 2000, 2500];
    var inputtedType = $('#type').val();
    var inputtedCrust = $('#crusts').val();
    var inputtedTopping = $('#toppings').val();
    var inputtedSize = parseInt(($('#size').val()));
    var pizzaPrice = sizePrices[inputtedSize];
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = parseInt($("#delivery").val());

    var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
    var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
    var newBill = newTotal.finalTotal(pizzaPrice, inputtedQuantity, deliveryPrice);
     
    console.log(newTotal);
    

    alert("Your order is " + size[newDetails.selectedSize] + ", " + newDetails.selectedToppings + ', and ' + newDetails.selectedCrust +".  your bill is" +(" ") + newBill +"" );
  
    document.getElementById('motiv').reset();

  });
});
