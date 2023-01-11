import { PropsWithChildren } from 'react';
import styles from './ButtonLink.module.css';

type ButtonLinkProps = {
  href: string;
};

function ButtonLink({ href, children }: PropsWithChildren<ButtonLinkProps>) {
  // TODO prévoir pour les liens interne d'utiliser le composant
  // Link de react-router-dom 
  return <a href={href} className={styles.host}>{children}</a>;
}

export default ButtonLink;
