import "./WelcomeMessage.css";

const WelcomeMessage = () => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-text">No posts yet 📭</h2>
      <p className="welcome-subtext">
        Start sharing your thoughts with the world!
      </p>
    </div>
  );
};

export default WelcomeMessage;
