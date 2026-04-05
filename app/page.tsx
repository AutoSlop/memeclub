import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CurrentDrop from "./components/CurrentDrop";
import HowItWorks from "./components/HowItWorks";
import VotingForm from "./components/VotingForm";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <CurrentDrop />
        <HowItWorks />
        <VotingForm />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
