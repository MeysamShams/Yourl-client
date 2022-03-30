import { App } from 'App'
import { AuthContextProvider } from 'features/context/AuthContext';
import {render} from 'react-dom'
import './index.css'

render(
    <AuthContextProvider>
        <App/>
    </AuthContextProvider>,
    document.getElementById("root"));