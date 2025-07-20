import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className="not-found-page">
      <div className="error-container">
        <h2 className="error-title">Erreur 404 !</h2>
        <h3 className="error-message">
          La page que vous recherchez n'existe pas.
        </h3>
        <p>Cliquez sur le bouton ci-dessous pour retourner à l'accueil :</p>
        <button className="home-button" onClick={handleGoHome}>
          Page d'accueil
        </button>
      </div>
    </main>
  );
}

export default NotFoundPage;
