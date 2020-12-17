import React, { useEffect } from "react";
import { IonCardContent } from "@ionic/react";
import Message from "../../../../image/Icons/Mensaje.svg";

interface Props {
  title: string;
  data: string;
  icon: any;
  message?: boolean;
}

const CardItem = ({ title, icon, data, message }: Props) => {
  return (
    <IonCardContent>
      <div className=" flex flex-row flex-1 items-center justify-between  ">
        <div className=" flex items-center">
          <img
            className="flex text-xl h-4 mr-3 relative float-left object-left text-yellow-1000"
            src={icon}
          />
          <div className="flex flex-col  justify-between">
            <span className="text-xs text-black font-bold text-yellow-1000">
              {title}
            </span>
            <span className="text-sm text-gray-600 font-medium">{data}</span>
          </div>
        </div>
        {message === true ? (
          <div className="technical-icon">
            <img className="flex h-6 " src={Message} />
          </div>
        ) : null}
      </div>
    </IonCardContent>
  );
};

export default CardItem;
