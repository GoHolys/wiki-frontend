import React from "react";
import SignupForm from "./components/SignupForm";
import FetchArticleForm from "./components/ArticleForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center px-20 ">
      <div className="py-3">
        <div className="px-4 py-10 bg-white shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Article Fetcher
          </h1>
          <div className="flex flex-col gap-y-10">
            <SignupForm />
            <FetchArticleForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
