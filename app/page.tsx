'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeDetail from "@/components/HomeDetail";
import Menu from "@/components/Menu";
import { useState } from "react";


export default function Home() {
  const [menu, setMenu] = useState(0);
  return (
    <>
      <Hero />
      <Menu menu={menu} setMenu={setMenu} />
      <HomeDetail menu={menu} />
      <Footer />
    </>
  )
}
