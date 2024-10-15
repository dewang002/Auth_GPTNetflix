import { useSelector } from "react-redux";
import useMainBackground from "../Hooks/useMainBackground";

function VideoBackground({ movieID }) {
  const trailerid = useSelector((state) => state.movie?.trailer);
  useMainBackground(movieID);
  return (
    <div className="h-[80vh] bg-black relative w-full">
      <div className="h-full w-full bg-black opacity-10 top-0 left-0 absolute"></div>
      <iframe
        className="h-full w-full top-0 left-0"
        src={`https://www.youtube.com/embed/${trailerid?.key}?autoplay=1&loop=1&mute=1&playlist=${trailerid?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow=" autoplay;  gyroscope;"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
