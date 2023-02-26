import React, { useState, useEffect } from "react";
import { BiLock, BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { NavLink, Link, Form } from "react-router-dom";
import { useGetSearchQuery } from "../../features/api";
import { useNavigate } from "react-router-dom";

const linkStyles = ({ isActive }) => {
  return {
    borderBottom: isActive ? "2px solid red" : "",
  };
};
const Header = () => {
  const nav = useNavigate()
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSerachInput] = useState("");
  const [movie, setMovie] = useState([]);
  let string;
  const handleChange = (e) => {
    const { value } = e.target;
    setSerachInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = document.getElementById('search')
    if(e.target.value ===""){
      search.style.display="none"
    }
    search.style.display="block"
    console.log("search input", searchInput);
  };
  const { data, isFetching } = useGetSearchQuery({
    searchValue: searchInput,
  });
  // console.log(data);

  useEffect(() => {
    if (isFetching) {
      return;
    } else {
      setMovie(data.results);
    }
  }, [data]);
  // console.log("movie", movie);

  const handleSearchResults =(media_type,id)=>{
    setSearch(!search)
    nav(`${media_type}/${id}`)
    const searchid = document.getElementById('search')
    searchid.style.display="none"

  }
  return (
    <div>
      <div className="w-full bg-background md:px-5 z-50 sticky top-0">
        <nav className="flex relative justify-between flex-row">
          <div className="m-4">
            <Link to="/">
              <h1 className="text-2xl font-bold text-redColor">Mm-movie</h1>
            </Link>
          </div>
          <form
          onSubmit={(e) => handleSubmit(e)}
            className={`${
              search ? "hidden" : "block absolute z-50"
            } md:hidden absolute top-16 w-full flex`}
          >
            <input
              className="outline-none px-2 py-3 w-10/12 text-sm text-whiteColor bg-secondary rounded-b-sm"
              type="text"
              defaultValue=""
              value={string}
              onChange={handleChange}
              placeholder="Search Movies,Tvs..."
            />
            <button
                    type="submit"
                    disabled={searchInput ? false : true}
                    className="outline-none bg-secondary w-2/12 text-whiteColor text-sm p-2"
            >Search</button>
          </form>
          <div className="md:hidden flex flex-row w-16 justify-between m-4">
            <div>
              <BiSearchAlt2
                onClick={() => setSearch(!search)}
                className="text-whiteColor select-none cursor-pointer m-1 text-xl"
              />
            </div>
            <div>
              {open ? (
                <RiCloseLine
                  onClick={() => setOpen(!open)}
                  className="text-whiteColor text-2xl"
                />
              ) : (
                <GiHamburgerMenu
                  onClick={() => setOpen(!open)}
                  className="text-whiteColor text-xl"
                />
              )}
            </div>
          </div>
          <div
            className={`md:block md:relative md:bg-background md:top-0 right-0 md:h-auto  ${
              open
                ? "block absolute z-50 top-16 h-auto shadow-secondary bg-transprent"
                : "hidden"
            }`}
          >
            <ul className="text-whiteColor flex flex-col md:flex-row  justify-between text-normal">
              <li className="m-4 text-center select-none cursor-pointer font-medium">
                <NavLink to="/" onClick={()=>setOpen(false)} style={linkStyles}>
                  Home
                </NavLink>
              </li>
              <li className="m-4 text-center select-none cursor-pointer font-medium">
                <NavLink to="/movie" onClick={()=>setOpen(false)} style={linkStyles}>
                  Movie
                </NavLink>
              </li>
              <li className="m-4 text-center select-none cursor-pointer font-medium">
                <NavLink to="/tv" onClick={()=>setOpen(false)} style={linkStyles}>
                  Tv Series
                </NavLink>
              </li>
              <li className="m-4 md:inline-block hidden">
                <form onSubmit={(e) => handleSubmit(e)} className="w-full">
                  <input
                    type="text"
                    autoComplete="off"
                    value={string}
                    onChange={handleChange}
                    id="simple-search"
                    className="outline-none bg-secondary text-gray-900 rounded-l-2xl text-sm p-1.5 pl-2.5"
                    placeholder="Search Movies,Tvs..."
                    required
                  />
                  <button
                    type="submit"
                    disabled={searchInput ? false : true}
                    className="outline-none bg-secondary rounded-r-2xl text-sm p-1.5 pl-2.5"
                  >
                    search
                  </button>
                </form>
              </li>
              {/* <li className="m-4 text-center">
              <div>
                <IoMdContact className="text-3xl md:block select-none cursor-pointer hidden py-1" />
                <NavLink
                  to="/profile"
                  className="block select-none cursor-pointer md:hidden"
                  style={linkStyles}
                >
                  Profile
                </NavLink>
              </div>
            </li> */}
            </ul>
          </div>
        </nav>
      </div>
      <div id="search" className={`${searchInput === ""? "hidden":"block"} bg-secondary w-80 md:w-96 absolute z-50 top-24 md:top-16 right-0 md:right-5 max-h-80 overflow-y-scroll scroll-m-4 scrollbar-track-transprent scrollbar-thumb-secondary scrollbar-thin rounded-sm p-3`}>
        {movie.map((m) => (
          <div onClick={()=>handleSearchResults(m.media_type,m.id)} className="flex flex-row border-b-2 border-b-transprent justify-between">
          <h1 className="text-whiteColor">{m.title}{m.name}</h1>
          <div className="w-[50px] h-[70px] p-2">
          <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}/>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
