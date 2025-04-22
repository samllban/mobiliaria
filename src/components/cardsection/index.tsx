import styles from "./styles.module.scss";

export default function CardSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      
        <div className={styles.leftside}>
          <div className={styles.form}>
            <div className={styles.inputWrap}>
              <p>Nome</p>
              <input type="text" placeholder="Nome" />
            </div>
            <div className={styles.inputWrap}>
              <p>Email</p>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className={styles.inputWrap}>
              <p>Telefone</p>
              <input type="text" placeholder="Telefone" />
            </div>

            <div className={styles.inputWrap}>
              <p>Mensagem</p>
              <textarea
                name=""
                id=""
                placeholder="Escreva aqui sua mensagem..."
              ></textarea>
            </div>
            <button>
              Entre em contato <img src="/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.title}>
            <h1>Fale conosco!</h1>
            <p>
              Para entrar em contato preencha o formulário ao lado, temos uma
              equipe de suporte que responderá em até 24H!
            </p>
          </div>
          <div className={styles.rowWrap}>
            <div className={styles.row}>
              <img src="/mapPin.svg" alt="" />
              <p>Endereço: Rua exemplo, 1234</p>
            </div>
            <div className={styles.row}>
              <img src="/phone.svg" alt="" />
              <p>+55 (99) 999 99999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
