"use client"
import Categories from "@/components/Categories";
import { useState } from "react";
import MainContent from "./_components/MainContent";

export default function Home() {
  const [currentCat, setCurrentCat] = useState(1);
  const [getDoa, setDoa] = useState([]);

  const handleDoa = doa => {
    setDoa(doa);
  }

  const catShow = catId => {
    setCurrentCat(catId);
  }
  return (
    <div className="grid grid-cols-4 gap-8">
      <Categories catShow={catShow}></Categories>
      <MainContent currentCat={currentCat} />
    </div>
  );
}
