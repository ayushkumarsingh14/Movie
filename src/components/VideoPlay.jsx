import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`);
  const videoKey = videoData?.results?.[0]?.key;

  return (
    <section className="fixed bg-black/50 top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-black w-full max-w-screen-lg max-h-[80vh] rounded-lg relative">
        
        {/* Close Button */}
        <button onClick={close} className="absolute top-2 right-2 text-white text-3xl hover:text-gray-400">
          <IoClose />
        </button>

        
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            className="w-full h-[80vh] rounded-lg"
            allowFullScreen
          />
    
    
      </div>
    </section>
  );
};

export default VideoPlay;
