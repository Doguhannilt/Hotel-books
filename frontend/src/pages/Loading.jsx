import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div style={styles.container}>
      <ReactLoading type="bubbles" color="#33FFFF" height={100} width={50} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
