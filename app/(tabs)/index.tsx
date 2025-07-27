
import { NewsStore } from "../../store/NewsStore";
import { NewsLayout } from "../../components/NewsLayout";

const Home = () => {
  const { news, isLoading } = NewsStore();
  
  return <NewsLayout news={news} isLoading={isLoading} title="Noticias" />;
};

export default Home;

