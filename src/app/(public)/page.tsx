import Artigos from "../../components/common/artigos";
import Formulario from "../../components/Formulario";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import Nav from "../../components/common/Nav";
import Projetos from "../../components/Projetos";
import Sobre from "../../components/Sobre";
import Contato from "@/components/Contato";

export default function page() {
  return (
    <>
      <Home />
      <Sobre />
      <Formulario />
      <Contato />
      <Projetos />
    </>
  );
}
