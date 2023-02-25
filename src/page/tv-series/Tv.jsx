import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

const activeLink = ({isActive})=>{
  return{
  color:isActive?"red":""
}}
const Tv = () => {
  return (
    <div className='bg-background h-auto'>
      <ul className='flex flex-row text-whiteColor border-spacing-1 w-full justify-around border-2 border-x-0 border-t-0 border-b-transprent '>
       <NavLink style={activeLink} to='/tv/popular'><li>Popular</li></NavLink>
       <NavLink style={activeLink} to='/tv/top_rated'><li>Top Rated</li></NavLink>
       <NavLink style={activeLink} to='/tv/on_the_air'><li>On The Air</li></NavLink>
       <NavLink style={activeLink} to='/tv/airing_today'><li>Airing Today</li></NavLink>
      </ul>
      
      <Outlet/>
    </div>
  )
}

export default Tv