import { useSelector } from "react-redux";

export default function StatusMessage() {
  const statusMessage = useSelector((state) => state.statusMessage.message);

  return (
    <>
      <h1 className="text-center text-2xl tracking-widest text-purple-500">
        {statusMessage}
      </h1>
    </>
  );
}
