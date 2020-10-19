import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'
import Routes from './src/Routes';


export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
});
  if(!fontLoaded){
    return (
      <Spinner
          visible={true}
          textContent={'Loading...'}
      />
    )
  }
  return (
    <Routes />
  );
}

