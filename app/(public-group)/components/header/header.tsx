import Link from "next/link";
import { Text } from "../../../components/text/text";
import { ToggleButton } from "../button/toggleButton";
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
