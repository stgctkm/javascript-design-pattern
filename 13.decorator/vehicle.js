function vehicle(vehicleType) {
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
}

var testInstance = new vehicle("car");
console.log(testInstance);

var truck = new vehicle("trucke");

truck.setModel = function(modelName) {
  this.model = modelName;
};

truck.setColor = function(color) {
  this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

var secondInstance = new vehicle("car");
console.log(secondInstance);
