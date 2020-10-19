import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { WhatsButton, WhatsButtonText } from './styles';
import { ExtraBold } from '../../fonts'


export default function WhatsappButton() {
  return (
    <WhatsButton onPress={() => {}}>
        <FontAwesome name="whatsapp" size={24} color="#FFF" />
        <WhatsButtonText  style={ExtraBold}>Entrar em contato</WhatsButtonText>
    </WhatsButton>
  );
}

