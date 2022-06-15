import React from "react";
import "./App.css";
import { Layout, Header, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';
import { FlagProvider } from '@unleash/proxy-client-react';

import NavigationMenu from "./Components/NavigationMenu";
 
const config = {
  url: 'https://app.unleash-hosted.com/demo/api/proxy',
  clientKey: 'proxy-123',
  refreshInterval: 5,
  appName: 'techtalk',
  environment: 'dev',
};


const App = () => {
  
  return (
    <div className="demo-big-content">
      <FlagProvider config={config}>
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">PTTM - Techtalk</Link>} scroll>
          <NavigationMenu />
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">PTTM - Techtalk</Link>}>
          <NavigationMenu />
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
      </FlagProvider>
    </div>
  );
}

export default App;
