import { Card } from "../components";

const HomePage = () => {
  const articles = [
    {
      id: 1,
      title: "How to Build a React App",
      description:
        "This is a simple guide to building your first React app from scratch.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      description:
        "A comprehensive guide to using Tailwind CSS in your projects.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      description:
        "Learn about new features in JavaScript ES6 and how they can improve your code.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      description:
        "A discussion on the trends and technologies shaping the future of web development.",
      image: "https://via.placeholder.com/600x300",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Latest Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card
            id={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
