//Fetch the JSON data, then display the bars on the graph based on height
//Add tooltips that display the amount spent when hovering over bars
fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		const bartToolTipEls = document.querySelectorAll(".js-bar-tooltip")
		const barEls = document.querySelectorAll(".js-bar-el")
		const arrayOfToolTips = [...bartToolTipEls]
		const arrayOfBars = [...barEls]
		let spendingAmounts = data.map((interval) => interval.amount)

		//Add the correct spending amount to each tooltip contained in the html
		arrayOfToolTips.forEach((toolTip, index) => {
			toolTip.textContent = `$${spendingAmounts[index]}`
		})

		//Add the correct height to each bar based on the amount spent
		arrayOfBars.forEach((bar, index) => {
			// bar.classList.remove("h-[0]")
			// bar.classList.add(
			// 	`h-[${calculateBarHeight(spendingAmounts[index])}px]`
			// }
			bar.style.height = `${calculateBarHeight(spendingAmounts[index])}px`
		})

		//Add a cyan background to the bar representing the current day of the week
		data.forEach((interval, index) => {
			if (interval.day === dayOfWeekToday()) {
				arrayOfBars[index].style.backgroundColor = "#76B5BC"
				console.log(arrayOfBars[index].style.backgroundColor)
			}
		})
	})

//Calculates the bar height based on a a standard where $17.45 equals 50px
const calculateBarHeight = (amountSpent) => {
	return Math.round((amountSpent * 50) / 17.45).toString()
}

// Calculates the day of the week
let dayOfWeekToday = () => {
	const now = new Date()
	const dayNumber = now.getDay()
	const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
	return dayNames[dayNumber]
}
