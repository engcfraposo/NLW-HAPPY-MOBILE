import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const DataContainer = styled.ScrollView`
    flex: 1;
`

export const Title = styled.Text`
    color: #5c8599;
    font-size: 24px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #5c8599;
`

export const Label = styled.Text`
    color: #5c8599;
    font-size: 24px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E8;
`

export const LabelError = styled.Text`
    color: #FF6690;
    font-size: 16px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E8;
`

export const LabelWeekend = styled.Text`
    color: #5c8599;
    font-size: 24px;
    margin-bottom: 32px;
    padding-bottom: 24px;
`

export const Input = styled(TextInput)`
    background-color: #fff;
    height: 56px;
    margin-bottom: 16px;
`

export const ImageInput = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.5);
    border-style: dashed;
    border-color: #96D2F0;
    border-width: 1.4px;
    border-radius: 20px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

`

export const TextArea = styled(TextInput)`
    background-color: #fff;
    height: 110px;
    
    margin-bottom: 16px;
`

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`