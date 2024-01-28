import Header from "@/components/header";
import Image from "next/image";
import Landing from "@/components/LandingWindow";
import Testimonial from "@/components/Testimonial";
import Tecnologias from "@/components/tecnologias";
import Benefits from "@/components/beneficiosLanding";
import Empresas from "@/components/empresas";
import HeaderLogin from "@/components/header2";
import LandingLogin from "@/components/LandingAfterLogin";

export default function Home() {
  return (
    <div>
    <HeaderLogin/>
    <LandingLogin/>
    <Tecnologias/>
    </div>
  );
}
