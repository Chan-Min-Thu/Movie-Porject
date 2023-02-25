import React from 'react'
import {Link, NavLink,Outlet} from 'react-router-dom'

const ActiveLink = ({isActive})=>{
  return{
  color:isActive?"red":""
}}
const Movie = () => {
  return (
    <div className='bg-background md:h-auto h-screen'>
      <ul className='flex flex-row text-whiteColor border-spacing-1 w-full justify-around border-2 border-x-0 border-t-0 border-b-transprent '>
       <NavLink style={ActiveLink} to='/movie/popular'><li>Popular</li></NavLink>
       <NavLink style={ActiveLink} to='/movie/top_rated'><li>Top Rated</li></NavLink>
       <NavLink style={ActiveLink} to='/movie/upcoming'><li>Upcoming</li></NavLink>
       <NavLink style={ActiveLink} to='/movie/latest'><li>Now Playing</li></NavLink>
      </ul>
      
      <Outlet/>
    </div>
  )
}

export default Movie