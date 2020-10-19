import React, { useEffect, useState } from 'react';
import { Linking, ScrollView } from 'react-native';
import { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import mapMarkerImg from '../../images/MapMarker.png';
import WhatsappButton from '../../Components/WhatsappButton';
import ScheduleCard from '../../Components/ScheduleCard';
import { OrphanageContainer, Description, DetailsContainer, ImagesContainer, OrphanageImage, Title, MapContainer, CardMap, RoutesContainer, RoutesText, ScheduleContainer } from './styles';
import { Bold, SemiBold } from '../../fonts'
import { Separator } from '../../Components/Separator';
import { api } from '../../services/api';
import { OrphanageWithDetail, OrphanageRouteParams } from '../../@types/types';
import Spinner from 'react-native-loading-spinner-overlay';

const OrphanageDetail = () => { 

  const [orphanage, setOrphanage] = useState<OrphanageWithDetail>();

  const route  = useRoute();

  const params = route.params as OrphanageRouteParams;

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  return orphanage?(
    <OrphanageContainer>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
        {orphanage.images.map(image => (
              <OrphanageImage
              key={image.id} 
              style={{resizeMode:'cover'}} 
              source={{ uri: image.url }} 
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title style={Bold}>{orphanage.name}</Title>
        <Description style={SemiBold}>{orphanage.about}</Description>
      
        <MapContainer>
          <CardMap 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </CardMap>

          <RoutesContainer onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`)}>
            <RoutesText style={Bold}>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
        <Separator />

        <Title style={Bold}>Instruções para visita</Title>
            <Description style={SemiBold}>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleCard typeCard='info' hours={orphanage.opening_hours} />
          <ScheduleCard typeCard={orphanage.open_on_weekends?'open':'closed'}/>
        </ScheduleContainer>
        
        <WhatsappButton />
        
      </DetailsContainer>
    </OrphanageContainer>
  )
  :(
    <Spinner
          visible={true}
          textContent={'Loading...'}
      />
  )
}

export default OrphanageDetail;
