
import { IMG_CDN_URL } from "../config";
export const MenuCard = ({ name, imageId, category, price }) => {
  return (
    <>
      <div className="menuCard">
        <img alt="image" src={IMG_CDN_URL + imageId}></img>
        <p>{name}</p>
        <p>{category}</p>
        <p>Rs {price / 100}</p>
      </div>
    </>
  );

}