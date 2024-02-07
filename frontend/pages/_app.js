import { Layout } from "/components";
import { store } from "../store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <title>Ntuaflix</title>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};

export default MyApp;
