const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price")
	console.log(prices)
  
};

getSumBtn.addEventListener("click", getSum);

