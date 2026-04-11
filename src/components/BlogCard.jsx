import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ article }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    setImageSrc(`${baseUrl}assets/${article.image}`);
  }, [article.image]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      locale: "fr-FR",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={imageSrc} alt={article.title} loading="lazy" />
        <div className="blog-card-category">{article.category}</div>
      </div>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-author">Par {article.author}</span>
          <span className="blog-card-date">
            {formatDate(article.publishDate)}
          </span>
          <span className="blog-card-read-time">
            {article.readTime} de lecture
          </span>
        </div>

        <h3 className="blog-card-title">
          <Link to={`/blog/${article.id}`}>{article.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{article.excerpt}</p>

        <div className="blog-card-tags">
          {article.tags.map((tag, index) => (
            <span key={index} className="blog-card-tag">
              #{tag}
            </span>
          ))}
        </div>

        <Link to={`/blog/${article.id}`} className="blog-card-read-more">
          Lire l'article
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
