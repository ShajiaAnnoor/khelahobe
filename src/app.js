import React, { 
	Component, 
	Fragment 
} from 'react';
import { 
	Alert, 
	BackHandler, 
	Platform 
} from 'react-native';
import BackgroundColor from 'react-native-background-color';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import * as eva from '@eva-design/eva';
import { 
	ApplicationProvider, 
	IconRegistry 
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import ErrorHelper from './helpers/ErrorHelper';

export default class Chatwoot extends Component {
	componentDidMount() {
		ErrorHelper.init();
	// To hide splash screen
		SplashScreen.hide();
		if (Platform.OS === 'android') {
			BackgroundColor.setColor('#FFFFFF');
		}

		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
		}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	handleBackButtonClick = () => {
		Alert.alert(
			i18n.t('EXIT.TITLE'),
			i18n.t('EXIT.SUBTITLE'),
			[
			{
				onPress: () => {},
				style: 'cancel',
			},
			{ text: i18n.t('EXIT.OK'), onPress: () => BackHandler.exitApp() },
			],
			{ cancelable: false },
		);
		return true;
	};

	render() {
		return (
			<Fragment>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={theme}>
				<PersistGate loading={null} persistor={persistor}>
					<NoNetworkBar />
					<Router />
				</PersistGate>
			</ApplicationProvider>
			</Fragment>
		);
	}
}
