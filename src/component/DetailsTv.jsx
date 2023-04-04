import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../features/api";
import { AiFillHeart } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DetailsTv = () => {
  let { id } = useParams();
  const { data: tv, isFetching } = useGetDetailsQuery({
    path_name: "tv",
    id: id,
  });

  useEffect(() => {
    console.log(tv);
  }, [tv]);

  const nav = useNavigate();

  return (
    <div className="m-auto bg-background h-auto">
      {isFetching ? (
        <div className="realtive w-full bg-background h-auto"></div>
      ) : (
        <div className="realtive w-full bg-background h-auto">
          <img
            src={`https://image.tmdb.org/t/p/w500/${tv.backdrop_path}`}
            className="opacity-20 w-full h-screen bg-cover"
          />
          <div className="absolute md:top-40 top-[100px] md:mt-0 mt-14 left-2 md:p-10 p-3 flex md:justify-evenly justify-end  flex-row w-9/12">
            <div className="w-[250px] hidden md:block h-[400px] rounded-md">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="w-[250px] h-[400px] rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              />
            </div>
            <div className="md:w-[500px] w-full md:h-[350px] flex justify-end ml-4 md:ml-0 md:justify-center text-start flex-col md:mt-14">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-highlight md:text-4xl text-2xl font-semibold mb-2"
              >
                {tv.original_name}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.9 }}
                className="text-whiteColor text-sm mb-5 opacity-95 inline-block"
              >
                ({tv.last_air_date}) • {tv.genres[0].name} •{" "}
                {tv.number_of_episodes}episodes
              </motion.span>
              <div className="flex mb-5">
                <AiFillHeart className="text-whiteColor text-2xl mr-8" />
                <MdStarRate className="text-highlight text-2xl" />
                <span className="text-whiteColor text-sm ml-2 mr-8">
                  {parseFloat(tv.popularity.toFixed(2))}
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-whiteColor opacity-80 md:text-md md:h-auto md:overflow-auto overflow-scroll h-[300px] "
              >
                {tv.overview}
              </motion.p>
              <div
                onClick={() => nav(-1)}
                className="absolute top-[-40px] right-[-50px]"
              >
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
