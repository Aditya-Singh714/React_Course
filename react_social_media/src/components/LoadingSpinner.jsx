import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="super-spinner-wrapper dark">
      <div className="super-spinner"></div>
      <p className="loading-text">Loading your feed...</p>
    </div>
  );
};

export default LoadingSpinner;
