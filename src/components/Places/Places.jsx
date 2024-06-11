import React from "react";
import PlacesCard from "./PlacesCard.jsx";

import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "Fewatal",
    location: "Nepal",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Maldives",
    location: "Maldives",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Vacation Relax",
  },
  {
    img: Img4,
    title: "Opera House",
    location: "Australia",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Chill",
  },
  {
    img: Img5,
    title: "Bay Area",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Relax Chill",
  },
  {
    img: Img6,
    title: "San Francisco",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    type: "Great View",
  },
];
const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard

              handleOrderPopup=
              {handleOrderPopup}

              key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
