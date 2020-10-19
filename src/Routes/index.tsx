import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetail from '../pages/OrphanageDetail';
import SetMapPosition from '../pages/SelectMapPosition';
import OrphanageData from '../pages/OrphanageData';
import Header from '../Components/Header';


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    
  return (
  <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false, 
          cardStyle: {backgroundColor: '#f2f3f5'}
        }}
      >
          <Screen 
            name="OrphanagesMap" 
            component={OrphanagesMap} 
         />
         <Screen 
            name="OrphanageDetail" 
            component={OrphanageDetail}
            options={{
              headerShown: true,
              header: () => <Header showCancel={false} text="Orfanato"/> 
            }} 
         />
         <Screen 
            name="SetMapPosition" 
            component={SetMapPosition} 
            options={{
              headerShown: true,
              header: () => <Header text="Selecionar no mapa"/> 
            }} 
         />
         <Screen 
            name="OrphanageData" 
            component={OrphanageData} 
            options={{
              headerShown: true,
              header: () => <Header text="Orfanato"/> 
            }} 
         />
      </Navigator>
  </NavigationContainer>
  );
}

export default Routes;