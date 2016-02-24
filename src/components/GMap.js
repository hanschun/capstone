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
  map: null,
  markers: [],
  infoWindow: null,
  center: center,
  render: function() {
    return <div className="GMap">
      <Panel locs={locations}/>
      <div id="map"></div>
    </div>
  },
  componentDidMount: function() {
    this.map = this.createMap();
    this.markers = locations.map(location => {
      this.geocodeAddress(location, this.map);
    });
    document.getElementById('center')
    .addEventListener('click', () => {
      centerMap(this.map, result => {
          center = result;
      });
    });
    showDirections(this.map);
  },
  createMap: function() {
    var coords, mapOptions;
    coords = this.props.coords;
    mapOptions = {
      minZoom: 9,
      zoom: 14,
      center: new google.maps.LatLng(center.lat, center.lng)
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
  }
});
