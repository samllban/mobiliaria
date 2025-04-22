import styles from "./styles.module.scss";

export default function BannerServices() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Nossos Serviços</h1>
        <h4>Abaixo estão alguns dos nossos serviços, explore!</h4>
        <img src="/arrowUp.svg" alt="" />
      </div>
    </div>
  );
}
