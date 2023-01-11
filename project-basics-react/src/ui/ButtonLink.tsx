import { PropsWithChildren } from 'react';
import styles from './ButtonLink.module.css';

type ButtonLinkProps = {
  href: string;
};

function ButtonLink({ href, children }: PropsWithChildren<ButtonLinkProps>) {
  return <a href={href} className={styles.host}>{children}</a>;
}

export default ButtonLink;
