import React from "react";
import Article from "../data";
const ArticleListening = () => {
  return (
    <div  className="grid gap-5 pt-10 w-sm mx-auto  text-shadow-red-950 2xl:grid-cols-4 2xl:w-6xl xl:grid-cols-4 xl:w-6xl lg:grid-cols-3 lg:w-4xl md:grid-cols-2 md:w-2xl sm:grid-cols-1 sm:w-sm">
      {Article.map((article) => (
        <div key={article.id} className="bg-white rounded-2xl flex flex-col justify-between p-4">
          <img
            src={article.image}
            alt=""
            className="rounded-2xl h-40 w-80 object-cover mx-auto 2xl:h-32 2xl:w-70 xl:h-32 xl:w-70 lg:h-32 lg:w-70 md:h-32 md:w-70 sm:h-32 sm:w-85"
          />
          <h3 className="mt-2 text-lg">{article.title}</h3>
          <p className="mt-2 text-sm">{article.description}</p>
          <div className="flex mt-2 text-sm text-gray-500 ">
            <div>{article.date}</div>
          </div>
          <div>{article.category}</div>
        </div>
      ))}
    </div>
  );
};

export default ArticleListening;
