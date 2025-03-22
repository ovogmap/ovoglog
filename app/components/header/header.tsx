import { ToggleButton } from "../button/toggleButton";
import { Text } from "../text/text";
import { header } from "./header.css";

export default function Header() {
  return (
    <header className={header}>
      <Text size="2xl" weight="bold">
        ovoglog
      </Text>
      <ToggleButton />
    </header>
  );
}
