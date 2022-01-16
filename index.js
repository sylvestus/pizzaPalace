$(document).ready(function () {

    function Pizza(Size, pizzaCrust, pizzaToppings, PizzaNumber) {
            this.pizzaSize = pizzaSize;
            this.pizzaCrust = pizzaCrust;
            this.pizzaToppings = pizzaTopping;
            this.PizzaNumber = PizzaNumber;
          }

  //size
  function Size(size, price) {
    this.size = size;
    this.price = price;
  }

  var small = new Size("small", 500);
  var medium = new Size("medium", 1000);
  var large = new Size("large", 1500);

  //crust

  function PizaCrust(crust, price) {
    this.crust = crust;
    this.price = price;
  }
});
