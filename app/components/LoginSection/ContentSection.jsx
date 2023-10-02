"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SignUpForm from "./LoginForm";

export default function ContentSection() {
  return (
    <div className="flex flex-col landscape:grid landscape:grid-rows-[0.9fr_0.1fr] gap-4">
      <SignUpForm />
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
