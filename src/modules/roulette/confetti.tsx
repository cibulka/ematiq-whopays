import ConfettiLib from "react-confetti";
import { useWindowSize } from "react-use";

export function Confetti() {
  const { width, height } = useWindowSize();
  return <ConfettiLib width={width} height={height} />;
}
