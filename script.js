const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price")

	let total = 0;

	prices.forEach(price=>{
		total += parseFloat(price.textContent)
	})

	let table = document.querySelector("table");
    let newRow = document.createElement("tr");

	newRow.innerHTML = `
	<td><h3>Total</h3></td>
	<td><h3>${total}</h3></td>
	`
    table.appendChild(newRow);
	
  
};

getSumBtn.addEventListener("click", getSum);

