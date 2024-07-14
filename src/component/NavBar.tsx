export default function NavBar() {
  return (
    <div className="navbar">
      <div className="right-navbar">
        <div className="right-navbar-logo">
          <img alt="" src=".\assets\logo.svg" />
          <h3>Harvest</h3>
        </div>
        <p id="tvl">
          <span>TVL</span> $207,128,139.34
        </p>
        <div className="right-navbar-user">
          <img alt="" src=".\assets\logo.svg" />
          <p>$108.23</p>
          <button>Buy FARM</button>
        </div>
      </div>
      <div className="left-navbar">
        <div className="left-navbar-coin-details">
          <img src=".\assets\solana.svg" alt="" />
          <p>Solana</p>
          <img id="downArrow" src=".\assets\down-arrow.png" alt="" />
        </div>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}
