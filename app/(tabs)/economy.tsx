import { NewsStore } from "../../store/NewsStore";
import { NewsLayout } from "../../components/NewsLayout";

const Economy = () => {
  const { economyNews, isLoading } = NewsStore();

  return (
    <NewsLayout isLoading={isLoading} news={economyNews} title="Economía" />
  );
};

export default Economy;
