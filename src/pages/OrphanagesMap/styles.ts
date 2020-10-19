import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`
export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`


export const OrphanageContainer = styled.View`
    width: 160px;
    height: 46px;
    padding: 0 16px;
    border-radius: 16px;
    justify-content: center;
    background-color: rgba(255,255,255,0.8);
`

export const OrphanageName = styled.Text`
    color: #0089a5;
    font-size: 14px;
`

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;
    background-color: #fff;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    elevation: 3;
`

export const FooterText = styled.Text`
    color: #8fa7b3;
`

export const CreateOrphanageButton = styled(RectButton)`
    width: 56px;
    height: 56px;
    background-color: #15c3d6;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`