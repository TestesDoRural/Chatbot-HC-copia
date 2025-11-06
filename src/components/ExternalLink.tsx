import React from 'react';

// Props:
// - href: A URL externa real
// - children: O conteúdo do link (texto, ícone, etc.)
// - onOpenModal: Uma função que o componente pai (App.tsx) vai nos passar
//                para abrir o modal, passando a URL externa.
interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onOpenModal: (url: string) => void; // Função para abrir o modal
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, onOpenModal, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Impede a navegação padrão do link
    onOpenModal(href);  // Chama a função passada pelo pai para abrir o modal
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;