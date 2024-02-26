import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="relative">
      {/* <Sidebar /> */}
      <section>
        <Hero />
      </section>
      <section>
        <Main />
      </section>
      <Footer />
    </div>
  );
}
