import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Carrousel from "@/Components/Carrousel";
import Footer from "@/Components/Footer";
import { Catalogo } from "@/Components/Catalogo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <Header></Header>
      <Carrousel></Carrousel>
      <Catalogo></Catalogo>
      <Footer></Footer>
    </main>
  );
}
