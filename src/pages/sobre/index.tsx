import HeroSobre from "./HeroSobre";
import Historia from "./Historia";
import PorQueConfiar from "./Confiar";
import Location from "../../components/Location";

export default function Sobre() {
  return (
    <main className="pt-24">
      <HeroSobre />
      <Historia />
      <PorQueConfiar />
      <Location />
    </main>
  );
}
