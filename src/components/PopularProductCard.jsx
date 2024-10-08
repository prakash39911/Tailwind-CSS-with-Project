import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start flex-col gap-2.5">
        <div className="flex items-center justify-start gap-3">
          <img src={star} alt="rating" width={21} height={21} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <h3 className="mt-1 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-1 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
