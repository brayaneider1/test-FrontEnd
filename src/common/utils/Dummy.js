import Tv from '../../assets/image/backgrounds/installationTv.png';
import Electric from '../../assets/image/backgrounds/electric.png'


export const dummy = {
  services: [
    {
      id: "1",
      request: [
        {
          name: "Cambio y montaje de interruptores de luz",
          price: "$50.000",
          img:Electric
        },
        {
            name: "Cambio y montaje de toma corrientes",
            price: "$50.000",
            img:Electric
          },
      ],
      time: "En menos de 90 segundos",
      comment: "El técnico va en camino",
      state: "ACTIVE",
    },
    {
      id: "2",
      request: [
        {
          name: "Instalación de soporte de TV",
          price: "$50.000",
          img:Tv
        },
      ],
      time: "14/ Nov /2020,9 am",
      comment: "Solicitado y agendado",
      state: "ACTIVE",
    },
    {
        id: "3",
        request: [
          {
            name: "Cambio y montaje de interruptores de luz",
            price: "$50.000",
            img:Electric
          },
          {
              name: "Cambio y montaje de toma corrientes",
              price: "$50.000",
              img:Tv
            },
        ],
        time: "En menos de 90 segundos",
        comment: "El técnico va en camino",
        state: "SUCCES",
      },
      {
        id: "4",
        request: [
          {
            name: "Instalación de soporte de TV",
            price: "$50.000",
            img:Tv
          },
        ],
        time: "14/ Nov /2020,9 am",
        comment: "Solicitado y agendado",
        state: "SUCCES",
      },
  ],
};
