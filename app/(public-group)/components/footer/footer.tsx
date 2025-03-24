import { vars } from "@/app/styles/contract.css";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { footer } from "./footer.css";

export default function Footer() {
  return (
    <footer className={footer}>
      <Link href="https://github.com/ovoglog">
        <Github size={16} color={vars.colors.secondary} />
      </Link>
      <Link href="https://www.linkedin.com/in/ovoglog/">
        <Linkedin size={16} color={vars.colors.secondary} />
      </Link>
    </footer>
  );
}
