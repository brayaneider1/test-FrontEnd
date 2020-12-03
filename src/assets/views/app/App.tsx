import React, { useEffect } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonApp,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonToolbar,
} from "@ionic/react";

import StepsComponent from "../../components/Steps/index";
import Technical from "../../components/technical/index";
import Service from "../../components/Service/index";
import Requests from "../../components/Request/index";
import Slider from "../../components/Slider/index";
import { service } from "../../../services/ServiceRequest/ServiceActions";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { getService,getCouncils } = service;

  const { services,councils } = useSelector((state: any) => state.service);

  useEffect(() => {
    dispatch(getService());
    console.log(services);
  }, [dispatch, getService]);

  useEffect(() => {
    dispatch(getCouncils());
  }, [dispatch, getCouncils]);

  return (
    <IonApp>
      <IonToolbar className="shadow-md">
        <IonButtons slot="start">
          <IonBackButton className="text-yellow-500" defaultHref="/" />
        </IonButtons>
        <IonTitle className="text-black">Detalle del Servicio</IonTitle>
      </IonToolbar>
      <IonContent>
        {services && (
          <>
            <StepsComponent />
            <Technical technical={services[0].technical} />
            <Service services={services} />
            <Requests request={services[0].requestAditional} />
            <Slider councils={councils} />
          </>
        )}
      </IonContent>
    </IonApp>
  );
}

export default App;
