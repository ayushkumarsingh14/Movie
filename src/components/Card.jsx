import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Card({data, trending, index, media_type}) {
    const imageURL = useSelector(state => state.movieData.imageURL)
    
    const mediaType = data.media_type ?? media_type;
        
  return (
    <Link to={"/"+mediaType+"/"+data.id} className='max-w-[230px] min-w-[230px] h-80 overflow-hidden rounded relative hover:scale-105 transition-all'>

        {
            data?.poster_path ? (

                <img src={imageURL+data?.poster_path}/>

            ) : (
                <div className='bg-neutral-800 text-3xl h-[80%] w-full flex items-center justify-center'>
                    No image found
                </div>
            )
        }

        <div className='absolute top-4'>
            
            {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/50 overflow-hidden'>
                    # {index} Trending
                    </div>                
                )
            }
         </div>

         <div className='absolute bottom-0 h-16 bg-black/60 w-full backdrop-blur-3xl p-2'>
                <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
                    {data?.title || data?.name}
                </h2>
                <div className='flex justify-between text-sm text-neutral-400 items-center'>
                    <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
                    <p className='bg-black px-1 rounded-full text-xs text-white'>Rating :{Number(data.vote_average).toFixed(1)}</p>
                </div>

         </div>

       
    </Link>
  )
}

export default Card