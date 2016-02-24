import React from 'react';
import Panel from './Panel';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import centerMap from '../centermap';
import showDirections from '../showDirections';
import locations from '../locations';
let center = {
  lat: 38.578934,
  lon: -121.4920968
};

export default React.createClass({
  locations: locations,
  map: null,
  markers: [],
  infoWindow: null,
  render: function() {
    return (
      <div className="GMap">
        <Panel locs={this.locations} />
        <div id="map"></div>
      </div>
    );
  },
  componentDidMount: function() {
    Promise.resolve(this.createMap())
    .then(result => {
      this.map = result
      return this.map;
    })
    .then(map => {
      return new Promise((resolve, reject) => {
        this.setCenter(map, center => {
        locations.unshift({name: 'My location', address: center});
        resolve(locations);
        })
      })
    })
    .then(() => {
      this.markers = this.locations.map(location => {
        this.geocodeAddress(location, this.map);
      });
      document.getElementById('center')
      .addEventListener('click', () => {
        this.setCenter(this.map, center => {
          console.log('CENTER', center);
        });
      });
      document.getElementById('go').addEventListener('click', () => {
          showDirections(this.map);
      });
    })
  },
  createMap: function() {
    var coords, mapOptions;
    coords = center;
    mapOptions = {
      minZoom: 9,
      zoom: 14,
      center: new google.maps.LatLng(coords.lat, coords.lng)
    };
    return new google.maps.Map(document.getElementById('map'), mapOptions);
  },
  geocodeAddress: function(location, map) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': location.address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var contentString = `<div><h3>${location.name}</h3>
        <span>${location.address}</span></div>`;
        var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: map,
          label: location.name
        });
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        return marker;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },
  setCenter: function(map, cb) {
    centerMap(map, position => {
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': position}, function(results, status){
        if(status === google.maps.GeocoderStatus.OK){
          if (results[1]) {
            let center = results[1].formatted_address;
            return cb(center);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    });
  }
});
