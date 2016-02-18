import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default GMap = React.createClass({
  var map = null
  var marker = null
  var infoWindow = null

  render: function(){
    <div className="GMap">
      <div ref="map_canvas">
      </div>
    </div>
  },
  componentDidMount: function(){
    // # create the map, marker and infoWindow after the component has
    // # been rendered because we need to manipulate the DOM for Google =(
    map = this.createMap()
    marker = this.createMarker()
    infoWindow = this.createInfoWindow()

    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    // google.maps.event.addListener @map, 'zoom_changed', => @handleZoomChange()
    // google.maps.event.addListener @map, 'dragend', => @handleDragEnd()
  },
  createMap: function(){
    let coords = this.props.coords;
    let mapOptions = {
      minZoom: 9,
      zoom: 10,
      center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
    };
    new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions)
  },
  createMarker: function() {
    let marker = new google.maps.Marker
    let position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
      map: this.map
  },
  createInfoWindow: function(){
    contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    infoWindow = new google.maps.InfoWindow({
      map: this.map
      anchor: this.marker
      content: this.contentString
      })
    }
});
