import { assertEquals } from "../test-framework/test-framework.js";
import airport from "../src/airport.js";

const afterEach = () => {
	expected = undefined;
	actual = undefined;
	result = undefined;
	testPlane = undefined;
};

//! TEST 1
//* Add 'testPlane' to the airport object and expect airport array length increase by 1
console.log("Test 1");
console.log(
	"Add testPlane to the airport object and expect airport array length increase by 1"
);

// Arrange
let testPlane = "plane1";
let expected = airport.airportPlanes.length + 1;
let actual, result;

// Act
airport.addPlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 2
//* The plane added to the list of planes is the one pass on to the function addPlane
console.log("Test 2");
console.log(
	"The plane added to the list of planes is the one pass on to the function addPlane"
);

// Arrange
testPlane = "plane1";
expected = true;
actual, result;

// Act
airport.addPlane(testPlane);
actual = airport.airportPlanes.includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 3
//* The addPlane function allows a plane to be added to the airportPlane list when there're more planes in it
console.log("Test 3");
console.log(
	"The addPlane function allows a plane to be added to the airportPlane list when there're more planes in it"
);

// Arrange
testPlane = "plane1";
airport.airportPlanes = ["plane2"];
expected = true;
actual, result;

// Act
airport.addPlane(testPlane);
actual = airport.airportPlanes.includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 4
//* The addPlane function doesn't allow undefined/null planes to be add
console.log("Test 4");
console.log(
	"The addPlane function doesn't allow undefined/null planes to be add"
);

// Arrange
testPlane = undefined;
expected = false;
actual, result;

// Act
airport.addPlane(testPlane);
actual = airport.airportPlanes.includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 5
//* Function removePlane decrease the length of the airportPlanes array by 1
console.log("Test 5");
console.log(
	"Function removePlane decrease the length of the airportPlanes array by 1"
);

// Arrange
testPlane = "plane";
airport.airportPlanes = ["plane"];
expected = airport.airportPlanes.length - 1;
actual, result;

// Act
airport.removePlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 6
//* Function removePlane removes the actual plane from the array airportPlanes
console.log("Test 6");
console.log(
	"Function removePlane removes the actual plane from the array airportPlanes"
);

// Arrange
testPlane = "plane2";
airport.airportPlanes = ["plane1", "plane2"];
expected = airport.airportPlanes;
actual, result;

// Act
airport.removePlane(testPlane);
actual = airport.airportPlanes;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 7
//* Test plane with value undefined cannot be remove from array airportPlanes
console.log("Test 7");
console.log(
	"Test plane with value undefined cannot be remove from array airportPlanes"
);

// Arrange
testPlane = undefined;
airport.airportPlanes = ["plane1"];
expected = 1;
actual, result;

// Act
airport.removePlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 8
//* Function planeIsAtAirport returns true if the plane is at the airport
console.log("Test 8");
console.log(
	"Function planeIsAtAirport returns true if the plane is at the airport"
);

// Arrange
testPlane = "plane1";
airport.airportPlanes = ["plane1"];
expected = true;
actual, result;

// Act
actual = airport.planeIsAtAirport(testPlane);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 9
//* Function planeIsAtAirport returns false if the plane is not at the airport
console.log("Test 9");
console.log(
	"Function planeIsAtAirport returns false if the plane is not at the airport"
);

// Arrange
testPlane = "plane1";
airport.airportPlanes = ["plane2"];
expected = false;
actual, result;

// Act
actual = airport.planeIsAtAirport(testPlane);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 10
//* If a plane is at the airport (planeIsAtAirport is true) function addPlane won't add the plane
console.log("Test 10");
console.log(
	"If a plane is at the airport (planeIsAtAirport is true) function addPlane won't add the plane"
);

// Arrange
testPlane = "plane1";
airport.airportPlanes = ["plane1"];
expected = 1;
actual, result;

// Act
airport.addPlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 11
//* If a plane is not at the airport (planeIsAtAirport is false) function removePlane won't remove the plane
console.log("Test 11");
console.log(
	"If a plane is not at the airport (planeIsAtAirport is false) function removePlane won't remove the plane"
);

// Arrange
testPlane = "plane2";
airport.airportPlanes = ["plane1"];
expected = 1;
actual, result;

// Act
airport.removePlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 12
//* Test function to increase capacity of the airport
console.log("Test 12");
console.log("Test function to increase capacity of the airport");

// Arrange
let testCapacity = 5;
expected = 5;
actual, result;

// Act
airport.changeAirportCapacity(testCapacity);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 13
//* Test isAirportFull return "false" if the airport capacity is bigger than the amount of airplanes in the airportPlanes
console.log("Test 13");
console.log(
	"Test isAirportFull return false if the airport capacity is bigger than the amount of airplanes in the airportPlanes"
);

// Arrange
testCapacity = 2;
airport.airportPlanes = ["plane1"];
expected = false;
actual, result;

// Act
airport.changeAirportCapacity(testCapacity);
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 14
//* Test isAirportFull return "true" if the airport capacity is the same than the amount of airplanes in the airportPlanes
console.log("Test 14");
console.log(
	"Test isAirportFull return true if the airport capacity is the same than the amount of airplanes in the airportPlanes"
);

// Arrange
testCapacity = 2;
airport.airportPlanes = ["plane1", "plane2"];
expected = true;
actual, result;

// Act
airport.changeAirportCapacity(testCapacity);
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();

//! TEST 15
//* If the airport is full a new plane cannot be added to the airportPlanes array
console.log("Test 15");
console.log(
	"If the airport is full a new plane cannot be added to the airportPlanes array"
);

// Arrange
testCapacity = 1;
testPlane = "plane2";
airport.airportPlanes = ["plane1"];
expected = 1;
actual, result;

// Act
airport.changeAirportCapacity(testCapacity);
airport.addPlane(testPlane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? "Pass" : "Fail");
console.log("---------------------------");

//Clean
afterEach();
