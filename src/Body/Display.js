import "./Display.css";

let Display = () => {
  return (
    <div className="body-container">
      <div className="header">
        <h1>An Inspiring design delivered to your inbox every morning</h1>
      </div>
      <div className="para">
        <h3>
          Our team scouts the internet for the best designs, illustrations and
          art and delivers truly inspiring one every day to your inbox
        </h3>
      </div>
      <div className="show-me">
        <h3>Show me how it looks</h3>
      </div>
      <div className="input">
        <input
          className="email"
          type="email"
          placeholder="Your e-mail address"
        />
        <div className="btn">
          <div className="btn-text">Register Now</div>
        </div>
      </div>
      <div className="free">Free - No Spam - No Data Sharing</div>
    </div>
  );
};

export default Display;
