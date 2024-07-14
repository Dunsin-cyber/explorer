export default function MiddleContent() {
  return (
    <div className="middle-container">
      <div className="middle-content">
        <div className="middle-content-top">
          <p>
            <span>My portfolio value</span>
          </p>
          <div className="account-details">
            <div className="portfolio-balance">
              <p className="main-balance">$2013.38</p>
              <div className="price-change">
                <img src="./assets/down-arrow.png" alt="" />
                <p>5.28%</p>
              </div>
            </div>
            <div className="calendar-chart">
              <button>Day</button>
              <button>Week</button>
              <button className="month">Month</button>
              <button>Year</button>
              <button>All</button>
            </div>
          </div>
        </div>
        <div className="middle-content-bottom">
          <img alt="" src="" />
        </div>
      </div>

      <div className="my-farm-text">
        <p>My Farms</p>
        <div className="line"></div>
      </div>

      <div className="my-farm-dashboard">
        <div className="my-farm-dashboard-top">
          <div className="asset-icon-merge">
            <img alt="" src="./assets/solana.svg" />
            <img id="unique" alt="" src="./assets/solana.svg" />
          </div>

          <p>USDC . WETH</p>
          <div></div>
          <button>See farm details</button>
        </div>

        <div className="divider"></div>

        <div className="my-farm-dashboard-bottom">
          <div className="first-column">
            <p>APY</p>
            <p>Asset</p>
            <p>Pool</p>
            <p>Balance</p>
            <p>Staked</p>
          </div>

          <div className="second-column">
            <p>
              32.04% <span id="exclaim">!</span>
            </p>
            <p>fUniV3_USDC_ETH</p>
            <p>Sushiswap</p>
            <p>0.00</p>
            <p>12.2425</p>
          </div>

          <div className="fourth-column">
            <p>Total USD Value</p>

            <div className="fourth-column-second-row">
              <p>$489.12</p>
              <div className="green-increment">
                <img src="./assets/down-arrow.png" alt="" />
                <p>1.12%</p>
              </div>
            </div>

            <div className="fourth-column-third-row">
              <div>
                <p>Assets</p>
                <p className="bold-text">$489.12</p>
              </div>
              <div>
                <p>Rewards</p>
                <p className="bold-text">$0.07</p>
              </div>
            </div>
          </div>

          <div className="third-column"></div>
        </div>
      </div>

      {/* =============== 2 =================== */}

      <div className="my-farm-dashboard">
        <div className="my-farm-dashboard-top">
          <div className="asset-icon-merge">
            <img alt="" src="./assets/solana.svg" />
            <img id="unique" alt="" src="./assets/solana.svg" />
          </div>

          <p>CRV . STETH</p>
          <div></div>
          <button>See farm details</button>
        </div>

        <div className="divider"></div>

        <div className="my-farm-dashboard-bottom">
          <div className="first-column">
            <p>APY</p>
            <p>Asset</p>
            <p>Pool</p>
            <p>Balance</p>
            <p>Staked</p>
          </div>

          <div className="second-column">
            <p>
              4.58% <span id="exclaim">!</span>
            </p>
            <p>crvSTETH</p>
            <p>Curve Finance</p>
            <p>0.00</p>
            <p>12.2425</p>
          </div>

          <div className="fourth-column">
            <p>Total USD Value</p>

            <div className="fourth-column-second-row">
              <p>$301.14</p>
              <div className="green-increment">
                <img src="./assets/down-arrow.png" alt="" />
                <p>12.12%</p>
              </div>
            </div>

            <div className="fourth-column-third-row">
              <div>
                <p>Assets</p>
                <p className="bold-text">$489.12</p>
              </div>
              <div>
                <p>Rewards</p>
                <p className="bold-text">$0.07</p>
              </div>
            </div>
          </div>

          <div className="third-column"></div>
        </div>
      </div>
    </div>
  );
}
