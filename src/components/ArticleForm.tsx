import React, { useState } from "react";
import { fetchArticleIntroduction } from "../services/api";
import { Article } from "../types/Articles";

const FetchArticleForm: React.FC = () => {
  const [articleName, setArticleName] = useState("");
  const [token, setToken] = useState("");
  const [language, setLanguage] = useState("");
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const fetchedArticle = await fetchArticleIntroduction(
        articleName,
        token,
        language
      );
      setArticle(fetchedArticle);
    } catch (error) {
      setError("Failed to fetch article. Please try again.");
      console.error("Fetch article error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Fetch Article Introduction
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="articleName"
        >
          Article Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="articleName"
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="token"
        >
          Token (optional):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="language"
        >
          Language (optional):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Fetch Article
        </button>
      </div>
      {article && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {article.name}
          </h3>
          <p className="text-gray-700">{article.introduction}</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
};

export default FetchArticleForm;
