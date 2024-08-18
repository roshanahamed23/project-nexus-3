import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Formpart from "@/components/Formpart";


export default function Home() {
  return (
 <Layout>
  <Hero/>
  <Service/>
  <Formpart/>
 </Layout>
  );
}
