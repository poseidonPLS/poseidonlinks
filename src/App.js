import { useState, useEffect, useRef } from "react";
import "./App.css";
import logo from "./logo.png";
import logoPulseX from "./logoPulseX.png";
import logoHEX from "./logoHEX.png";

// Array of fun facts and jokes for Fun Mode
const funFacts = [
  "PulseChain: Where transactions are faster than your morning coffee!",
  "Did you know? PulseChain aims to be the most energy-efficient blockchain!",
  "Fun fact: The PulseChain community is known for its vibrant and supportive members!",
  "PulseX: Trading made smoother than a well-oiled machine!",
  "Validators: The unsung heroes keeping the network secure!",
  "Gas estimates: Helping you avoid those 'oops' moments!",
  "Bridge status: Crossing chains like a boss!",
];

// Component to animate sections with a fade-in effect
const AnimatedSection = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
      return () => {
        observer.unobserve(element);
      };
    }
  }, []);

  return (
    <div ref={ref} className={`animated-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

// Updated Section component to use custom click handler and tooltips
const Section = ({ title, items, onButtonClick }) => (
  <div className="section">
    <h3>{title}</h3>
    <div className="button-grid">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(item.link)}
          className="card-button"
        >
          <span className="card-label">{item.label}</span>
          <span className="card-description">{item.description}</span>
        </button>
      ))}
    </div>
  </div>
);

function App() {
  // Theme state (dark/light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Fun Mode state
  const [funMode, setFunMode] = useState(() => {
    const savedFunMode = localStorage.getItem("funMode");
    return savedFunMode ? savedFunMode === "true" : false;
  });

  // State for displaying fun messages
  const [currentMessage, setCurrentMessage] = useState(null);

  // Sections with added descriptions for tooltips
  const sections = [
    {
      title: "Chrome Extensions",
      items: [
        {
          label: "PulseChain Site Checker (Chrome)",
          link: "https://chromewebstore.google.com/detail/pulsechain-site-checker/jlomlcignpojmjjmiginogpoeaeldpnf?hl=en",
          description: "Sniffing out PulseChain-friendly sites like a pro!",
        },
        {
          label: "PulseChain Site Checker (FireFox)",
          link: "https://addons.mozilla.org/en-US/firefox/addon/pulsechain-sitechecker/",
          description: "Firefox fans, we’ve got your back too!",
        },
        {
          label: "PulseChain Gas Estimates (Chrome)",
          link: "https://chromewebstore.google.com/detail/pulsechain-gas-estimates/mfedonkdkfnekjjnnceeklimanolfloo?hl=en",
          description: "No more gas guesswork—save those PLS!",
        },
        {
          label: "PulseChain Gas Estimates (FireFox)",
          link: "https://addons.mozilla.org/en-US/firefox/addon/pulsechain-gas-estimates/",
          description: "No more gas guesswork—save those PLS!",
        },
      ],
    },
    {
      title: "Socials",
      items: [
        {
          label: "YouTube Channel",
          link: "https://www.youtube.com/@poseidon5555",
          description: "Videos hotter than a PulseChain block!",
        },
        {
          label: "Twitter",
          link: "https://twitter.com/Poseidon_5555",
          description: "Tweets as quick as a PulseChain transaction!",
        },
        {
          label: "Telegram",
          link: "https://t.me/Poseidon_PLS",
          description: "Chat with the coolest crypto crew!",
        },
      ],
    },
    {
      title: "Telegram Bots",
      items: [
        {
          label: "PulseX Buys",
          link: "https://t.me/PulseXbuy",
          description: "Buy alerts faster than you can say ‘moon’!",
        },
        {
          label: "Price Bot",
          link: "https://t.me/PLSXpricebot",
          description: "Prices so fresh they’re still sizzling!",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          label: "Validator Income / Online Checker",
          link: "https://validator-income.vercel.app/",
          description: "Who’s earning that sweet validator juice?",
        },
        {
          label: "PulseChain Token Explorer",
          link: "https://check.pulsex.win/",
          description: "Explore tokens like a crypto treasure hunter!",
        },
        {
          label: "Block Explorer Backup (last 20 txns)",
          link: "https://lasttxns.vercel.app/",
          description: "Peek at the latest blockchain gossip!",
        },
        {
          label: "Official RPC Mempool",
          link: "https://PLSmempool.vercel.app/",
          description: "Dive into the transaction pool—splash!",
        },
        {
          label: "Impermanent Loss Calculator",
          link: "https://imp-loss.pulsex.win/",
          description: "Losses? More like temporary adventures!",
        },
        {
          label: "PulseChain Bridge Status",
          link: "https://bridge.pulsex.win/",
          description: "Bridge updates—cross with confidence!",
        },
        {
          label: "PulseChain Bridge Contracts Checker",
          link: "https://bcontracts.pulsex.win/",
          description: "Find that elusive contract—fast!",
        },
        {
          label: "PulseChain Token Liquidity and Volume",
          link: "https://tokenpls.pulsex.win/",
          description: "Liquidity so juicy you’ll want a sip!",
        },
        {
          label: "PulseChain Anniversary Countdown",
          link: "https://milestone.pulsex.win/",
          description: "Counting down to PulseChain milestones!",
        },
        {
          label: "PulseChain Validator Status",
          link: "https://valid.pulsex.win/",
          description: "Check the status of PulseChain validators!",
        },
        {
          label: "PulseChain Sync Duties",
          link: "https://syncduty.pulsex.win/",
          description: "Monitor validator sync duties!",
        },
        {
          label: "PulseChain Treasury",
          link: "https://track.pulsex.win/",
          description: "Track the PulseChain treasury!",
        },
        {
          label: "PulseX Farms Stats",
          link: "https://farms.pulsex.win/",
          description: "Statistics for PulseX farming rewards!",
        },
        {
          label: "PLS vs. PLSX Race to $0.0001",
          link: "https://race-pls.vercel.app/",
          description: "The race is on—place your bets!",
        },
      ],
    },
    {
      title: "Experimental Apps",
      items: [
        {
          label: "Slippage Simulator",
          link: "https://slippage.vercel.app/",
          description: "Slippage? More like a wild ride!",
        },
        {
          label: "LP Simulator",
          link: "https://lp-sim.vercel.app/",
          description: "Liquidity pools, but make it playful!",
        },
        {
          label: "PLP Pair Info",
          link: "https://plslp.vercel.app/",
          description: "Token pairs spilling all the tea!",
        },
      ],
    },
  ];

  // Persist theme and fun mode to localStorage
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

  useEffect(() => {
    localStorage.setItem("funMode", funMode.toString());
  }, [funMode]);

  // Custom button click handler for Fun Mode
  const handleButtonClick = (link) => {
    if (funMode) {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setCurrentMessage(randomFact);
      setTimeout(() => {
        window.open(link, "_blank");
        setCurrentMessage(null);
      }, 1000); // 1-second delay for the fun message
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="App">
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      {/* Fun Mode Toggle */}
      <button
        className="fun-mode-toggle"
        onClick={() => setFunMode(!funMode)}
        aria-label="Toggle fun mode"
      >
        {funMode ? "😜" : "😐"}
      </button>

      <header className="header">
        <div className="logo-container">
          {[
            { src: logoHEX, link: "https://hex.com" },
            { src: logo, link: "https://pulsechain.com" },
            { src: logoPulseX, link: "https://pulsex.com" },
          ].map((logo, index) => (
            <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt="Logo" className="logo" />
            </a>
          ))}
        </div>

        <h1 className="title">Poseidon</h1>

        {/* Playful Donation Banner */}
        <div className="donation-banner">
          <p>
            🌟 Join the PulseChain Quest! 🌟<br />
            Your support fuels our archive nodes, VPS, and wild crypto tools. Every donation powers the adventure!
          </p>
          <button onClick={() => window.open("https://poseidon.pls.fyi/", "_blank")}>
            🚀 Boost the Journey
          </button>
        </div>
      </header>

      <main className="main-content">
        {sections.map((section, index) => (
          <AnimatedSection key={index}>
            <Section
              title={section.title}
              items={section.items}
              onButtonClick={handleButtonClick}
            />
          </AnimatedSection>
        ))}
      </main>

      <footer className="footer">
        <p>© Poseidon {new Date().getFullYear()}</p>
        {/* Quirky Disclaimer */}
        <div className="disclaimer">
          <details>
            <summary>Disclaimer</summary>
            <p>
              This is all for fun and info! No promises on accuracy—crypto’s a wild ride. Do your homework and use at your own risk. In blockchain we trust, but chaos we expect! 😉
            </p>
          </details>
        </div>
      </footer>

      {/* Fun Mode Message Display */}
      {funMode && currentMessage && (
        <div className="fun-message">{currentMessage}</div>
      )}
    </div>
  );
}

export default App;