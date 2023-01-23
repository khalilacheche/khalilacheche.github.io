import React, { useRef, useEffect } from "react";
import lottie from 'lottie-web';
export default function EducationImg() {

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./edu.json')
    });
  }, []);
  return (
    <div className="container" ref={container}></div>
  );

}
