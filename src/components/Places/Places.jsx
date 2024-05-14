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
    title: "Boat Tour",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
  {
    img: Img2,
    title: "Taj mahal",
    location: "India",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
  {
    img: Img4,
    title: "Boat Tour",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
  {
    img: Img5,
    title: "Boat Tour",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
  {
    img: Img6,
    title: "Boat Tour",
    location: "USA",
    description: "lorem ipsusa asfasf",
    price: 100,
    typ: "cultural relax",
  },
];
const Places = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
