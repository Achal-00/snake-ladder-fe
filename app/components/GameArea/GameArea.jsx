import BoardCells from "../BoardCells";
import BoardBg from "./BoardBg";

export default function GameArea() {
  return (
    <section className="grid grid-cols-10 relative">
      <BoardCells />
      <BoardBg />
    </section>
  );
}
