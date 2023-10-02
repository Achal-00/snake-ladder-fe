"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SignupForm from "./SignupForm";

export default function ContentSection() {
  return (
    <div className="flex flex-col landscape:grid landscape:grid-rows-[0.9fr_0.1fr] gap-4">
      <SignupForm />
      <div className="flex items-end justify-end">
        <Link href="/">
          <motion.img
            whileHover={{ scale: 1.3 }}
            src="/homepage-white.svg"
            alt="Homepage"
            className="w-10"
          />
        </Link>
      </div>
    </div>
  );
}
