import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className="not-found-page">
      <div className="error-container">
        <h2 className="error-title">Oops !</h2>
        <p className="error-message">
          La page que vous cherchez n'existe pas.
        </p>
        <button className="home-button" onClick={handleGoHome}>
          Retour à la page d'accueil
        </button>
      </div>
    </main>
  );
}

export default NotFoundPage;
