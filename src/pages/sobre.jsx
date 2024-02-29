import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sobre.css'

function Sobre() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Home ao clicar em algum botão
    irPara('/');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div className='sobrep1'>
      {/* Título da página inicial */}
      <h1 >Página Sobre</h1>      
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
// Exporta o componente Home como padrão
export default Sobre;
