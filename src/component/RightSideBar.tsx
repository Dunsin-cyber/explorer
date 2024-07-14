export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-top-container">
        <div className="right-sidebar-top">
          <p>Total</p>
          <p>LP Tokens Value</p>
          <p className="right-sidebar-price">$1868.52</p>
        </div>
        <div className="right-sidebar-top">
          <p>Total</p>
          <p>LP Tokens Value</p>
          <p className="right-sidebar-price">$166.21</p>
        </div>
      </div>
      <div className="right-sidebar-middle-container">
        <p>Latest Transactions</p>
        <div className="right-sidebar-middle-content-container">
          <div className="flex-column-right-sidebar">
            <img src="" alt="" />
            <p>fUniV3</p>
            <p>388.90</p>
            <img src="" alt="" />
          </div>

          <div className="flex-column-right-sidebar">
            <img src="" alt="" />
            <p>USDC</p>
            <p>152.45</p>
            <img src="" alt="" />
          </div>

          <div className="flex-column-right-sidebar">
            <img src="" alt="" />
            <p>ETH</p>
            <p>0.455522</p>
            <img src="" alt="" />
          </div>

          <div className="flex-column-right-sidebar">
            <img src=".\assets\logo.svg" alt="" />
            <p>iFarm</p>
            <p>32.259932</p>
            <img src="" alt="" />
          </div>

          <div className="flex-column-right-sidebar">
            <img src=".\assets\logo.svg" alt="" />
            <p>iFarm</p>
            <p>32.259932</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* // ================= */}

      <div className="right-sidebar-bottom-container">
        <p>Rewards</p>
        <div className="right-sidebar-bottom-column1">
          <div className="right-sidebar-bottom-row">
            <div className="right-sidebar-inner">
              <img alt="" src="./assets/logo.svg" />
              <p>0.000001 iFARM</p>
            </div>
            <p className="profit-text">
              USD Value: <strong>$0.04$</strong>
            </p>
          </div>

          <button>
            <img src="./assets/solana.svg" alt="" />
            Claim
          </button>
        </div>
        <div className="right-sidebar-bottom-column1">
          <div className="right-sidebar-bottom-row">
            <div className="right-sidebar-inner">
              <img alt="" src="./assets/logo.svg" />
              <p>0.000001 USDC</p>
            </div>
            <p className="profit-text">
              USD Value: <strong> $0.04$</strong>
            </p>
          </div>

          <button>
            <img src="./assets/solana.svg" alt="" />
            Claim
          </button>
        </div>
        <div className="right-sidebar-bottom-column3">
          <p>
            Toltal rewards: <strong>$0.07</strong>
          </p>
        </div>
      </div>

      {/* ======================== */}

      <div className="right-sidebar-bottom-container">
        <p>Rewards</p>
        <div className="right-sidebar-bottom-column1">
          <div className="right-sidebar-bottom-row">
            <div className="right-sidebar-inner">
              <img alt="" src="./assets/logo.svg" />
              <p>0.005221 iFARM</p>
            </div>
            <p className="profit-text">
              USD Value: <strong>$0.04$</strong>
            </p>
          </div>

          <button>
            <img src="./assets/solana.svg" alt="" />
            Claim
          </button>
        </div>
        <div className="right-sidebar-bottom-column1">
          <div className="right-sidebar-bottom-row">
            <div className="right-sidebar-inner">
              <img alt="" src="./assets/logo.svg" />
              <p>4.227200 CRV</p>
            </div>
            <p className="profit-text">
              USD Value: <strong> $2.54$</strong>
            </p>
          </div>

          <button>
            <img src="./assets/solana.svg" alt="" />
            Claim
          </button>
        </div>
        <div className="right-sidebar-bottom-column3">
          <p>
            Toltal rewards: <strong>$13.77</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
