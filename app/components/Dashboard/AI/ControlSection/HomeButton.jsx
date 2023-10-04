import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeButton() {
  return (
    <div className="h-full flex items-end justify-end">
      <Link href="/dashboard">
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/dashboard.svg"
          alt="Homepage"
          className="w-10"
        />
      </Link>
    </div>
  );
}
