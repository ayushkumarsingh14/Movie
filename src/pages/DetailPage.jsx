import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import HorizontalScroll from '../components/HorizontalScroll'
import useFetch from '../hooks/useFetch';
import VideoPlay from '../components/VideoPlay';

function DetailPage() {

  const params = useParams();
  const {data} = useFetchDetails(`${params?.explore}/${params?.id}`);
  const { data : creditData} = useFetchDetails(`${params?.explore}/${params?.id}/credits`)
  const { data : similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data : recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("")
  
  const imageURL = useSelector(state => state.movieData.imageURL)

  const duration = (data?.runtime/60)?.toFixed(1)?.split(".")
  const writer = creditData?.crew[1]?.name

  const handlePlayVideo = (data) => {
    setPlayVideoId(data.id)
    setPlayVideo(true)
  }

  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:flex'>
        <div className='w-full h-full'>
          <img src={imageURL+data?.backdrop_path} alt=""
            className='h-full w-full object-cover'
           />
        </div>
        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900/90 to-transparent '></div>
      </div>
      <div className='container mx-auto px-3 py-16 lg:py-0 flex lg:gap-10 flex-col lg:flex-row gap-5'>
        <div className='lg:-mt-28 relative mx-auto lg:mx-0 w-fit min-w-60'>
          <img 
            src={imageURL+data?.poster_path} alt="" 
            className='h-80 w-60 object-cover rounded'
          />
          <button onClick={() => handlePlayVideo(data)} className='w-full mt-3 py-2 px-4 text-center bg-white rounded font-bold text-black text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'>Play Now</button>
        </div>
        <div>
          <h2 className='text-2xl lg:text-4xl text-white font-bold'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400'>{data?.tagline}</p>
          <Divider/>
          <div className='flex items-center gap-3'>
            <p> Rating : {Number(data?.vote_average).toFixed(1)}</p>
            <span>|</span>
            <p> View : {Number(data?.vote_count).toFixed(0)}</p>
            <span>|</span>
            <p>Duration : {duration[0]}h {duration[1]}m</p>
          </div>
          <Divider/>
          <div >
            <h3 className='text-xl font-bold text-white'>Overview</h3>
            <p>{data?.overview}</p>

            <Divider/>            
            <div className='flex gap-3 items-center my-3 text-center'>
            
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Released Date : {moment(data?.release_date).format("MMMM Do YYYY")}</p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
              
            </div>
            <Divider/>

              <div>
                <p><span className='text-white'>Director : </span>{creditData?.crew[0]?.name}</p>
                <Divider/>
                <p><span className='text-white'>Writer : </span>{writer}</p>
              </div>

              <Divider/>
              <h2 className='text-xl font-bold text-white'>Cast </h2>

              <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
                {
                  creditData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                    return(
                      <div>
                        <div>
                          <img src={imageURL+starCast?.profile_path} alt=""
                             className='w-24 h-24 object-cover rounded-full'
                          />
                        </div>
                        <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                      </div>
                    )
                  })
                }
              </div>
          </div>
          
        </div>
      </div>
            <div>
             <HorizontalScroll data={similarData} heading={"Similar "+params?.explore} media_type={params?.explore}/>                         
             <HorizontalScroll data={recommendationData} heading={"Recommendation "+params?.explore} media_type={params?.explore}/>                         
            </div>
          {
            playVideo && (
              <VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={params?.explore}/>
            )
          }
    
              
    </div>
  )
}

export default DetailPage