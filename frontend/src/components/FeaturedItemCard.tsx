import React, { useState } from "react";
import { Button } from "./ui/button";
import { Heart, Plus } from "lucide-react";

type Props = {
  image: string;
  name: string;
  description: string;
  price: number;
};
const FeaturedItemCard: React.FC<Props> = ({
  name,
  description,
  image,
  price,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-80 w-60 bg-gray-200 rounded-xl p-[2px] drop-shadow-xl mt-12 md:mt-0">
      <div className="h-[55%] w-full relative">
        <svg
          className="absolute bottom-0 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 70 0 100 100 Z"></path>
        </svg>
        <img
          src={image}
          alt={name}
          className="image-shadow -translate-y-[90px] mx-auto"
        />
      </div>
      <div className="flex-1 w-full bg-white rounded-b-xl px-3">
        <h3 className="text-xl font-semibold inline-block">{name}</h3>
        <p className="text-sm text-gray-700 font-medium">{description}</p>
        <h3 className="text-xl font-bold text-center">${price}</h3>

        <div className="flex justify-between mt-4">
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
            size={"sm"}
          >
            <Plus />
            Add To Cart
          </Button>
          <Button
            className=""
            size={"icon"}
            variant={"ghost"}
            onClick={toggleFavourite}
          >
            <Heart
              className={`${
                isFavourite ? "fill-pink-500 stroke-pink-500" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FeaturedItemCard;
