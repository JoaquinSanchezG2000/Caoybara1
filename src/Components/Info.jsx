import React from "react";

const Info = () => {
  return (
    <div className="mt-[10rem] text-center bg-white bg-opacity-75 p-10">
      <h1 className="text-[32px]  text-blue-300 ">Informacon sobre nosotros !</h1>
      <div className="w-full m-10  text-gray-600   grid grid-cols-2  items-center justify-start ">
        <div>
          <h2 className="  text-[28px] text-blue-300">Condiciones de devolución y cambios:</h2>
          <ul>
            <li>Los cambios solo serán procesados con prendas nuevas y sin lavar.</li>
            <li>
              Se aceptarán devoluciones dentro de los 6 días posteriores a la recepción de la
              compra.
            </li>
            <li>
              El comprador será responsable de cubrir los gastos de envío para la devolución y la
              entrega del cambio.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="m-10  text-[24px] text-blue-300">Sobre Nosotros</h2>
          <p>
            Somos una ropa de marca ubicada en Mar del plata , vendemos ropa minorista y mayorista
          </p>
        </div>
        <div>
          <h2 className="m-10  text-[24px] text-blue-300">Los envios </h2>
          <p>Los envios se hacen via andreani , a todo el pais</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
