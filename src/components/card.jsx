const card = (props) => {
  const { id, image, title, description } = props;
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={`/article/${id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          Read more &rarr;
        </a>
      </div>
    </div>
  );
};

export default card;
