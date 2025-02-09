import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function ExplorePages() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`discover/${params.explore}`, {
        params: { page: pageNo }
      });
      setData((preve)=>{
        return[
            ...preve,
            ...response.data.results
        ]
      }) 
      setPageNo(response.data.total_pages)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      setPageNo((prev) => (prev < totalPages ? prev + 1 : prev));
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setData([]);
    setPageNo(1);
    fetchData() 
  }, [params.explore]);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
},[])

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {params.explore} show
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData) => (
            <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePages;
