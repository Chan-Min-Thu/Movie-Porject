import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//https://api.themoviedb.org/3/movie/popular?api_key=b7b94e5975cb225e51152419dd2bb9c9&language=en-US&page=1
export const apiStore = createApi({
    reducerPath:"apiStore",
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3/'}),
    tagType:['movie'],
    endpoints:(builder)=>({
       getData:builder.query({
                query:(args)=>{
                    const {path_name,category,page}=args;
                    return {
                        url:`${path_name}/${category}?api_key=b7b94e5975cb225e51152419dd2bb9c9&language=en-US&page=${page}`   
                    }
                }
       }),
       //
       getVideoData:builder.query({
            query:(args)=>{
                const {path_name,id}=args;
                return{
                    url:`${path_name}/${id}/videos?api_key=b7b94e5975cb225e51152419dd2bb9c9&language=en-US`
                }
            }
       }),
       //https://api.themoviedb.org/3/movie/842544?api_key=b7b94e5975cb225e51152419dd2bb9c9&language=en-US
       getDetails:builder.query({
        query:(args)=>{
            const {path_name,id}=args;
            return{
                url:`${path_name}/${id}?api_key=b7b94e5975cb225e51152419dd2bb9c9&language=en-US`
            }
        }
       }),
       getSearch:builder.query({
        query:(args)=>{
            const {searchValue} =args;
            return{
               url:`search/multi?api_key=b7b94e5975cb225e51152419dd2bb9c9&query=${searchValue}`
            }
        }
       })
    })
})
export const {useGetDataQuery,useGetVideoDataQuery,useGetDetailsQuery,useGetSearchQuery} = apiStore