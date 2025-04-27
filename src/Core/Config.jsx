import { theme } from 'antd';

const LIGHT_ANT_THEME = {
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: "rgba(219, 68, 68, 1)", 
      colorText: "rgba(0, 0, 0, 1)", 
      colorBorder: "rgba(0, 0, 0, 0.3)", 
      colorBgBase: "#FFFFFF", 
    },
    components: {
      Layout: {
        colorBgContainer: "#FFFFFF", 
      },
      Menu: {
        colorItemText: "rgba(0, 0, 0, 1)", 
        colorItemTextSelected: "rgba(219, 68, 68, 1)", 
        colorItemTextHover: "rgba(219, 68, 68, 1)", 
        borderRadius: 10,
      },
      Header: {
        colorBgHeader: "#FFFFFF !important", 
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)", 
        boxShadow: "none",
        borderRadius: 10,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      },
    },
  };
  
const DARK_ANT_THEME = {

    token: {
      colorPrimary: "rgba(219, 68, 68, 1)",
      colorText: "rgba(255, 255, 255, 0.87)",
      colorBorder: "rgba(255, 255, 255, 0.2)",
      colorBgBase: "#1E1E1E ",
      colorBgHeader: "#1E1E1E",
      
    },
    components: {
      Layout: {
        colorBgContainer: "#121212", 
      },
      Menu: {
        colorItemText: "rgba(255, 255, 255, 0.87)", 
        colorItemTextSelected: "rgba(219, 68, 68, 1)", 
        colorItemTextHover: "rgba(219, 68, 68, 1)", 
        borderRadius: 10,
      },
      Header: {
        colorBgHeader: "#1E1E1E ", 
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "none",
        borderRadius: 10,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      },
    },
  };

export { LIGHT_ANT_THEME, DARK_ANT_THEME  };
