import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState(null);  // Initialize with null to avoid "undefined"
  const [apiUrl, setApiUrl] = useState("");

  // API URLs
  const apiOptions = {
    tesla: "https://newsapi.org/v2/everything?q=tesla&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    apple: "https://newsapi.org/v2/everything?q=apple&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    amazon: "https://newsapi.org/v2/everything?q=amazon&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    google: "https://newsapi.org/v2/everything?q=google&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    technology: "https://newsapi.org/v2/everything?q=technology&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    sports: "https://newsapi.org/v2/everything?q=sports&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    health: "https://newsapi.org/v2/everything?q=health&from=2024-07-24&sortBy=publishedAt&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    country: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",
    tech: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a9c47f80419a4fd1a86e10ea2e6eeb98",

  };

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setNews(data.articles))  // Assuming data has an `articles` property
        .catch((error) => console.error("Error fetching news:", error));
    }
  }, [apiUrl]);  // Re-fetch when the apiUrl changes

  const handleApiChange = (event) => {
    setApiUrl(apiOptions[event.target.value]);
  };
console.log(news)
  return (
    <div>
      <h1>Choose a News Category</h1>
      <select onChange={handleApiChange}>
        <option value="">Select a category</option>
        <option value="tesla">Tesla</option>
        <option value="apple">Apple</option>
        <option value="amazon">Amazon</option>
        <option value="google">Google</option>
        <option value="country">Country</option>
        <option value="tech">Tech</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
      </select>

      <div>
        <h2>News Articles</h2>
        {news ? (
          news.map((article, index) => (
            <div key={index} className="m-2  bg-slate-400 rounded-md flex justify-between items-start">
            <div className="flex-1 pr-4 p-2">
              <h3 className="text-xl font-semibold">{index + 1}. {article.title}</h3>
              <span>by- {article.author}</span>
              <p>{article.description}</p>
            </div>
            <img className="w-[400px] h-[200px] object-cover rounded-e-md" src={article.urlToImage} alt={article.title} />
          </div>
          
          ))
        ) : (
          <p>No news available. Please select a category.</p>
        )}
      </div>
    </div>
  );
};

export default News;
