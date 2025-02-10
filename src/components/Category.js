import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CategoryCard } from "./CategoryCard";
import { useState } from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router";

export const Category = ({ category }) => {
  const [status, setSatus] = useState(0);

  const moveLeft = () => {
    if (status > 0)
      setSatus(status - 300);
  }
  const moveRight = () => {
    if (status < 1200)
      setSatus(status + 300);
  }
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px]">What's on your mind?</div>
          <div className="flex">
            <span onClick={moveLeft} className="flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"><FaArrowLeft /></span>
            <span onClick={moveRight} className="flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"><FaArrowRight /></span>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {
            category.map(category => {
              console.error(status);
              return <>
                <Link to={category.action.link}>
                  <div style={{ transform: `translateX(-${status}%)` }} className=" w-[150px] shrink-0" duration-500>
                    <img alt="image" src={IMG_CDN_URL + category?.imageId}></img>
                    <p>{category.name}</p>
                  </div >
                </Link>
              </>
            })
          }
        </div>
      </div>
    </>
  );
}