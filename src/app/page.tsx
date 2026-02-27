import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "16px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "royalblue",
  },
  box: {
    width: "120px",
    height: "120px",
    backgroundColor: "royalblue",
    borderRadius: "12px",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.box)} />
      <p {...stylex.props(styles.title)}>StyleX works!</p>
    </div>
  );
}
