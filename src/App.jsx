import Forecast from "./components/Forecast";
import Form from "./components/Form";
import Layout from "./components/Layout";
import { Context } from "./context/Context";

function App() {
  return (
    <Context>
      <Layout>
        <div className="bg-[url('./assets/fondo.png')] rounded-xl shadow-lg">
          <Form />
        </div>
        <div className="bg-slate-100 rounded-xl shadow-lg">
          <Forecast />
        </div>
      </Layout>
    </Context>
  );
}

export default App;
