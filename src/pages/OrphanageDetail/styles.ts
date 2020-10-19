import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const OrphanageContainer = styled.ScrollView`
    flex: 1;
`

export const ImagesContainer = styled.View`
    height: 240px;
`

export const OrphanageImage = styled.Image`
    width: 600px;
    height: 240px;
`

export const DetailsContainer = styled.View`
    padding: 24px;
`

export const Title = styled.Text`
    color: #4D6F80;
    font-size: 30px;
`

export const Description = styled.Text`
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
`

export const MapContainer = styled.View`
    border-radius: 20px;
    overflow: hidden;
    border-width: 1.2px;
    border-color: #B3DAE2;
    margin-top: 40px;
    background-color: #E6F7FB;
`

export const CardMap = styled(MapView)`
    width: 100%;
    height: 150px;
`

export const RoutesContainer = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    justify-content: center;
`

export const RoutesText = styled.Text`
    color: #0089a5;
`

export const ScheduleContainer = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`
