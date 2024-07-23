# Domain Models, Test Plan & User Stories

## Requirement 1:

**User Story:** As a traffic controller, I want to be able to add an airplane to the airport software when landed, so that I can control the airport capacity.

**Domain Model:**

| Object  |          Properties          |     Message      | Output |
| :-----: | :--------------------------: | :--------------: | :----: |
| Airport | airportPlanes @Array[@plane] | addPlane(@plane) | @Void  |
|  Plane  |          id @string          |                  |        |

**Test plan:**

- addPlane to the airport and expect array (airportPlanes) has increase the length by 1.
- test the addPlane actually adds the plane I pass on the function.
- test it's possible to add a plane to the airportPlanes with more panes in it.
- test no plane gets add if it has the value null.

## Requirement 2:

**User Story:** As a traffic controller, I want to be able to remove an airplane to the airport software when it takes off, so that I can control the airport capacity.

**Domain Model:**

| Object  |          Properties          |       Message       | Output |
| :-----: | :--------------------------: | :-----------------: | :----: |
| Airport | airportPlanes @Array[@plane] | removePlane(@plane) | @Void  |
|  Plane  |          id @string          |                     |        |

**Test plan:**

- removePlane to the airport and expect array (airportPlanes) has decrease the length by 1.
- test the removePlane actually removes the plane I pass on the function.
- test no plane gets remove if it has the value null.

## Requirement 3:

**User Story:** As a traffic controller, I want to not be able to let an airplane land at the airport if it's already in, so that I can avoid errors.

**Domain Model:**

| Object  |          Properties          |        Message         |  Output  |
| :-----: | :--------------------------: | :--------------------: | :------: |
| Airport | airportPlanes @Array[@plane] | planeAtAirport(@plane) | @Boolean |
|  Plane  |          id @string          |                        |          |

**Test plan:**

- planeIsAtAirport returns true.
- planeIsAtAirport returns false.
- no plane gets add to array(airportPlanes) if the plane is already at the airport.

## Requirement 4:

**User Story:** As a traffic controller, I want to not be able to let an airplane to take off if it is not at the airport, so that I can avoid errors.

**Domain Model:**

| Object  |          Properties          |        Message         |  Output  |
| :-----: | :--------------------------: | :--------------------: | :------: |
| Airport | airportPlanes @Array[@plane] | planeAtAirport(@plane) | @Boolean |
|  Plane  |          id @string          |                        |          |

**Test plan:**

- planeIsAtAirport returns true.
- planeIsAtAirport returns false.
- no plane gets remove from array(airportPlanes) if the plane is not at the airport.

## Requirement 5:

**User Story:** As a representation of the airport, I want to be able to control the maximum amount of airplanes that can be at the airport, so that I can increase or decrease the amount of airplanes at the airport at the same time.

**Domain Model:**

| Object  |        Properties        |             Message             | Output |
| :-----: | :----------------------: | :-----------------------------: | :----: |
| Airport | airportCapacity @integer | changeAirportCapacity(@integer) | @Void  |

**Test plan:**

- changeAirportCapacity - increase airport capacity.
- changeAirportCapacity - decrease airport capacity.

## Requirement 6:

**User Story:** As a traffic controller, I want to be able to know when the airport is at maximum capacity, so that I can control the airport capacity.

**Domain Model:**

| Object  |          Properties          |     Message     |  Output  |
| :-----: | :--------------------------: | :-------------: | :------: |
| Airport |   airportCapacity @integer   | isAirportFull() | @Boolean |
|         | airportPlanes @Array[@plane] |                 |          |

**Test plan:**

- isAirportFull return true.
- isAirportFull return false.

## Requirement 7:

**User Story:** As a traffic controller, I want to not be able to let an airplane land at the airport if the airport is full, so that I can avoid errors.

**Domain Model:**

| Object  |          Properties          |        Message         |  Output  |
| :-----: | :--------------------------: | :--------------------: | :------: |
| Airport |   airportCapacity @integer   |    isAirportFull()     | @Boolean |
|         | airportPlanes @Array[@plane] | planeAtAirport(@plane) | @Boolean |
|  Plane  |          id @string          |                        |          |

**Test plan:**

- isAirportFull return true.
- isAirportFull return false.
- no plane gets add to array(airportPlanes) if the airport is at maximum capacity.
