import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center p-10 mt-10 justify-around  w-full bg-white opacity-50 ">
      <div>
        <ul className="flex flex-col space-y-4 text-xl ">
          <li>
            <a href="/">
              <img src="/profile.png" className="w-[18rem] h-[6rem] p-4 cursor-pointer " alt="" />
            </a>
          </li>
          <li>
            <a href="/catalogo" className="m-10  text-gray-600 hover:text-blue-300">
              Catálogo
            </a>
          </li>
          <li>
            <a href="/contacto" className="m-10 text-gray-600 hover:text-blue-300">
              Contacto
            </a>
          </li>
          <li>
            <a href="/informacion" className="m-10 text-gray-600 hover:text-blue-300">
              Información
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center ">
        <h2 className="text-xl mb-6">Medios de pago</h2>
        <ul className="grid grid-cols-3 gap-2 ">
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="cards"
              src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className=" text-center">
        <h2 className="text-xl mb-10">Nuestas Redes!</h2>
        <ul className="flex justify-center ">
          <li>
            <a href="">
              <img
                className="w-[4rem] transform transition-transform hover:scale-125 mx-5   cursor-pointer"
                src="/insta.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="w-[4rem] transform transition-transform hover:scale-125 mx-5   cursor-pointer"
                src="/whats.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
