"use client";

import { useEffect } from "react";

export default function BoardCells() {
  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      document
        .getElementById(`${i}`)
        .classList.add(
          "relative",
          "after:z-20",
          "after:absolute",
          "after:top-1/2",
          "after:-translate-y-1/2",
          "after:left-1/2",
          "after:-translate-x-1/2",
          "after:w-[75%]",
          "after:h-[75%]"
        );
    }
    document
      .getElementById("1")
      .classList.add("after:content-[url('/pawn-red.svg')]", "after:content-[url('/pawn-yellow.svg')]");
  }, []);

  return (
    <>
      <div id="100" className="border bg-blue-100"></div>
      <div id="99" className="border bg-green-100"></div>
      <div id="98" className="border bg-blue-100"></div>
      <div id="97" className="border bg-green-100"></div>
      <div id="96" className="border bg-blue-100"></div>
      <div id="95" className="border bg-green-100"></div>
      <div id="94" className="border bg-blue-100"></div>
      <div id="93" className="border bg-green-100"></div>
      <div id="92" className="border bg-blue-100"></div>
      <div id="91" className="border bg-green-100"></div>
      <div id="81" className="border bg-green-100"></div>
      <div id="82" className="border bg-blue-100"></div>
      <div id="83" className="border bg-green-100"></div>
      <div id="84" className="border bg-blue-100"></div>
      <div id="85" className="border bg-green-100"></div>
      <div id="86" className="border bg-blue-100"></div>
      <div id="87" className="border bg-green-100"></div>
      <div id="88" className="border bg-blue-100"></div>
      <div id="89" className="border bg-green-100"></div>
      <div id="90" className="border bg-blue-100"></div>
      <div id="80" className="border bg-blue-100"></div>
      <div id="79" className="border bg-green-100"></div>
      <div id="78" className="border bg-blue-100"></div>
      <div id="77" className="border bg-green-100"></div>
      <div id="76" className="border bg-blue-100"></div>
      <div id="75" className="border bg-green-100"></div>
      <div id="74" className="border bg-blue-100"></div>
      <div id="73" className="border bg-green-100"></div>
      <div id="72" className="border bg-blue-100"></div>
      <div id="71" className="border bg-green-100"></div>
      <div id="61" className="border bg-green-100"></div>
      <div id="62" className="border bg-blue-100"></div>
      <div id="63" className="border bg-green-100"></div>
      <div id="64" className="border bg-blue-100"></div>
      <div id="65" className="border bg-green-100"></div>
      <div id="66" className="border bg-blue-100"></div>
      <div id="67" className="border bg-green-100"></div>
      <div id="68" className="border bg-blue-100"></div>
      <div id="69" className="border bg-green-100"></div>
      <div id="70" className="border bg-blue-100"></div>
      <div id="60" className="border bg-blue-100"></div>
      <div id="59" className="border bg-green-100"></div>
      <div id="58" className="border bg-blue-100"></div>
      <div id="57" className="border bg-green-100"></div>
      <div id="56" className="border bg-blue-100"></div>
      <div id="55" className="border bg-green-100"></div>
      <div id="54" className="border bg-blue-100"></div>
      <div id="53" className="border bg-green-100"></div>
      <div id="52" className="border bg-blue-100"></div>
      <div id="51" className="border bg-green-100"></div>
      <div id="41" className="border bg-green-100"></div>
      <div id="42" className="border bg-blue-100"></div>
      <div id="43" className="border bg-green-100"></div>
      <div id="44" className="border bg-blue-100"></div>
      <div id="45" className="border bg-green-100"></div>
      <div id="46" className="border bg-blue-100"></div>
      <div id="47" className="border bg-green-100"></div>
      <div id="48" className="border bg-blue-100"></div>
      <div id="49" className="border bg-green-100"></div>
      <div id="50" className="border bg-blue-100"></div>
      <div id="40" className="border bg-blue-100"></div>
      <div id="39" className="border bg-green-100"></div>
      <div id="38" className="border bg-blue-100"></div>
      <div id="37" className="border bg-green-100"></div>
      <div id="36" className="border bg-blue-100"></div>
      <div id="35" className="border bg-green-100"></div>
      <div id="34" className="border bg-blue-100"></div>
      <div id="33" className="border bg-green-100"></div>
      <div id="32" className="border bg-blue-100"></div>
      <div id="31" className="border bg-green-100"></div>
      <div id="21" className="border bg-green-100"></div>
      <div id="22" className="border bg-blue-100"></div>
      <div id="23" className="border bg-green-100"></div>
      <div id="24" className="border bg-blue-100"></div>
      <div id="25" className="border bg-green-100"></div>
      <div id="26" className="border bg-blue-100"></div>
      <div id="27" className="border bg-green-100"></div>
      <div id="28" className="border bg-blue-100"></div>
      <div id="29" className="border bg-green-100"></div>
      <div id="30" className="border bg-blue-100"></div>
      <div id="20" className="border bg-blue-100"></div>
      <div id="19" className="border bg-green-100"></div>
      <div id="18" className="border bg-blue-100"></div>
      <div id="17" className="border bg-green-100"></div>
      <div id="16" className="border bg-blue-100"></div>
      <div id="15" className="border bg-green-100"></div>
      <div id="14" className="border bg-blue-100"></div>
      <div id="13" className="border bg-green-100"></div>
      <div id="12" className="border bg-blue-100"></div>
      <div id="11" className="border bg-green-100"></div>
      <div id="1" className="border bg-green-100"></div>
      <div id="2" className="border bg-blue-100"></div>
      <div id="3" className="border bg-green-100"></div>
      <div id="4" className="border bg-blue-100"></div>
      <div id="5" className="border bg-green-100"></div>
      <div id="6" className="border bg-blue-100"></div>
      <div id="7" className="border bg-green-100"></div>
      <div id="8" className="border bg-blue-100"></div>
      <div id="9" className="border bg-green-100"></div>
      <div id="10" className="border bg-blue-100"></div>
    </>
  );
}
