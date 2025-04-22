import styles from "./styles.module.scss";

export default function QuemSomos() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Quem Somos</h1>
        <p>
          Na <strong>Easy Visa</strong> buscamos{" "}
          <strong>democratizar os espaços</strong> de viagem e mostrar que todos
          podem realizar seus sonhos. Com <strong>cobertura global</strong> e
          serviços personalizados, transformamos suas aspirações de viagem em
          realidade, desde o planejamento até o pós-viagem. Seja você um
          aventureiro solo, um casal em busca de romance ou uma família criando
          novas memórias, nossa equipe experiente está aqui para guiar cada
          passo. <strong>Descubra o mundo</strong> com a gente e viva momentos
          extraordinários.
        </p>
        <button className={styles.knowmore}>Saiba Mais</button>
      </div>
    </div>
  );
}
