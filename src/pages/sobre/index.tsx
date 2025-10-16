import HeroSobre from "./HeroSobre";
import Historia from "./Historia";
import PorQueConfiar from "./Confiar";
import Location from "../../components/Location";
import ProprietariaSobre from "./ProprietariaSobre"
import GroomerSobre from "./GroomerSobre"

export default function Sobre() {
  return (
    <main className="pt-24">
      <HeroSobre />
      <Historia />
      <ProprietariaSobre />
      <GroomerSobre />
      <PorQueConfiar />
      <Location />
    </main>
  );
}
