import { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.png";
import logoPulseX from "./logoPulseX.png";
import logoHEX from "./logoHEX.png";

const Section = ({ title, items }) => (
  <div className="section">
    <h3>{title}</h3>
    <div className="button-grid">
      {items.map((item, index) => (
        <button key={index} onClick={() => window.open(item.link, "_blank")}>
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark mode
  });

  const sections = [
    {
      title: "Chrome Extensions",
      items: [
        { label: "PulseChain Site Checker (Chrome)", link: "https://chromewebstore.google.com/detail/pulsechain-site-checker/jlomlcignpojmjjmiginogpoeaeldpnf?hl=en" },
        { label: "PulseChain Site Checker (FireFox)", link: "https://addons.mozilla.org/addon/pulsechain-site-checker/" },
        { label: "Pulsechain Gas Estimates", link: "https://chromewebstore.google.com/detail/pulsechain-gas-estimates/mfedonkdkfnekjjnnceeklimanolfloo?hl=en" }
      ]
    },
    {
      title: "Socials",
      items: [
        { label: "Youtube Channel", link: "https://www.youtube.com/@poseidon5555" },
        { label: "Twitter", link: "https://twitter.com/Poseidon_5555" },
        { label: "Telegram", link: "https://t.me/Poseidon_PLS" }
      ]
    },
    {
      title: "Telegram Bots",
      items: [
        { label: "PulseX buys", link: "https://t.me/PulseXbuy" },
        { label: "Price Bot", link: "https://t.me/PLSXpricebot" }
      ]
    },
    {
      title: "Tools",
      items: [
        { label: "PulseChain token holder exporter", link: "https://tokenholder.vercel.app/" },
        { label: "PulseChain Validator Status", link: "https://pls-validator.vercel.app/" },
        { label: "Validator Income / Online Checker", link: "https://validator-income.vercel.app/" },
        { label: "PulseChain Token Explorer", link: "https://pulsechain-tokens.vercel.app/" },
        { label: "Block explorer backup (last 20 txns)", link: "https://lasttxns.vercel.app/" },
        { label: "Official RPC Mempool", link: "https://PLSmempool.vercel.app/" },
        { label: "Impermanent Loss Calculator", link: "https://imp-loss.vercel.app/" },
        { label: "Gas Estimates (Vercel App)", link: "https://plsgas.vercel.app/" },
        { label: "Validators Sync Duties Checker", link: "https://syncduty.vercel.app/" },
        { label: "PulseChain Bridge Status", link: "https://pls-bridge-status.vercel.app/" }
      ]
    },
    {
      title: "Experimental Apps",
      items: [
        { label: "Stakerweb (ETH only)", link: "https://stakerweb.vercel.app//" },
        { label: "Link Fixer (for broken IPFS links)", link: "https://plsredirect.vercel.app/" },
        { label: "Slippage Simulator", link: "https://slippage.vercel.app/" },
        { label: "LP Simulator", link: "https://lp-sim.vercel.app/" },
        { label: "PLP Pair info (Fetches filter tokens pairs)", link: "https://plslp.vercel.app/" }
      ]
    }
  ];

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <header className="header">
        <div className="logo-container">
          {[
            { src: logoHEX, link: "https://hex.com" },
            { src: logo, link: "https://pulsechain.com" },
            { src: logoPulseX, link: "https://pulsex.com" }
          ].map((logo, index) => (
            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt="Logo" className="logo" />
            </a>
          ))}
        </div>

        <h1 className="title">Poseidon</h1>

        <div className="donation-banner">
          <p>Support PulseChain development (VPS, Archive node, etc.)</p>
          <button onClick={() => window.open("https://poseidon.pls.fyi/", "_blank")}>
            🚀 Donate to Poseidon
          </button>
        </div>
      </header>

      <main className="main-content">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </main>

      <footer className="footer">
        <p>© Poseidon {new Date().getFullYear()}</p>
        <div className="disclaimer">
          <details>
            <summary>Disclaimer</summary>
            <p>The information provided is for informational purposes only. We make no guarantees about accuracy or completeness. Always do your own research and verify information before acting on it. Use at your own risk.</p>
          </details>
        </div>
      </footer>
    </div>
  );
}

export default App;