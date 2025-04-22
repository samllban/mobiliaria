import styles from "./styles.module.scss";

export default function ServiceBenefits() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Por Que Escolher Nossa Mobiliária?</h2>
        <div className={styles.row}>
          <div className={styles.card}>
            <img src="/pencil.svg" alt="Ícone de personalização" />
            <h3>Design Personalizado</h3>
            <h5>
              Móveis criados sob medida <br />
              para seu espaço e <br />
              estilo de vida.
            </h5>
          </div>
          <div className={styles.card}>
            <img src="/star.svg" alt="Ícone de qualidade" />
            <h3>Qualidade Premium</h3>
            <h5>
              Materiais selecionados e <br />
              acabamento impecável <br />
              em cada peça.
            </h5>
          </div>
          <div className={styles.card}>
            <img src="/rewind.svg" alt="Ícone de suporte" />
            <h3>Acompanhamento Completo</h3>
            <h5>
              Assistência desde o projeto <br />
              até a instalação final <br />
              em sua casa.
            </h5>
          </div>
        </div>
        <button>Conheça Nossos Produtos</button>
      </div>
    </div>
  );
}