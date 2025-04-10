//1
const shop = {
    name: "yeskoshop",
    address: "Almaty, Almaty district, Street Pushkina, 25",
    rating: null,
    website: undefined,
    isOpen: true,
    averageCheck: 2500,
    currency: "tenge"
};

shop.ownerCar = "Toyota supra";

shop["isClose"] = true;

delete shop["isClose"];

delete shop.ownerCar;

//2
const vehicle = {
    brandName: "Mercedes-Benz",
    model: "W223"
}

shop.model = "M1";

delete shop["model"];

//3
let salaries = {
	Alibek: 700000,
	Yesko: 1000000,
	Janibek: 428926,
    Arkajan: 567900
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}

console.log(sum);