import { useQuery } from "@tanstack/react-query";
import { Card, Loader } from "../components";
import { getAllBlogs } from "../apis";

const HomePage = () => {
  const { data: articlesData, isFetching: blogsFetching } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllBlogs(),
  });

  return (
    <>
      {blogsFetching ? (
        <Loader />
      ) : (
        <>
          {articlesData?.length > 0 ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                Latest Articles
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articlesData.map((article) => (
                  <Card
                    id={article.id}
                    image={article.image}
                    title={article.title}
                    description={article.description}
                    key={article.id}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center w-full
         text-center text-gray-600 text-lg h-[calc(100vh-90px)]"
            >
              Oops! There are no blogs here yet. Stay tuned for updates!
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
