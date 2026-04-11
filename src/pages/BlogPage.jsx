import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import blogArticlesData from "../json/blog-articles.json";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setArticles(blogArticlesData);
    setFilteredArticles(blogArticlesData);
  }, []);

  const categories = [
    "Tous",
    ...new Set(articles.map((article) => article.category)),
  ];

  useEffect(() => {
    let filtered = articles;

    // Filtrer par catégorie
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredArticles(filtered);
  }, [articles, selectedCategory, searchTerm]);

  return (
    <main className="blog-page">
      <div className="blog-header">
        <h1>Blog & Articles</h1>
        <p className="blog-subtitle">
          Découvrez mes réflexions et conseils sur la spiritualité, l'astrologie
          et le développement personnel
        </p>
      </div>

      <div className="blog-filters">
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))
        ) : (
          <div className="no-articles">
            <i className="fas fa-search"></i>
            <p>Aucun article trouvé pour votre recherche.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
