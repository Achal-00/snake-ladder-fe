export default function PawnDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img src="/pawn-red.svg" alt="" className="w-7" />
        <p className="text-sm font-medium text-purple-500">Your Pawn</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/pawn-yellow.svg" alt="" className="w-7" />
        <p className="text-sm font-medium text-purple-500">Opponent's Pawn</p>
      </div>
    </div>
  );
}
