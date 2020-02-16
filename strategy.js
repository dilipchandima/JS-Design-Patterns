function Fedex() {
  this.calculate = package => {
    return package.weight * 1;
  };
}

function Esps() {
  this.calculate = package => {
    return package.weight * 2;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = company => {
    this.company = company;
    return this;
  };
  this.calculate = package => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const esps = new Esps();

const shipping = new Shipping();

console.log(shipping.setStrategy(fedex).calculate({ weight: 3 }));
console.log(shipping.setStrategy(esps).calculate({ weight: 3 }));
