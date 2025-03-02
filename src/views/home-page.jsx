import { useQuery } from "@tanstack/react-query";
import { Card } from "../components";
import { getAllBlogs } from "../apis";

const HomePage = () => {
  const { data: articlesData, isFetching: blogsFetching } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllBlogs(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {blogsFetching ? (
        <div>loading...</div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Latest Articles
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData?.length > 0 ? (
              articlesData.map((article) => (
                <Card
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  description={article.description}
                  key={article.id}
                />
              ))
            ) : (
              <div> No Blogs Found!</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
