import React, { useState } from 'react';
import {PROVIDER_GOOGLE, Marker, MapEvent} from 'react-native-maps';
import { Container, Map } from './styles';
import mapMarker from '../../images/MapMarker.png';
import NextStepButton from '../../Components/NextStepButton';

const SetMapPosition= () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleSelectPosition = (click: MapEvent) => {
    setPosition(click.nativeEvent.coordinate);
  }

  return (
    <Container>
    <Map 
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -8.0625462,
        longitude: -34.9175803,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      onPress={handleSelectPosition}
    >
      {(position.latitude !== 0 && position.longitude !== 0)
        && (
          <Marker 
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
            icon={mapMarker}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />         
        )}
       </Map>

       {(position.latitude !== 0 && position.longitude !== 0)
        && (<NextStepButton text="Proximo" position={position}/>)}
  </Container>
  );
}

export default SetMapPosition;
