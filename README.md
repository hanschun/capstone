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

Requirements: 

1. Node.js (5.3.0 as of this writing) and npm(3.5.3) Check this with ```node --version``` and ```npm --version``` respectively on the terminal. Get node.js at [https://nodejs.org](https://nodejs.org) which will include npm.
2. A Google Developer API key to access Google Maps. [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/) and choose Get a Key.

To use: 

1. Fork or clone this repo. 
2. Use ```npm install``` to install node module dependencies
3. Start the webpack dev server with ```webpack-dev-server```

Next steps:

1. Needs a live server example
2. Write and include unit tests
3. I would really like to implement Redux here. I hope to do that soon. Many dependencies already included in the package.json.
4. When interfacing with Google Maps API, this project has difficulty with query limits when there are more than 5 entries in locations.js. Ideally this would be in the hundreds, so I need to solve this problem. I think this can be achieved with a combination of better filtering and API call structure, but this may also be limited by the free service plan. I will be investigating this.
