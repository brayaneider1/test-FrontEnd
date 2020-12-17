import React from "react";
//@ts_ignore
import { Route, Router, Switch } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import MyService from "./Myservices/MyServices";
import Test from "./Test/Test";
import { IonApp, IonPage } from "@ionic/react";

const Private = () => {
  return (
    <IonApp>
      <Switch>
        <Route exact path="/service">
          <MyService />
        </Route>
        <Route exact path="/">
          <Test />
        </Route>
      </Switch>
    </IonApp>
  );
};

export default Private;
