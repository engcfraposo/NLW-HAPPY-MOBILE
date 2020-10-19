import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const WhatsButton = styled(RectButton)`
    background-color: #3CDC8C;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 40px;
`

export const WhatsButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    margin-left: 16px;
`