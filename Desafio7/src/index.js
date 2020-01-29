import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
   return (
      <>
         <StatusBar backgroundColor="black" barStyle="light-content" />
         <Routes />
      </>
   );
}
