import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
const scenes = (
  <Scene key={'presentation'}>
    <Scene
      hideNavBar
      key={'presentation'}
      component={Authenticate}
      type={ActionConst.REFRESH}
      analyticsDesc={'presentation: presentation'}
    />
      </Scene>
);

export default scenes;
