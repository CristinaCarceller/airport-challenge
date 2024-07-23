const airport = {
	airportPlanes: [],
	airportCapacity: 4,

	addPlane: function (plane) {
		if (!plane) return;
		if (this.planeIsAtAirport(plane) === true) {
			console.log(" * This plane is already at the airport");
			return;
		}
		if (this.isAirportFull() === true) return;
		this.airportPlanes.push(plane);
	},
	removePlane: function (plane) {
		if (!plane) return;
		if (this.planeIsAtAirport(plane) === false) {
			console.log(
				" * Action can not be completed because this plane isn't currently at the airport"
			);
			return;
		}
		const index = this.airportPlanes.indexOf(plane);
		this.airportPlanes.splice(index, 1);
	},

	planeIsAtAirport: function (plane) {
		return this.airportPlanes.includes(plane);
	},

	changeAirportCapacity: function (newCapacity) {
		this.airportCapacity = newCapacity;
	},

	isAirportFull: function () {
		if (this.airportCapacity === this.airportPlanes.length) {
			console.log(" * Airport is full");
			return true;
		}
		return false;
	},
};

export default airport;
