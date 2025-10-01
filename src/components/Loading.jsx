import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-leaf">🌱</div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;
