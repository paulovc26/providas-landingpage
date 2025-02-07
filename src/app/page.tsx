import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

export default function page() {
  return (
    <>
      <Nav />
      <Home />
      <Sobre />
      <Contato />
      <Projetos />
      <Footer />'
    </>
  );
}
