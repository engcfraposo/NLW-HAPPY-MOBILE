import React from 'react';
import { Feather } from '@expo/vector-icons';
import { HeaderProps } from '../../@types/types';
import { SemiBold } from '../../fonts';
import { BackButton, HeaderContainer, HeaderText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';



export default function Header({ showCancel = true, text }: HeaderProps) {
    const navigation = useNavigation();
  return (
  <HeaderContainer>
      <BackButton onPress={navigation.goBack}>
          <Feather 
            name="arrow-left" 
            size={24}
            color='#15b5d6'
        />
      </BackButton>
      <HeaderText style={SemiBold}>{text}</HeaderText>
      {showCancel 
      ?(
          <BackButton onPress={()=> navigation.navigate('OrphanagesMap')}>
            <Feather 
                name="x" 
                size={24}
                color='#ff669d'
            />
        </BackButton>
      )
      :(<View />)
      }
  </HeaderContainer>
  );
}
