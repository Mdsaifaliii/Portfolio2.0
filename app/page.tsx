"use client";

export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";
import { navItems } from "@/data";

const FloatingNav = dynamicImport(
  () => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamicImport(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamicImport(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamicImport(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamicImport(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamicImport(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamicImport(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamicImport(() => import("@/components/RecentProjects"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;