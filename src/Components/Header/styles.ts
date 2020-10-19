import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    background-color: #f9fafe;
    border: 1px #dde3f0 solid;
    padding: 24px;
    padding-top: 44px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const BackButton = styled(BorderlessButton)`
    
`


export const HeaderText = styled.Text`
    color: #8fa7b3;
    font-size: 16px;
`