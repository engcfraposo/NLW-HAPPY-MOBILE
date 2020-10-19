import React from 'react';
import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Container, CreateOrphanageButton, Footer, FooterText, Map, OrphanageContainer, OrphanageName } from './styles';
import mapMarker from '../../images/MapMarker.png';
import { Bold } from '../../fonts'
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import { Orphanage } from '../../@types/types';

const OrphanagesMap: React.FC = () => {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  const navigation = useNavigation();

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
      >
        {orphanages.map(orphanage => (
          <Marker 
          key={orphanage.id}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
          <Callout tooltip onPress={() => navigation.navigate('OrphanageDetail', {id:orphanage.id})}>
            <OrphanageContainer>
              <OrphanageName style={Bold}>{orphanage.name}</OrphanageName>
            </OrphanageContainer>
          </Callout>
        </Marker>
      ))}
    </Map>
    <Footer>
      <FooterText style={Bold}>{orphanages.length} orfanatos encontrados</FooterText>
      <CreateOrphanageButton onPress={() => navigation.navigate('SetMapPosition')}>
        <Feather name="plus" size={20} color="#fff" />
      </CreateOrphanageButton>
    </Footer>
  </Container>
  );
}

export default OrphanagesMap;
