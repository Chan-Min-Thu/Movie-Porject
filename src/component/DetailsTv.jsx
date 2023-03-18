import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery} from "../features/api";
import { AiFillHeart } from "react-icons/ai";
// import { FaPlay } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DetailsTv = () => {
  let { id } = useParams();
  const { data: tv, isFetching } = useGetDetailsQuery({
    path_name: "tv",
    id: id,
  });

  useEffect(() => {
    console.log(tv);
  }, [tv]);

  const nav = useNavigate()

  return (
    <div className="bg-background h-screen">
      {isFetching ? (
      <div className="realtive w-full bg-background h-auto">
      <div className="w-[250px] mt-10 h-[500px] bg-transprent"></div>
      </div>
      ) : (
        <div className="realtive w-full bg-background h-auto">
         
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${tv.backdrop_path}`}
            className="opacity-20 w-full h-screen bg-cover"
          />
          <div className="absolute md:top-40 top-[200px] mt-14 left-2 md:p-10 p-3 flex md:justify-evenly justify-end  flex-row w-9/12 h-5/12">
         
            <div className="w-[250px] hidden md:block h-[400px] rounded-md">

              <img
                className="w-[250px] h-[400px] rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              />
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-[460px] flex justify-end ml-5 md:ml-0 md:justify-center text-start flex-col mt-30 md:mt-30">
              <h1 className="text-highlight md:text-4xl text-2xl font-semibold mb-2">
                {tv.original_name}
              </h1>
              <span className="text-whiteColor text-sm mb-5 opacity-95 inline-block">
                ({tv.last_air_date}) • {tv.genres[0].name} •  {tv.number_of_episodes}episodes
              </span>
              <div className="flex mb-5">
                <AiFillHeart className="text-whiteColor text-2xl mr-8" />
                <MdStarRate className="text-highlight text-2xl" />
                <span className="text-whiteColor text-sm ml-2 mr-8">
                  {parseFloat(tv.popularity.toFixed(2))}
                </span>
                {/* <FaPlay className="text-whiteColor text-2xl mr-2" />
                <span className="text-whiteColor">Play trailer</span> */}
              </div>
              <p className="text-whiteColor opacity-80 md:text-md">
                {tv.overview}
              </p>
              <div onClick={()=>nav(-1)} className="fixed top-24 right-10">
              <RxCross2 className="text-whiteColor text-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsTv;
