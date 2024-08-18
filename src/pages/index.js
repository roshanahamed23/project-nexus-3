import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Formpart from "@/components/Formpart";
import Records from "@/components/Records";
import Bgsection from "@/components/Bgsection";
import { pool5 } from "@/assets";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Service />
      <div
        className="bg-cover bg-fixed bg-right-top  w-full"
        style={{ backgroundImage: `url(${pool5.src})` }}
      >
        <Records />
        <Bgsection />
        <Formpart />
      </div>
    </Layout>
  );
}
