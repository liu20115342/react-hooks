import React from 'react';
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {
        renderRoutes(routes)
      }
    </HashRouter>
  );
}

export default App;
