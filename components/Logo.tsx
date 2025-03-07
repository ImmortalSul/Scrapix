import { cn } from "@/lib/utils";
import { Gavel, SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
      href="/"
    >
      <div className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-2">
        <Gavel size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
          Scra
        </span>
        <span className="text-stone-700 dark:text-stone-300">pix</span>
      </div>
    </Link>
  );
}

export default Logo;
