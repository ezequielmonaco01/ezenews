import { NewsLayout } from "../../components/NewsLayout";
import { NewsStore } from "../../store/NewsStore";

const Health = () => {
  const { healthNews, isLoading } = NewsStore();

  return <NewsLayout isLoading={isLoading} news={healthNews} title="Salud" />;
};
export default Health;
