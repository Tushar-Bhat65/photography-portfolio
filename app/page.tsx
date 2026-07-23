import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeFeed from "@/components/HomeFeed";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HomeFeed />
      <BackToTop />
    </main>
  );
}