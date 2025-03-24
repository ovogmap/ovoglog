import Link from "next/link";
import { ToggleButton } from "../button/toggleButton";
import { Text } from "../text/text";
import { header } from "./header.css";

export default function Header() {
  return (
    <header className={header}>
      <Link href="/blog">
        <Text size="2xl" weight="bold">
          ovoglog
        </Text>
      </Link>
      <ToggleButton />
    </header>
  );
}
