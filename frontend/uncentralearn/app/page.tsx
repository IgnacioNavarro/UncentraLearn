import Header from "@/components/header";
import Image from "next/image";
import Landing from "@/components/LandingWindow";
import Testimonial from "@/components/Testimonial";
import Tecnologias from "@/components/tecnologias";
import Benefits from "@/components/beneficiosLanding";
import Empresas from "@/components/empresas";

export default function Home() {
  return (
    <div>
    <Header/>
    <Landing/>
    <Testimonial/>
    <Tecnologias/>
    <Benefits/>
    <Empresas/>
    </div>
  );
}
