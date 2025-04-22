import styles from "./styles.module.scss";

export default function World() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/world.svg" alt="" />
        </div>
        <div className={styles.rightside}>
          <h1>Cobertura Global</h1>
          <p>
            Contamos com uma cobertura a nível global cidades em todos os países
            do mundo nas mais diversas capitais, quer saber mais? entre em
            contato no botão abaixo!
          </p>
          <button>Entre em contato</button>
        </div>
      </div>
    </div>
  );
}
