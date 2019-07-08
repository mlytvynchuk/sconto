import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from 'react-geocode';
import * as local_settings from '../settings';
import qs from 'querystring';

Geocode.setApiKey(local_settings.GOOGLE_KEY);
Geocode.enableDebug();

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  export class MapContainer extends Component {

    state = {
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {},
      loc: null,   
    };

    componentDidMount() {
      const value = qs.parse(this.props.location.search)
      this.address = value['?address']
      this.cafe = value['cafe']

      this.getCoordinates().then(loc => {
        this.setState({ loc });
      });
    }

    onMarkerClick = (props, marker ) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = () => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    getCoordinates() {
      return Geocode.fromAddress(this.address).then(
        response => {
          const loc = response.results[0].geometry.location;
          console.log(loc.lat, loc.lng);
          return loc;
        },
        error => {
          console.error(error);
        }
      ); 
    }

    render() {
      if (!this.state.loc) {
        return <span>Loading...</span>
      }
      return (
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={this.state.loc}
        >
          <Marker
          onClick={this.onMarkerClick}
          name = {this.cafe}
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
    apiKey: local_settings.GOOGLE_KEY
  })(MapContainer);
