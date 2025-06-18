"use client";

import React from "react";
import CryptoGames from "@/components/HomePages/CryptoGames";
import CryptoNavbar from "@/app/shared/navbar/CryptoNavbar";
import Footer from "@/app/shared/Footer/Footer";

export default function CryptoGamePage() {
  return (
    <div>
      <CryptoGames />
      <Footer />
    </div>
  );
}
