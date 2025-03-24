import { Text } from "@/app/components/text/text";
import { LogoutButton } from "../logoutButton/logoutButton";
import { header } from "./header.css";

export default function Header() {
  return (
    <header className={header}>
      <Text size="2xl" weight="bold">
        Admin
      </Text>
      <LogoutButton />
    </header>
  );
}
