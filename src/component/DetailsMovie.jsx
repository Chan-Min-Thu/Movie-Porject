import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery, useGetVideoDataQuery } from "../features/api";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DetailsMovie = () => {
  let { id } = useParams();
  const { data: movie, isFetching } = useGetDetailsQuery({
    path_name: "movie",
    id: id,
  });
  const  { data:videoPara,isLoading} = useGetVideoDataQuery({
    path_name:"movie",
    id:id
  })

  const [video, setVideo]=useState('')
  const [play,setPlay] = useState(false)
  useEffect(()=>{
    if(isLoading){
      return
    }else{
      console.log(videoPara)
      const videokey = videoPara.results.find(k=>k.name === "Official Trailer")
      setVideo(videokey)
    }
  },[videoPara])
  console.log("videokey",video)

  useEffect(() => {
    console.log(movie);
  }, [movie]);
  const nav = useNavigate()
  return (
    <div className="bg-background h-screen">
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="realtive w-full bg-background h-auto">
         
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            className="opacity-20 w-full h-screen bg-cover"
          />
          <div className="absolute md:top-40 top-[200px] left-2 md:p-10 p-3 flex md:justify-evenly justify-end  flex-row w-9/12 h-5/12">
         
            <div className="w-[250px] hidden md:block h-[400px] rounded-md">

              <img
                className="w-[250px] h-[400px] rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-[430px] flex justify-end ml-10 md:ml-0 md:justify-center text-start flex-col mt-30 md:mt-30">
              <h1 className="text-highlight md:text-4xl text-2xl font-semibold mb-2">
                {movie.original_title}
              </h1>
              <span className="text-whiteColor text-sm mb-5 opacity-95 inline-block">
                ({movie.release_date}) • {movie.genres[0].name} • {movie.runtime}min
              </span>
              <div className="flex mb-5">
                <AiFillHeart className="text-whiteColor text-2xl mr-5" />
                <MdStarRate className="text-highlight text-2xl" />
                <span className="text-whiteColor text-sm ml-2 mr-5">
                  {parseFloat(movie.popularity.toFixed(2))}
                </span>
                <FaPlay className="text-whiteColor text-2xl mr-2" onClick={()=>setPlay(true)} />
                <span className="text-whiteColor">Play trailer</span>
              </div>
              <div className={`${play? "md:w-[650px] w-full md:h-full h-[300px]":"w-0 h-0"} z-40 absolute md:top-0 bottom-20`}>
            <RxCross2
             onClick={()=>setPlay(false)}
             className={`${play?"inline": 'hidden'} text-whiteColor absolute top-0`}/>
            <iframe 
            className={`${play?"md:w-[650px] w-full md:h-[400px] h-[300px]":"w-0 h-0"}`}
            id="yt-iFrame"
            loading="lazy"
            allow="autoplay"
            width= "100%"
            height="100%"
            allowFullScreen
            src={`https://www.youtube.com/embed/${video?.key}`}>

            </iframe>
            </div>
              <p className="text-whiteColor opacity-80 md:text-md">
                {movie.overview}
              </p>
              <div onClick={()=>nav(-1)} className="fixed top-24 right-10">
              <RxCross2 className="text-whiteColor text-2xl" />
              </div>
              <div>
                <img src=""/>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default DetailsMovie;
