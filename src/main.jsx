import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {store} from './components/store/index.js'
import {Provider as ReduxProvider} from  'react-redux'



createRoot(document.getElementById('root')).render(
    <ReduxProvider  store={store}>
        <App />
    </ReduxProvider>


)
