export default function Loader() {
  return (
    <div className="w-[100dvw] h-[100dvh] grid place-content-center">
      <div className="loader w-12 h-12 relative before:w-12 before:h-1 before:bg-[#f0808050] before:absolute before:top-16 before:left-0 before:rounded-[50%] after:w-full after:h-full after:bg-[#f08080] after:absolute after:top-0 after:left-0 after:rounded after:animate-boxJump before:animate-shadowChange"></div>
    </div>
  );
}
