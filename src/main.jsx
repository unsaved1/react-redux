import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

import App from './App.jsx'

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
)





