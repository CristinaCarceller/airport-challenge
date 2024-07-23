import airport from "./airport.js";

const plane1 = "FG2030";
const plane2 = "SG8092";
const plane3 = "RN4455";

airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);

console.log(
	"The planes that are currently at the airport: ",
	airport.airportPlanes
);

airport.airportCapacity = 3;
airport.isAirportFull();

airport.removePlane(plane3);

console.log(
	"The planes that are currently at the airport: ",
	airport.airportPlanes
);

airport.addPlane(plane1);

airport.removePlane(plane3);
