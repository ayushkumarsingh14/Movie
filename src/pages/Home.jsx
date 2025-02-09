import React from 'react'
import Banner from '../components/Banner'
import { useSelector } from 'react-redux'
import HorizontalScroll from '../components/HorizontalScroll'
import useFetch from '../hooks/useFetch'

function Home() {
  const trendingData = useSelector(state => state.movieData.bannerData)
  const {data : nowPlaying} = useFetch("/movie/now_playing")
  const {data : popularTvShows} = useFetch("/tv/popular")
  const {data : topRated} = useFetch("/movie/top_rated")  
  const {data : onTheAir} = useFetch("/tv/on_the_air")
  return (
    <div>
      <Banner/>
      <HorizontalScroll data={trendingData} heading="Trending" trending={true} media_type={"movie"}/>
      <HorizontalScroll data={nowPlaying} heading="Now Playing" media_type={"movie"}/>
      <HorizontalScroll data={topRated} heading="Top Rated" media_type={"movie"}/>
      <HorizontalScroll data={popularTvShows} heading="Popular Tv Shows" media_type={"tv"}/>
      <HorizontalScroll data={onTheAir} heading="On The Air" media_type={"tv"}/>
     
    </div>
  )
}

export default Home