import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Userdetails } from './formSamples/Userdetails'
// import { Regfrms } from './formSamples/Regfrms'
// import './reg.css'
// import { Cart } from './formSamples/Cart'
// import App from './App.jsx'
// import './index.css'
import './qr.css'
import { Qrcode } from './Qrcode'
// import { Usercard } from './Usercard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Usercard/> */}
    <Qrcode/>
    {/* <Cart/> */}
    {/* <Userdetails/> */}
    {/* <Regfrms/> */}
  </React.StrictMode>
)
