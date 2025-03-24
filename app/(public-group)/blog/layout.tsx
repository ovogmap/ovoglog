import Body from "@/app/(public-group)/components/body/body";
import Footer from "@/app/(public-group)/components/footer/footer";
import Header from "@/app/(public-group)/components/header/header";
import { Main } from "@/app/(public-group)/components/main/main";
import { blogContainer } from "./styles.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body>
      <Header />
      <Main>
        <section className={blogContainer}>{children}</section>
      </Main>
      <Footer />
    </Body>
  );
}
