import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import BootSplash from "react-native-bootsplash";
import { store, persistor } from "./redux/store";

import MyApp from "./src/router";

function App(): React.JSX.Element {

	useEffect(() => {
    	const init = async () => {
      		// …do multiple sync or async tasks
    };

    init().finally(async () => {
    	await BootSplash.hide({ fade: true });
    	console.log("BootSplash has been hidden successfully");
    });
  	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MyApp />
			</PersistGate>
		</Provider>
	);
}

export default App;
