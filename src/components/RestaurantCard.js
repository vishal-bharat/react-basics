import { Link } from "react-router";
import { IMG_CDN_URL } from "../config";
import { StarSvg } from "../utils/StarSvg";

export const RestaurantCard = ({ id, name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla, areaName }) => (

  <>
    <Link to={"/restaurant/" + id}>
      <div className="w-[273px] shrink-0 grow">
        <div className="group h-[182px] overflow-hidden rounded-[15px] relative">
          <img className="group-hover:scale-120 duration-150 object-cover w-full h-full" alt="image" src={IMG_CDN_URL + cloudinaryImageId}></img>
          <div className="image-overlay h-full w-full top-0 absolute flex items-end p-[8] text-[30] font-bold text-[white] tracking-tighter">{costForTwo}</div>
        </div>
        <div></div>
        <p className="mt-3 text-[18px] font-bold"> {name}</p>
        <div className="mt-1 text-[16px] flex items-center gap-1"><StarSvg className="inline" /> {avgRating} <div className="font-bold">{sla.slaString}</div></div>
        <p className="mt-1 text-[16px]">{cuisines.join(", ")}</p>
        <p className="mt-1 text-[16px]">{areaName}</p>
      </div>
    </Link>
  </>

);

