import { useParams } from "react-router";

const blogProfile = () => {
  let params = useParams();
  //   params.postId();
  // Sample data for the article and author
  const article = {
    id: 123, // Article ID from URL (using React Router)
    title: "How to Build a React App",
    content: `
      <p>This is a simple guide to building your first React app. React is a powerful library for building user interfaces.</p>
      <p>In this tutorial, we will go step by step to create a simple application that will display a list of items, allowing you to interact with it.</p>
      <p>First, we need to install React and set up a development environment. You can do this by using Create React App, which is a command-line tool to set up everything for you.</p>
    `,
    author: {
      name: "John Doe",
      bio: "Frontend developer and React enthusiast. Writing about modern web development and best practices.",
      avatar: "https://via.placeholder.com/100x100",
    },
    publishedDate: "March 1, 2025",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Article Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <img
              className="w-12 h-12 rounded-full mr-3"
              src={article.author.avatar}
              alt={article.author.name}
            />
            <div>
              <p className="text-lg font-semibold">{article.author.name}</p>
              <p className="text-sm">{article.publishedDate}</p>
            </div>
          </div>

          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
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
              src={article.author.avatar}
              alt={article.author.name}
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">{article.author.name}</p>
              <p className="text-gray-600 text-sm">{article.author.bio}</p>
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
    </div>
  );
};

export default blogProfile;
