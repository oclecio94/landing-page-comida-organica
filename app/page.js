import Image from "next/image";
import vegetable from "../public/img/vegetable.png";
import chef from "../public/img/chef.png";
import dish from "../public/img/dish.png";
import driver from "../public/img/driver.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100">
      <nav className="flex items-center justify-between px-24 py-8 max-w-screen-xl mx-auto">
        <a className="text-4xl font-bold tracking-wide" href="#">
          Organ<span className="text-green-500">o</span>
        </a>
        <ul className="flex items-center space-x-8">
          <li className="font-bold">
            <a href="#">Principal</a>
          </li>
          <li className="font-bold">
            <a href="#">Delivery</a>
          </li>
          <li className="font-bold">
            <a href="#">Preços</a>
          </li>
          <li className="font-bold">
            <a href="#">Contato</a>
          </li>
          <button className="bg-green-500 rounded-xl font-bold text-white px-8 py-3 h-13 hover:bg-green-400">
            Pedido
          </button>
        </ul>
      </nav>
      <div className="flex justify-between px-24 py-8 max-w-screen-xl mx-auto">
        <div className="max-w-md">
          <span className="flex items-center px-1 text-xl text-green-500">
            <span className="font-medium">Comida 100% Orgânica</span>
            <Image className="w-auto h-8" src={vegetable} alt="vegetal"></Image>
          </span>

          <h1 className="pt-4 text-6xl font-bold tracking-tighter leading-tight">
            Vantagem em um estilo de vida{" "}
            <span className="text-green-500">saudável</span>
          </h1>
          <p className="pt-8 text-lg font-normal text-gray-600 leading-relaxed">
            Escolha hábitos saudáveis com refeições diárias Organo preparada
            pelo nosso especialista em nutrição e chef
          </p>
          <div className="flex pt-8 space-x-6">
            <button className="flex justify-center items-center h-13 px-8 py-3 font-bold bg-green-600 text-white rounded-xl hover:bg-green-500">
              Iniciar
            </button>
            <button className="flex justify-center items-center h-13 px-8 py-3 font-bold text-gray-900 border border-gray-900 rounded-xl hover:shadow-xl transition-shadow duration-300">
              Explorar Menu
            </button>
          </div>
          <div className="flex pt-20">
            <Image className="w-24 h-auto" src={chef} alt="chef"></Image>
            <div className="pt-5 pl-3">
              <div className="text-xl font-bold leading-relaxed">
                Chef do mês
              </div>
              <div className="inline-flex text-gray-600 leading-relaxed">
                As pessoas amam ele
              </div>
              <div className="font-bold text-green-500 leading-relaxed">
                80+ pratos famosos
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <Image
            className="max-w-xl drop-shadow-2xl self-end"
            src={dish}
            alt="salada"
          ></Image>
          <div className="absolute right-0 bottom-4 flex rounded-xl shadow-xl bg-white/80 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <Image
              className="w-auto h-20 self-end"
              src={driver}
              alt="entregador"
            ></Image>
            <div className="pr-7 pl-2 py-5">
              <div className="font-bold">Entrega rápida!</div>
              <div className="text-gray-600 leading-relaxed">
                em até 30 minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
