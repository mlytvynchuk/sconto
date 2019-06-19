/* npm install --save google-maps-react */

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  export class MapContainer extends Component {

    state = {
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {}          
    };
  

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };


    render() {
      return (
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{ lat: 49.808906, lng: 24.017221 }}
        >
          <Marker
          onClick={this.onMarkerClick}
          name={'Here is our cafe'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>

      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDtBigezuNJFGiAIh-gPgyvISSgeuBjqeo'
  })(MapContainer);