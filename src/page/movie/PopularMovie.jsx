import React,{ useState } from "react";
import MovieCard from "../../component/MovieCard";
import { useGetDataQuery } from "../../features/api";

const TrendingBox = () => {
  const [page, setPage] = useState(1);

  const {data,isFetching}= useGetDataQuery({
                path_name:"movie",
                category:"popular",
                page:page
  })
  const handleNextMovies = () => {
   if (page === 4) {
                
   return setPage(1);
    } else {
   return setPage((page) => page + 1);
   }
   };
   const handlePreviousMovies =()=>{
     if(page===5){
               return setPage(1)
     }else{
            return setPage((page)=>page-1)    
     }
   }

  return(
  <div className="bg-background w-full h-auto">
    <div className="flex p-5 flex-row w-full justify-between">
    <h1 className="text-sm text-whiteColor text-start opacity-60">20 Movies</h1>
    <div>
    <button type="button" onClick={handlePreviousMovies} 
    disabled={page ===1? true: false}
    className={`text-redColor ${page===1? "opacity-70": ""} text-center bg-transprent hover:bg-gray-900  font-medium rounded-2xl text-sm px-3 py-1 mr-2 mb-2`}>
      Prev</button>
    <span className="text-whiteColor opacity-90 text-sm mr-3">{page}/4</span>
    <button type="button" onClick={handleNextMovies} className="text-redColor text-center bg-transprent hover:bg-gray-900   font-medium rounded-2xl text-sm px-3 py-1 mr-2 mb-2">Next</button>
    </div>
    </div>
    <div className="flex flex-row flex-wrap md:justify-start justify-center w-11/12 md:h-[650px] h-screen overflow-scroll scrollbar-thin m-auto">
    {isFetching?<h1 className="text-whiteColor text-3xl">Loading</h1>:
    data?.results.map(movie => <MovieCard key={movie.id} data={movie}/>)

    }
    </div>
  </div>);
};

export default TrendingBox;
