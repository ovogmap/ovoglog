import Body from "@/app/components/body/body";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import { Main } from "@/app/components/main/main";
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
