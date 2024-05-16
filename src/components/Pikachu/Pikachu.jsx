import { useEffect, useState } from "react";

const Pikachu = ({ minWidth, maxWidth, minHeight, maxHeight }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [Flipped, setFlipped] = useState(false);
  // 키 입력에 따라 박스를 움직이는 함수
  const moveBox = (e) => {
    const { x, y } = position;
    // 10은 이동거리 계산용 50은 박스 크기 계산용
    switch (e.key) {
      case "ArrowUp":
        setPosition({ x, y: y - 10 - 50 > minHeight ? y - 10 : y });
        break;
      case "ArrowDown":
        setPosition({ x, y: y + 10 + 50 < maxHeight ? y + 10 : y });
        break;
      case "ArrowLeft":
        setFlipped(true);
        setPosition({ x: x - 10 - 50 > minWidth ? x - 10 : x, y });
        break;
      case "ArrowRight":
        setFlipped(false);
        setPosition({ x: x + 10 + 50 < maxWidth ? x + 10 : x, y });
        break;
      case " ":
        jump();
        break;
      default:
        break;
    }
  };

  const jump = () => {
    let temp = position;
    let peak = { x: position.x, y: position.y - 100 }; // 점프 높이 설정
    setPosition(peak); // 점프 시작

    // 점프 후 다시 내려오기
    setTimeout(() => {
      setPosition(temp); // 시작 위치로 복귀
    }, 500); // 점프 지속 시간 설정
  };

  // 키 입력 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("keydown", moveBox);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", moveBox);
    };
  }, [position]);

  useEffect(() => {
    // 화면 가운데 위치 계산
    const updatePosition = () => {
      setPosition({
        x: window.innerWidth / 2 - 50, // 박스 너비의 절반을 뺌
        y: window.innerHeight / 2 - 50, // 박스 높이의 절반을 뺌
      });
    };

    // 컴포넌트 마운트 시 위치 업데이트
    updatePosition();

    // 클린업 함수
    return () => window.removeEventListener("resize", updatePosition);
  }, []);
  return (
    <img
      className={`${
        Flipped ? "scale-x-[-1]" : "scale-x-100"
      } transition-transform duration-500`}
      src="src\assets\pikachu.png"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "100px",
        height: "100px",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default Pikachu;
