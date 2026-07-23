import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeFeed from "@/components/HomeFeed";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HomeFeed />
      <FloatingActions />
    </main>
  );
}