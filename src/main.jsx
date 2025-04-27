import { StrictMode, useContext, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd';
import {  DARK_ANT_THEME, LIGHT_ANT_THEME } from './Core/Config';
import DarkModeContextComponent, { contextDarkMode } from './page/Context/DarkMode'
import Home from './page/Public/Home/Home';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  const {dark} = useContext(contextDarkMode)
  useEffect(()=>{
    Aos.init({
      duration:1500,
      once: true, 
    })
  },[])
  return (
    <ConfigProvider theme={dark  ? LIGHT_ANT_THEME : DARK_ANT_THEME}>
      <Home />
    </ConfigProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DarkModeContextComponent>
        <App />         
      </DarkModeContextComponent>
  </StrictMode>
);