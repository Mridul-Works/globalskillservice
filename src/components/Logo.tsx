import Image from "next/image";
import { logo } from "@/lib/images";

/** Official logo (public/images/logo.png). On dark backgrounds it is rendered in white. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={1000}
      height={240}
      priority={!inverted}
      className={`h-9 w-auto sm:h-10 ${inverted ? "brightness-0 invert" : ""}`}
    />
  );
}
