function House(area) {
    this.area = area;
}

function Apartment(area, houseType) {
    this.houseType = houseType;
    House.call(this, area)
}

let apartment = new Apartment('130平米', '三室两厅');

console.log(apartment.area);
console.log(apartment.houseType);