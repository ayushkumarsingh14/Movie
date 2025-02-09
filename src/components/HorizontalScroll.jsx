import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function HorizontalScroll({data = [], heading, trending, media_type}) {
    const containerRef = useRef();

    const handleNext = () => {
        containerRef.current.scrollLeft += 300;
    }

    const handlePrev = () => {
        containerRef.current.scrollLeft -= 300;

    }

  return (

             <div className='container mx-auto px-3 my-10'>
                <h2 className='text-xl lg:text-2xl font-bold mb-2'>
                {heading}
                </h2>

                <div className='relative'>
                    <div className="w-full overflow-hidden">
                        <div ref={containerRef} className="flex overflow-x-scroll gap-6  relative z-10 scroll-smooth transition-all " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {
                            data.map((data, index) => {
                                return(
                                <Card key={data.id+heading} data={data} index={index+1} trending={trending} media_type={media_type}/>
                                )
                            })
                            }
                        </div>

                        <div className=' absolute top-0 w-full h-full items-center justify-between lg:flex hidden'>
                            <button onClick={handlePrev} className='bg-white p-1 text-black rounded-full -ml-1 z-10' >
                                <FaAngleLeft/>                
                            </button>
                            <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-1 z-10'>
                                <FaAngleRight/>
                            </button>
                        </div>
                    </div>
                </div>

                
            
            </div>

  )
}

export default HorizontalScroll