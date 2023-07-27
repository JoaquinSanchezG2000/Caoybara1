import React from "react";
import { Categorys } from "./Categorys";

export const Catalogo = () => {
  return (
    <div className="flex items-center justify-center w-full bg-secundary p-4 mt-[10rem]">
      <div className="grid grid-cols-3 grid-rows-2 gap-10 p-10  w-[80%] ">
        <Categorys></Categorys>
        <Categorys></Categorys>
        <Categorys></Categorys>
        <Categorys></Categorys>
        <Categorys></Categorys>
      </div>
    </div>
  );
};
