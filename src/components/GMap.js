import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import centerMap from '../centermap';
import showDirections from '../showDirections';

const locations = [
  {
    "name": "Loaves and Fishes",
    "address": "1351 N C St, Sacramento, CA 95811",
    "coords": {
      "lat": 38.5918347,
      "lon": -121.4850515
    }
  },
  {
    "name": "River City Food Bank",
    "address": "1800 28th St, Sacramento, CA 95816",
    "coords": {
      "lat": 38.5648937,
      "lon": -121.4756712
    }
  },
  {
    "name": "Sacramento Food Bank",
    "address": "3333 3rd Ave, Sacramento, CA 95817",
    "coords": {
      "lat": 38.552414,
      "lon": -121.4722987
    }
  }
];

export default React.createClass({
  map: null,
  markers: [],
  infoWindow: null,
  render: function() {
    return <div className="GMap">
      <div id="map"></div>
    </div>
  },
  componentDidMount: function() {
    this.map = this.createMap();
    this.markers = locations.map(location => {
      var contentString = `<div><h3>${location.name}</h3>
      <span>${location.address}</span></div>`;
      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      })
      var marker = this.createMarker(location);
      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });
      return marker;
    });
    // this.infoWindows = this.markers.map(marker => this.createInfoWindow(marker));
    centerMap(this.map);
    showDirections(this.map);
  },
  createMap: function() {
    var coords, mapOptions;
    coords = this.props.coords;
    mapOptions = {
      minZoom: 9,
      zoom: 14,
      center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
    };
    return new google.maps.Map(document.getElementById('map'), mapOptions);
  },
  createMarker: function(location) {
    var marker;
    return marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.coords.lat, location.coords.lon),
      map: this.map,
      label: location.name
    });

  },
  // createInfoWindow: function(marker) {
  //   var infoWindow;
  //   return infoWindow = new google.maps.InfoWindow({
  //     map: this.map,
  //     anchor: marker,
  //     content: marker.label
  //   });
  // },


});
