import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sticky bottom-0 bg-primary/70 text-center">
      Application {APP_NAME} 2025 -{" "}
      <Link href="https://portfolio.aurelia-web.fr" className="underline">
        Aurélia Heymann
      </Link>
    </div>
  );
};

export default Footer;
