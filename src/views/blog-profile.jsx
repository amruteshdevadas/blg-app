import { useNavigate, useParams } from "react-router";
import { getSingleBlog } from "../apis";
import { useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { avatar } from "../utils";

const blogProfile = () => {
  let params = useParams();
  const navigate = useNavigate();
  const id = params?.id;

  const { data: blogData, isFetching: blogFetching } = useQuery({
    queryKey: ["single-blog", id],
    queryFn: () => getSingleBlog(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  const handleRedirect = useCallback(() => {
    if (!id) return;
    navigate(`/blog/add-form/${id}`);
  }, [id]);

  const article = useMemo(() => {
    if (!blogData) return null;
    return blogData;
  }, [blogData]);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {blogFetching ? (
        <>Loading</>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              {article?.title}{" "}
              <img
                src="/src/assets/pencil.svg"
                alt="edit"
                className="w-4 h-4 text-xs cursor-pointer"
                onClick={handleRedirect}
              />
            </h1>

            <div className="flex items-center text-gray-500 mb-6">
              <img
                className="w-12 h-12 rounded-full mr-3"
                src={avatar}
                alt={article?.author?.name}
              />
              <div>
                <p className="text-lg font-semibold">{article?.author?.name}</p>
                <p className="text-sm">{article?.publishedDate}</p>
              </div>
            </div>

            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: article?.content }}
            />
          </div>

          {/* Author Profile */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About the Author
            </h2>
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full"
                src={avatar}
                alt={article?.author?.name}
              />
              <div className="ml-4">
                <p className="text-lg font-semibold">{article?.author?.name}</p>
                <p className="text-gray-600 text-sm">{article?.author?.bio}</p>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <p>Follow on:</p>
              <a href="#" className="text-blue-500 hover:underline">
                Twitter
              </a>
              <span> | </span>
              <a href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default blogProfile;
