import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Main from '../src/components/Main/Main';
import './App.css';

const env = import.meta.env;

function App() {
  return (
    <SnackbarProvider maxSnack={3} dense={true}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
