var myCar = {
  name: "Ford Escort",
  drive: function() {
    console.log("Weeee. I'm driving!");
  }
  panic: function() {
    console.log("Wait. how do you sop this thing?");
  }
};

var yourCar = Object.create(myCar);
console.log(yourCar.name);

//----
var vehicle = {
  getModel: function() {
    console.log("The model of this vehicle is.." + this.model);
  }
};

var car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(),
    enumerable: true
  },
  model: {
    value: "Ford",
    enumerable: true
  }
});

//----
var vehiclePrototype = {
  init: function(carModel) {
    this.model = carModel;
  },
  getModel: function() {
    console.log("The model of this vehicle is.." + this.model);
  }
};

function vehicle(model) {
  function F() {};
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init(model);
  return f;
}

var car = vehicle("Ford Escort");
car.getModel();

//----
var beget = (function() {
  function F() {}
  return function(proto) {
    F.prototype = proto;
    return new F();
  };
})();
