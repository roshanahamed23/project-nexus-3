import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Service from "@/components/Service";


export default function Home() {
  return (
 <Layout>
  <Hero/>
  <Service/>
 </Layout>
  );
}
