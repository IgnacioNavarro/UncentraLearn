import Header from "@/components/header";
import Image from "next/image";
import Landing from "@/components/LandingWindow";
import Testimonial from "@/components/Testimonial";
import Tecnologias from "@/components/tecnologias";
import Benefits from "@/components/beneficiosLanding";
import Empresas from "@/components/empresas";
import LandingLogin from "@/components/LandingAfterLogin";
import HeaderLogin from "@/components/header2";


//if login is true then show HeaderLogin, LandingLogin, delete testimonial, benefits and empresas
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
