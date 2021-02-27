import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h2>Varietats</h2>
      <ul>
        <li>
          <img src="/images/products/onice.png" />
          <div className={styles.productTitle}>Onice blanc</div>
          <div className={styles.productDescription}>Ideal per a la preparació d'amanides, paelles i acompanyaments. És de gra molt dur quedant molt solt a la cocció.</div>
        </li>
        <li>
          <img src="/images/products/onice-integral.png" />
          <div className={styles.productTitle}>Onice integral</div>
          <div className={styles.productDescription}>Ideal per a la preparació d'amanides i acompanyaments. L'arròs integral té un valor nutritiu més alt que l'arròs blanc.</div>
        </li>
        <li>
          <img src="/images/products/carnaroli.png" />
          <div className={styles.productTitle}>Carnaroli</div>
          <div className={styles.productDescription}>És la varietat més apreciada en la cuina italiana. Ideal per a donar el toc de qualitat al <em>risotto</em> o a l'arròs caldós. Sempre queda homogeni, cremós i consistent.</div>
        </li>
      </ul>
    </div>
  );
}
