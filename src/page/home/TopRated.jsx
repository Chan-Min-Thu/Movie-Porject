import React from "react";
// import TvCard from "../../component/TvCard";
import { useGetDataQuery } from "../../features/api";
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom";
import {BsYoutube} from "react-icons/bs"
import {motion} from 'framer-motion'

const TopRated = () => {
  
  const { data: tvData, isFetching } = useGetDataQuery({
    path_name: "tv",
    category:"top_rated",
    page: 1,
  });
  const nav = useNavigate()
  const LeftSlider =()=>{
    const sliderToRight = document.getElementById('slidertv') 
    sliderToRight.scrollLeft = sliderToRight.scrollLeft+500
  }
  const RightSlider =()=>{
    const sliderToLeft = document.getElementById('slidertv') 
    sliderToLeft.scrollLeft = sliderToLeft.scrollLeft-500
  }
  return (
    <div className="w-full flex relative flex-col p-4">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold text-whiteColor">
          Top Rated Tv-series
        </h1>
        <Link to='/tv/top_rated'>
        <button
          type="button"
          className="py-1.5 px-5 mr-2 mb-2 text-sm font-medium outline-none text-whiteColor focus:outline-none bg-secondary rounded-2xl border border-whiteColor hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          View more
        </button>
        </Link>
      </div>

      <div
        id="slidertv"
        className="flex flex-grow-0 h-[400px] w-full scrollbar overflow-x-scroll scroll-smooth"
      >   
        <div  onClick={RightSlider} className="absolute cursor-pointer z-20 top-36 left-6 hover:bg-transprent rounded-full p-4">
        <MdArrowBackIos className="text-whiteColor text-3xl" />
        </div>
        {isFetching ? (
          <h1>loading...</h1>
        ) : (
          tvData.results?.map((tv) => (
            <div key={tv.id} onClick={()=>nav(`/tv/${tv.id}`)} className='w-[200px] relative h-[300px] p-10 rounded'>
             <motion.img 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{delay:0.4,duration:0.5}}
            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} 
            className="max-w-[147px] h-full rounded hover:opacity-30"/>
             <motion.div 
          initial={{opacity:0}}
          whileHover={{opacity:1}}
          transition={{delay:0.2,duration:0.2}}
          className="text-2xl absolute opacity-0 rounded hover:opacity-100 w-[147px] h-[221px] top-[40px] p-3 text-redColor bg-transprent">
            <BsYoutube className="text-center m-auto mt-28" />
            </motion.div>
            <motion.span 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.4,duration:0.8}} className='text-whiteColor'>{tv.name}</motion.span>
       </div> 
          ))
        )}
        <div onClick={LeftSlider} className="absolute cursor-pointer z-20 top-36 right-6  hover:bg-transprent rounded-full p-4">
        <MdOutlineArrowForwardIos  className="text-whiteColor text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default TopRated;