import styles from "./styles.module.scss";

export default function Footer2() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src="/logo.svg" alt="" />
              <div className={styles.socials}>
                <img src="/InstagramLogo.svg" alt="" />
                <img src="/WhatsappLogo.svg" alt="" />
              </div>
            </div>
            <div className={styles.middle}>
              <h1>Contato</h1>
              <div className={styles.row}>
                <img src="/mapPin.svg" alt="" />
                <p>Endereço: Rua exemplo, 1234</p>
              </div>
              <div className={styles.row}>
                <img src="/phone.svg" alt="" />
                <p>+55 (99) 999 99999</p>
              </div>
            </div>
            <div className={styles.right}>
              <h1>Políticas</h1>
              <p>Política de privacidade</p>
              <p>Termos e condições</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Mobile Elegante© 2024 - Todos os direitos reservados</p>
        </div>
      </div>
    </>
  );
}
