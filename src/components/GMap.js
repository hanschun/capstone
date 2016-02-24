import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import centerMap from '../centermap';
import showDirections from '../showDirections';
var locations;
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
    locations = this.props.locs;
    console.log('locations: ', locations);
    this.map = this.createMap();
    this.markers = locations.map(location => {
      this.geocodeAddress(location, this.map);
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
      center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lng)
    };
    return new google.maps.Map(document.getElementById('map'), mapOptions);
  },
  // createMarker: function(location, position) {
  //   var marker;
  //   return marker = new google.maps.Marker({
  //     position: position,
  //     map: this.map,
  //     label: location.name
  //   });
  // },
  // createMarkersWithInfo(location, position){
  //   var contentString = `<div><h3>${location.name}</h3>
  //   <span>${location.address}</span></div>`;
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: contentString
  //   });
  //   var marker = this.createMarker(location, position);
  //   marker.addListener('click', () => {
  //     infoWindow.open(this.map, marker);
  //   });
  //   return marker;
  // },
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
  }
});
