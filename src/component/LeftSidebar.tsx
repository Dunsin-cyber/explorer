export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">Home</a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">Farms</a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home " className="active">
          Dashboard
        </a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">Analytics</a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">Doc</a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">FAQ</a>
      </div>

      <div className="left-sidebar-link">
        <img alt="" src="./assets/House.svg" />
        <a href="Home">Grain</a>
      </div>

      <div className="left-sidebar-image">
        <p>Harvest Vault</p>
        <div className="left-sidebar-iFarm">
          <img alt="" src=".\assets\logo.svg" />
          <span>iFarm</span>
        </div>
        <p className="strong-text">39.47%</p>
        <button>Earn</button>
      </div>

      <div className="social-links">
        <p>Follow us</p>
        <div className="social-icons">
          <img alt="" src="./assets/House.svg" />
          <img alt="" src="./assets/House.svg" />
          <img alt="" src="./assets/House.svg" />
          <img alt="" src="./assets/House.svg" />
          <img alt="" src="./assets/House.svg" />
        </div>
      </div>
    </div>
  );
}
