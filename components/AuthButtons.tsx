import Link from "next/link";
import { UserRole } from "@/config/NavLinks";

type AuthButtonsProps = {
  role?: UserRole;
};

export default function AuthButtons({ role }: AuthButtonsProps) {
  //role = "guest" | "student" | "instructor" | "admin"
  const href: string = role === "guest" ? "signup" : "login";
  const button: string = role === "guest" ? "Sign Up" : "Log In";
  {
    return (
      <Link
        href={`/auth/${href}`}
        className="relative inline-flex items-center justify-center px-6 py-2 
             backdrop-blur-md bg-linear-to-r bg-gradient-to-r from-indigo-600 to-fuchsia-500 border border-black/10 text-white 
             rounded-full overflow-hidden transition-all duration-300 group"
      >
        <span className=" transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-6px]">
          {button}
        </span>
        <span
          className="absolute opacity-0 translate-y-[6px] transition-all duration-500 
               group-hover:opacity-100 group-hover:translate-y-0"
        >
          ➜
        </span>
      </Link>
    );
  }
}
