import { IMG_CDN_URL } from "../config";
export const CategoryCard = ({ name, imageId }) => {
  return (<>
    <div style={{ transform: `translateX(-${status}%)` }} className=" w-[150px] shrink-0" duration-500>
      <img alt="image" src={IMG_CDN_URL + imageId}></img>
      <p>{name}</p>
    </div >
  </>);

}