import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
)
