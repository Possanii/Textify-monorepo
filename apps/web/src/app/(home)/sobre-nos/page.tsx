import React from "react";
import Logo from "../../../../public/textify-text-white.png";

const SobreNos = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-6 bg-transparent shadow-lg rounded-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Textify - Transformando Áudio em Texto com Inteligência Artificial
        </h1>
        <div className='flex mt-5 items-center justify-center'>
        <img src={Logo.src} alt="Textify"/>
        </div>
        <p className="text-lg py-8">
          <p className="p-6">
            Bem-vindo à <strong>Textify</strong>, onde a tecnologia e a inovação se encontram
            para simplificar a forma como interagimos com o áudio. Na Textify,
            estamos comprometidos em fornecer uma solução eficiente e precisa
            para transcrição de áudio por meio da inteligência artificial.
          </p>
          <p className="p-6">
            Imagine nunca mais perder uma palavra de uma palestra inspiradora,
            de uma reunião de brainstorming criativo ou de uma entrevista
            crucial. Com a Textify, você pode transformar facilmente seus
            arquivos de áudio em texto em minutos, permitindo uma revisão
            rápida, uma busca eficaz e uma compreensão aprofundada do conteúdo.
            Nossa equipe de especialistas em IA trabalha incansavelmente para
            desenvolver algoritmos avançados que garantem uma transcrição
            precisa e confiável, independentemente do sotaque, velocidade de
            fala ou qualidade do áudio. Utilizamos as últimas técnicas de
            aprendizado de máquina para garantir que cada palavra seja capturada
            com precisão, garantindo uma experiência de transcrição sem falhas.
            Na Textify, entendemos a importância da privacidade e da segurança
            dos seus dados.
          </p>
          <p className="p-6">
            Por isso, implementamos rigorosos protocolos de segurança para
            proteger suas informações confidenciais durante todo o processo de
            transcrição. Nossa missão é capacitar indivíduos e organizações a
            maximizar seu tempo e produtividade, oferecendo uma ferramenta
            intuitiva e eficaz para transformar áudio em texto. Com a Textify,
            você pode concentrar sua atenção no que realmente importa, enquanto
            nós cuidamos da transcrição. Junte-se a nós na jornada para
            simplificar a comunicação por meio da tecnologia de ponta.
            Experimente a Textify hoje e descubra como podemos transformar a
            maneira como você interage com o áudio. Estamos aqui para ajudar
            você a transformar suas ideias em palavras, um clique de cada vez.
          </p>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default SobreNos;
