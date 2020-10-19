import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TextType } from '../../@types/types';
import { ExtraBold } from '../../fonts';
import { FinishButton, NextButton, NextButtonText } from './styles';

export default function NextStepButton({ text, position={latitude:0, longitude: 0}, handleSubmit }: TextType) {
    const navigation = useNavigation();

    switch(text){
        case 'Proximo':
            return(
                <NextButton onPress={() => navigation.navigate('OrphanageData', {position})}>
                    <NextButtonText style={ExtraBold}>{text}</NextButtonText>
                </NextButton>
            );
        case 'Cadastrar':
            return(
                <FinishButton onPress={handleSubmit}>
                    <NextButtonText style={ExtraBold}>{text}</NextButtonText>
                </FinishButton>
            );
        default:
            return <></>;
    }

}
