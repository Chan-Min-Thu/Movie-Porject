import React,{ useState } from "react";
import TvCard from "../../component/TvCard";
import { useGetDataQuery } from "../../features/api";

const OnTheAirTv = () => {
  const [page, setPage] = useState(1);

  const {data,isFetching}= useGetDataQuery({
                path_name:"tv",
                category:"on_the_air",
                page:page
  })
  const handleNextTv = () => {
   if (page === 4) {
                
   return setPage(1);
    } else {
   return setPage((page) => page + 1);
   }
   };
   const handlePreviousTv =()=>{
     if(page===5){
               return setPage(1)
     }else{
            return setPage((page)=>page-1)    
     }
   }

  return(
  <div className="bg-background w-full h-auto">
    <div className="flex p-5 flex-row w-full justify-between">
    <h1 className="text-sm text-whiteColor text-start opacity-60">{20*page} Tv-Series</h1>
    <div>
    <button type="button" onClick={handlePreviousTv} 
    disabled={page ===1? true: false}
    className={`text-redColor ${page===1? "opacity-70": ""} text-center bg-transprent hover:bg-gray-900  font-medium rounded-2xl text-sm px-3 py-1 mr-2 mb-2`}>
      Prev</button>
    <span className="text-whiteColor opacity-90 text-sm mr-3">{page}/4</span>
    <button type="button" onClick={handleNextTv} className="text-redColor text-center bg-transprent hover:bg-gray-900   font-medium rounded-2xl text-sm px-3 py-1 mr-2 mb-2">Next</button>
    </div>
    </div>
    <div className="flex flex-row flex-wrap md:justify-start justify-center w-11/12 md:h-auto h-screen overflow-scroll scrollbar-thin m-auto">
    {isFetching?<h1 className="text-whiteColor h-screen m-auto text-3xl">Loading</h1>:
    data?.results.map(movie => <TvCard key={movie.id} data={movie}/>)

    }
    </div>
  </div>);
};

export default OnTheAirTv;
