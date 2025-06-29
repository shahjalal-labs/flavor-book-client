import { useLoaderData } from "react-router";
import Home from "./components/Home";

const App = () => {
  // const { data } = useLoaderData()?.data;
  const data = useLoaderData()?.data;

  return (
    <section className="mt-10">
      <Home recipes={data?.data} />
    </section>
  );
};

export default App;
