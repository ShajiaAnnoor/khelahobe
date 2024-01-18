import React, { 
    Fragment 
} from 'react';
import { 
    NavigationContainer 
} from '@react-navigation/native';
import { 
    Image,
    Text,
    View,
} from 'react-native';
//import messaging from '@react-native-firebase/messaging';
import PropTypes from 'prop-types';
import 
    { createNativeStackNavigator 
} from '@react-navigation/native-stack';
import { withStyles } from '@ui-kitten/components';

import AllTabs from "./Tabs";
import ScorecardScreen from "./screens/Scorecard/ScorecardScreen";
import NewsScreen from "./screens/News/NewsScreen";
import BlogList from "./screens/Blog/BlogList";
import BlogPage from "./screens/Blog/BlogPage/index";

const Stack = createNativeStackNavigator();

//messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./khelahobe.png')}
      />
    );
  }

const propTypes = {
    isLoggedIn: PropTypes.bool,
    eva: PropTypes.shape({
        style: PropTypes.object,
    }).isRequired,
};

const defaultProps = {
    isLoggedIn: false,
};

const App = ({ eva: { style } }) => {

    const isLoggedIn = true ; 
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName={'Tabs'}
            >
                {isLoggedIn ? (
                    <Fragment>
                        <Stack.Screen 
                            name="Tabs" 
                            component={AllTabs} 
                            options={{
                                headerTintColor: 'green',
                                headerStyle: { backgroundColor: 'green' },
                                //headerTitle:()=>( <Text>Khelahobe</Text>)
                                headerLeft: props => (
                                    <View style={
                                        {
                                            flexDirection:'row',
                                            padding:2,
                                            justifyContent:'space-between',
                                        }
                                    }>
                                        <LogoTitle {...props} />
                                        <Text 
                                            style={
                                                {padding:2,
                                                paddingLeft:5,
                                                alignSelf:"center",
                                                fontSize:22,
                                                color:'white',
                                            }}
                                        >
                                            খেলা হবে!
                                        </Text> 
                                    </View>
                                ),
                                
                            }}
                        />
                        <Stack.Screen 
                            name="ScorecardScreen" 
                            component={ScorecardScreen} 
                        />
                        <Stack.Screen 
                            name="BlogList" 
                            component={BlogList} 
                        />
                        <Stack.Screen 
                            name="BlogPage" 
                            component={BlogPage} 
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        {/*}
                        <Stack.Screen 
                            name="Tab" 
                            component={TabStack} 
                        />
                        <Stack.Screen 
                            name="ScorecardScreen" 
                            component={ScorecardScreen} 
                        />
                        <Stack.Screen 
                            name="SeriesScreen" 
                            component={SeriesScreen} 
                        />
                        <Stack.Screen 
                            name="Livescore" 
                            component={LivescoreScreen} 
                        />
                        <Stack.Screen 
                            name="Ranking" 
                            component={RankingScreen} 
                        />
                        <Stack.Screen 
                            name="Blog" 
                            component={BlogScreen} 
                        />
                        <Stack.Screen 
                            name="News" 
                            component={NewsScreen} 
                /> */}
                    </Fragment>
                )}
            </Stack.Navigator>
        </NavigationContainer>
         
    );
};

const styles = (theme) => ({
    container: {
        flex: 1,
    },
});

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withStyles(App, styles);
