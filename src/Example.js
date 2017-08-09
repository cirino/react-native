import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const Example = () => {
  return (
    <Router createReducer={reducerCreate} tintColor='red' getSceneStyle={getSceneStyle}>
      <Scene overlay>
        <Scene key="messageBar" component={MessageBar} />
        <Scene key="modal" modal hideNavBar initial>
          <Scene key="lightbox" lightbox leftButtonTextStyle={{color: 'green'}} backButtonTextStyle={{color: 'red'}} initial>
            <Scene key="root" hideNavBar hideTabBar titleStyle={{alignSelf: 'center'}}>
              <Scene key="echo" back clone component={EchoView} getTitle={({navigation}) => navigation.state.key}/>
              <Scene key="register" back>
                <Scene key="_register" component={Register} title="Register"/>
                <Scene key="register2" component={Register} title="Register2"/>
                <Scene key="home" component={Home} title="Replace" type={ActionConst.POP_AND_PUSH}/>
              </Scene>
              <Scene key="launch" component={Launch} title="Launch" initial/>
              <Scene key="drawer" drawer contentComponent={TabView}>
                <Scene
                  key="tabbar"
                  gestureEnabled={false}
                  showLabel={false}
                  tabs
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor='#ddd'
                >
                  <Scene
                    key="tab1"
                    title="Tab #1"
                    tabBarLabel="TAB #1"
                    icon={TabIcon}
                    navigationBarStyle={{backgroundColor: 'red'}}
                    titleStyle={{color: 'white', alignSelf: 'center'}}
                  >
                    <Scene
                      key="tab1_1"
                      component={TabView}
                      title="Tab #1_1"
                      onRight={() => alert('Right button')}
                      rightTitle="Right"
                    />
                    <Scene
                      key="tab1_2"
                      component={TabView}
                      title="Tab #1_2"
                      back
                      titleStyle={{color: 'black', alignSelf: 'center'}}
                    />
                  </Scene>
                  <Scene key="tab2" initial title="Tab #2" icon={TabIcon}>
                    <Scene
                      key="tab2_1"
                      component={TabView}
                      title="Tab #2_1"
                      renderRightButton={() => <Text>Right</Text>}
                    />
                    <Scene
                      key="tab2_2"
                      component={TabView}
                      title="Tab #2_2"
                      back
                      onBack={() => alert('onBack button!')}
                      backTitle="Back!"
                      panHandlers={null}
                    />
                  </Scene>
                  <Scene key="tab3" component={TabView} title="Tab #3" icon={TabIcon}/>
                  <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar icon={TabIcon}/>
                  <Scene key="tab5" component={TabView} title="Tab #5" icon={TabIcon}/>
                </Scene>
              </Scene>
            </Scene>
            <Scene key="error" component={Error}/>
          </Scene>
          <Scene key="login" titleStyle={{alignSelf: 'center'}}>
            <Scene key="loginModal" component={Login} title="Login"
                   onEnter={()=>console.log('onEnter')}
                   onExit={()=>console.log('onExit')}
                   leftTitle="Cancel" onLeft={Actions.pop}/>
            <Scene
              key="loginModal2"
              component={Login2}
              title="Login2"
              backTitle="Back"
              panHandlers={null}
              duration={1}
            />
            <Scene
              key="loginModal3"
              hideNavBar
              component={Login3}
              title="Login3"
              panHandlers={null}
              duration={1}
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default Example;