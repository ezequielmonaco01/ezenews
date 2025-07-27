import { NewsStore } from "../../store/NewsStore";
import { NewsLayout } from "../../components/NewsLayout";

const Tech = () => {
  const { techNews, isLoading } = NewsStore();

  return (
    <NewsLayout isLoading={isLoading} news={techNews} title="Tecnología" />
  );
};

export default Tech;
