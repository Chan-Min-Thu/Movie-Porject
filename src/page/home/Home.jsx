import React from "react";
import { useGetDataQuery} from "../../features/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Trending from "./Trending";
import TopRated from "./TopRated"
import HomeContainer from "./HomeContainer";
import Footer from "../../component/footer/Footer";

const Home = () => {
  const { data: movieData, isFetching } = useGetDataQuery({
    path_name: "movie",
    category:"popular",
    page: 1,
  });
  
  return (
    <div className="w-full h-auto bg-background">
    <div className="w-full h-auto bg-background">
      <Carousel showArrows={true} showThumbs={false}>
        {isFetching ? (
          <h1>loading...</h1>
        ) : (
          movieData.results.slice(0, 9).map((movie, index) =>
          <HomeContainer key={index} movie={movie}/>
        ))}
      </Carousel>
    </div>
    <Trending/>
    <TopRated/>
    <Footer/>
    </div>
  );
};

export default Home;
