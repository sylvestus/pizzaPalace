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
  var crispy = new PizaCrust("crispy", 300); //asumtion prices for small
  var stuffed = new PizaCrust("stuffed", 250);
  var gluttenFree = new PizaCrust("glutten free", 200);

  //toppings

  function PizaToppings(toppings, price) {
    this.toppings = toppings;
    this.price = price;
  }
  var Pepperoni = new PizaToppings("pepperoni", 300); //asumtion prices for small
  var Mushroom = new PizaToppings("mushroom", 250);
  var Onion = new PizaToppings("onion", 200);
  var Tomato = new PizaToppings("tomato", 200);
  var FreshGarlic = new PizaToppings("freshGarlic", 200);
  var FreshBasil = new PizaToppings("freshBasil", 200);

   let deliveryFee=500

  $("#radio_bn").click(function () {
    //size
    var radioValue = $("input[name='psize']:checked").val();

    if (radioValue == "large") {
      var pricePerSize = large.price;
      //return pricePerSize;
     // alert(pricePerSize);
    } else if (radioValue == "medium") {
      var pricePerSize = medium.price;
      //return pricePerSize;
      //alert(pricePerSize)
    } else if (radioValue == "small") {
      var pricePerSize = small.price;
      //return pricePerSize;
      //alert(pricePerSize)
    } else {
      alert("sellect your pizza size");
    }

    //crust

    var selectedcrusttype = $("input[name='pcrust']:checked").val();
    if (selectedcrusttype == "crispy") {
      var pricePerCrust = crispy.price;
      //return pricePerCrust;
      //alert(pricePerCrust);
    } else if (selectedcrusttype == "stuffed") {
      var pricePerCrust = stuffed.price;
      //return pricePerCrust;
      alert(pricePerCrust)
    } else if (selectedcrusttype == "gluttenfree") {
      var pricePerCrust = gluttenFree.price;
      //return pricePerCrust;
      //alert(pricePerSize)
    } else {
      alert("sellect your pizza crust");
    }

  });



});
