import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonSlide, IonSlides } from "@ionic/react";

interface Props {
  councils: any;
}

const Slider = ({ councils }: Props) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <IonSlides
      className="m-5 p-2 h-48 flex-col  shadow-md flex rounded-xl flex justify-center items-center bg-yellow-1000 bg-opacity-25"
      pager={true}
      options={slideOpts}
    >
      {councils.map((item: any) => (
        <IonSlide className="flex-col px-6 flex justify-evenly">
          <span className="text-sm text-black font-bold text-center">
            Ten en cuenta estos 5 tips para que tengas un buen servicio
          </span>
          <div className="flex-row px-2 flex items-center slider-custom">
            <div className=" h-10 flex p-2 items-center w-10 w-auto  mr-3 bg-white border rounded-md ">
              <FontAwesomeIcon
                icon={faClock}
                className=" flex text-xl  text-yellow-1000"
              />
            </div>
            <span className="text-sm flex-grow text-black flex-grow">
              {item.council}
            </span>
          </div>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slider;
