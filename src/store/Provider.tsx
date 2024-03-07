"use client"
import React from "react";
import {store,Persistor} from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
const ReduxProvider = ({ children }: any) => {
  return <Provider store={store}>
    
    <PersistGate persistor={Persistor} loading={null}>
    {children}
    </PersistGate>
    </Provider>;
};

export default ReduxProvider;
