import Header from "./components/Header";
import { ThemeProvider } from "styled-components"
const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A"
  },
  responsive:"760px"
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={style}>
        {/* <GlobalStyles/> */}
        <Header />
        </ThemeProvider>
    </>
  );
};

export default App;
