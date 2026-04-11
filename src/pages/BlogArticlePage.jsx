import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogArticlesData from "../json/blog-articles.json";

const BlogArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const foundArticle = blogArticlesData.find(
      (article) => article.id === parseInt(id)
    );

    if (!foundArticle) {
      navigate("/blog");
      return;
    }

    setArticle(foundArticle);

    // Articles similaires (même catégorie, excluant l'article actuel)
    const related = blogArticlesData
      .filter(
        (a) => a.category === foundArticle.category && a.id !== foundArticle.id
      )
      .slice(0, 3);
    setRelatedArticles(related);

    // Image de l'article
    const baseUrl = import.meta.env.BASE_URL || "/";
    setImageSrc(`${baseUrl}assets/${foundArticle.image}`);
  }, [id, navigate]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      locale: "fr-FR",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  if (!article) {
    return (
      <main className="blog-article-page">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Chargement de l'article...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-article-page">
      <div className="article-header">
        <Link to="/blog" className="back-to-blog">
          <i className="fas fa-arrow-left"></i>
          Retour au blog
        </Link>

        <div className="article-category">{article.category}</div>

        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta">
          <div className="meta-item">
            <i className="fas fa-user"></i>
            <span>Par {article.author}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-calendar"></i>
            <span>{formatDate(article.publishDate)}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-clock"></i>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>
      </div>

      <div className="article-image">
        <img src={imageSrc} alt={article.title} />
      </div>

      <div className="article-content">
        <div className="article-text">
          {article.content
            .split("\n")
            .map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph}</p>
            )}
        </div>

        <div className="article-tags">
          <h4>Tags :</h4>
          <div className="tags-list">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="related-articles">
          <h3>Articles similaires</h3>
          <div className="related-grid">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                to={`/blog/${relatedArticle.id}`}
                className="related-article"
              >
                <img
                  src={`${import.meta.env.BASE_URL || "/"}assets/${
                    relatedArticle.image
                  }`}
                  alt={relatedArticle.title}
                />
                <div className="related-content">
                  <h4>{relatedArticle.title}</h4>
                  <p>{relatedArticle.excerpt.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="article-footer">
        <Link to="/contact" className="contact-cta">
          <i className="fas fa-envelope"></i>
          Une question ? Contactez-moi
        </Link>
      </div>
    </main>
  );
};

export default BlogArticlePage;
