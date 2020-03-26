$(function() {
	let numOfCars = prompt("Введіть кількість авто");
	let cars = [];
	for (let i = 0; i < numOfCars; i++) {
		let carBrand = prompt("Введіть назву бренду авто під номером " + (i + 1));
		let model = prompt("Введіть назву моделі авто під номером " + (i + 1));
		let productionYear = prompt("Введіть рік випуску авто під номером " + (i + 1));

		cars[i] = {
			'carBrand': carBrand,
			'model': model,
			'productionYear': productionYear
		};
	}

	let groupedByBrandName = _.groupBy(cars, 'carBrand');
	let groupedByModel = _.groupBy(cars, 'model');
	let groupedByProductionYear = _.groupBy(cars, 'productionYear');

	console.log("Grouped by Brand Name: ");
	console.log(groupedByBrandName);

	console.log("Grouped by Model: ");
	console.log(groupedByModel);

	console.log("Grouped by Production Year: ");
	console.log(groupedByProductionYear);

	let filterYear = prompt("Введіть рік, і програма виведе авто які вийшли у цьому році");
	let filterArray = _.filter(cars, function(item) {
		if (item.productionYear == filterYear) {
			return item;
		}
	});

	console.log("Cars with production year " + filterYear);
	console.log(filterArray);

	let maxYear = _.max(cars, function(item) {
		return	item.productionYear;
	});
	let minYear = _.min(cars, function(item) {
		return	item.productionYear;
	});

	console.log("Newest car: ");
	console.log(maxYear);

	console.log("Oldest car: ");
	console.log(minYear);
});