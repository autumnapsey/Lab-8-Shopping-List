var groceries = [
	{
		name: "Milk",
		price: 2.00
	},
	{
		name: "Eggs",
		price: 2.99
	},
	{
		name: "Bread",
		price: 3.50
	},
	{
		name: "Cheese",
		price: 4.00
	},
];

var total = 0;

var list = document.getElementById("food");
var cost = document.getElementById("prices");
var foodTotal = document.getElementById("foodTotal");

groceries.forEach(function(item) {
	var newItem = document.createElement("li");
	newItem.innerText += item.name;
	food.appendChild(newItem);

	var newPrice = document.createElement("li");
	newPrice.innerText += "$ " + parseFloat(Math.round(item.price*100)/100).toFixed(2);
	prices.appendChild(newPrice);
	total += item.price;
});

foodTotal.innerText = " $" + total;

var newFood = document.getElementById("foodForm");
var button = document.getElementById("addSubmit")


button.addEventListener("click", function(){
	var userFood = document.getElementById("itemName").value;
	var newUserFood = document.createElement("li");
	newUserFood.innerText += userFood;
	food.appendChild(newUserFood);

	var userPrice = parseFloat(Math.round(document.getElementById("itemPrice").value*100)/100).toFixed(2);
	var newUserPrice = document.createElement("li");
	newUserPrice.innerText += "$ " + userPrice;
	prices.appendChild(newUserPrice);

	total += parseFloat(userPrice,10);

	foodTotal.innerText = " $" + total;

})







foodForm.onsubmit = function() {
	var newItem = document.createElement("li");
	newItem.innerText = newItemName;
	food.appendChild(newItem);

	var newPrice = document.createElement("li");
	newPrice.innerText = newItemPrice;
	food.appendChild(newPrice);
};















