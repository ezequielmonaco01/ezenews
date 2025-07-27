import { NewsStore } from "../../store/NewsStore";
import { NewsLayout } from "../../components/NewsLayout";

const Polity = () => {
  const { polityNews, isLoading } = NewsStore();

  return (
    <NewsLayout isLoading={isLoading} news={polityNews} title="Política" />
  );
};

export default Polity;
