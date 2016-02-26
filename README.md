# capstone
Capstone project for Regis University
### This capstone project is a Code4Sacramento and Sacramento Regional Center to End Honelessness collaboration.
My goal is to design an application that allows people to find services for homeless and low-income people using an interactive map.
Some of the features requested by the product owner (SRCEH):
* Allow navigation and directions from starting point to service location
* Filter results on map by type of service
* Be viewable on a mobile device

With these design choices in mind, I am creating a small web application that draws data from the Google Maps API to provide maps and directions. I am overlaying this with a collection of models representing service locations with addresses and location details. I am then displaying the map with a set of controls.

###Commit 1: Project map, first draft
This draft has a simple app shell developed in React. It draws data from the Google Maps API to give directions using the Google Maps directions service.

Requirements: Node.js (5.3.0 as of this writing) and npm(3.5.3) -Check this with node --version and npm --version respectively on the terminal.

To use: 
1. Fork or clone this repo. 
2. Use ```npm install``` to install node module dependencies

