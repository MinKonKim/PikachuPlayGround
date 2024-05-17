import { useEffect, useState } from "react";

const Background = ({ width, height }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    // 화면 가운데 위치 계산
    setPosition({
      x: window.innerWidth / 2 - width / 2, // 박스 너비의 절반을 뺌
      y: window.innerHeight / 2 - height / 2, // 박스 높이의 절반을 뺌
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "green",
        backgroundImage: "url(src/assets/grass.png)",
        backgroundSize: "120px",
        backgroundRepeat: "repeat",
        margin: "auto",
      }}
    ></div>
  );
};

export default Background;
