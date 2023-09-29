export default function StatusMessage(props) {
  return (
    <>
      {props.playerOneScore === 100 ? (
        <h1 className="text-center text-2xl tracking-widest text-purple-500">
          YOU WON
        </h1>
      ) : (
        <h1 className="text-center text-2xl tracking-widest text-purple-500">
          YOUR TURN
        </h1>
      )}
    </>
  );
}
