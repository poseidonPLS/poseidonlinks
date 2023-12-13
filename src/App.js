import "./App.css";
import logo from "./logo.png"; // Import PulseChain logo image
import logoPulseX from "./logoPulseX.png"; // Import the PulseX logo image
import logoHEX from "./logoHEX.png"; // Import the HEX logo image

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <a href="https://hex.com" target="_blank" rel="noopener noreferrer">
            <img src={logoHEX} alt="HEX Logo" className="logo" />
          </a>
          <a
            href="https://pulsechain.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="PulseChain Logo" className="logo" />
          </a>
          <a
            href="https://pulsex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoPulseX} alt="PulseX Logo" className="logo" />
          </a>
        </div>
        <h1>Poseidon</h1>
        <div className="navigation-section">
          <h3 className="navigation-heading">Chrome Extensions</h3>
          <div className="navigation-buttons">
            <button
              onClick={() =>
                window.open("https://chromewebstore.google.com/detail/pulsechain-site-checker/jlomlcignpojmjjmiginogpoeaeldpnf?hl=en", "_blank")
              }
            >
              PulseChain Site Checker (Chrome)
            </button>
            <button
              onClick={() =>
                window.open("https://addons.mozilla.org/addon/pulsechain-site-checker/", "_blank")
              }
            >
              PulseChain Site Checker (FireFox)
            </button>
            <button
              onClick={() =>
                window.open("https://chromewebstore.google.com/detail/pulsechain-gas-estimates/mfedonkdkfnekjjnnceeklimanolfloo?hl=en", "_blank")
              }
            >
              Pulsechain Gas Estimates
            </button>
          </div>
        </div>
        <div className="youtube-section">
          <h3 className="navigation-heading">Socials</h3>
          <div className="navigation-buttons">
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@poseidon5555", "_blank")
              }
            >
              Youtube Channel
            </button>
            <button
              onClick={() =>
                window.open("https://twitter.com/Poseidon_5555", "_blank")
              }
            >
              Twitter
            </button>
            <button
              onClick={() =>
                window.open("https://t.me/Poseidon_PLS", "_blank")
              }
            >
              Telegram
            </button>
          </div>
        </div>
        <div className="tgbots-section">
          <h3 className="navigation-heading">Telegram Bots</h3>
          <div className="navigation-buttons">
            <button
              onClick={() =>
                window.open("https://t.me/PulseXbuy", "_blank")
              }
            >
              PulseX buys
            </button>
            <button
              onClick={() =>
                window.open("https://t.me/PLSXpricebot", "_blank")
              }
            >
              Price Bot
            </button>
          </div>
        </div>
        <div className="add-token-section">
          <h3 className="add-token-title">Tools</h3>
          <button
              onClick={() =>
                window.open("https://pulsechain.vercel.app/", "_blank")
              }
            >
              PulseChain Quicklink
            </button>
            <button
              onClick={() =>
                window.open("https://pulsechain-tokens.vercel.app/", "_blank")
              }
            >
              PulseChain Token Explorer
            </button>
            <button
              onClick={() =>
                window.open("https://lasttxns.vercel.app/", "_blank")
              }
            >
              Block explorer backup (last 20 txns)
            </button>
            <button
              onClick={() =>
                window.open("https://imp-loss.vercel.app/", "_blank")
              }
            >
              Impermanent Loss Calculator
            </button>
            <button
              onClick={() =>
                window.open("https://plsgas.vercel.app/", "_blank")
              }
            >
              Gas Estimates (Vercel App)
            </button>
            <button
              onClick={() =>
                window.open("https://syncduty.vercel.app/", "_blank")
              }
            >
              Validators Sync Duties Checker
            </button>
              </div>
            
            <div className="add-beta-section">
            <hr></hr>
            <h3 className="add-token-title">Experimental Apps, for information only!</h3>
            <button
              onClick={() =>
                window.open("https://stakerweb.vercel.app//", "_blank")
              }
            >
              Stakerweb (ETH only)
            </button>
            <button
              onClick={() =>
                window.open("https://plsredirect.vercel.app/", "_blank")
              }
            >
              Link Fixer (for broken IPFS links)
            </button>
            <button
              onClick={() =>
                window.open("https://slippage.vercel.app/", "_blank")
              }
            >
              Slippage Simulator
            </button>
            <button
              onClick={() =>
                window.open("https://lp-sim.vercel.app/", "_blank")
              }
            >
              LP Simulator
            </button>
            <button
              onClick={() =>
                window.open("https://plslp.vercel.app/", "_blank")
              }
            >
              PLP Pair info (Fetches filter tokens pairs)
            </button>

        </div>
      </header>

      <footer className="App-footer">
        <p>Site made by Poseidon</p>
        <div className="disclaimer">
          <p>
            Disclaimer: The information provided by this application is for
            informational purposes only. Do be careful when adding contract
            addresses as they might be fraudulent. While we strive to keep the
            information up-to-date and correct, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the information, products, or services provided. Users are
            encouraged to do their own research and verify the information
            before acting on it. Any reliance you place on such information is
            strictly at your own risks.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
