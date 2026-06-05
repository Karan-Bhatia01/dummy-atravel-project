import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-tagline mt-12">Plan your next escape</p>

      <h1 className="hero-title">
        Discover places that pull
        <br />
        you out of the everyday
      </h1>

      <p className="hero-description">
        Hand-picked travel packages and a place to keep
        the trips you love within reach.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">
          <span className="btn-icon">⊟</span>
          Explore packages
        </button>
        <button className="btn-secondary">
          <span>♡</span>
          My favourites
        </button>
      </div>

      <div className="hero-images">
        <div className="hero-image-card">
          <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcfc6b43976428fbc/6809096142b2cad8807c3cee/BCC-2025-EXPLORER-BALI-BEACHES-HEADER_MOBILE.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart" alt="Santorini" />
        </div>
        <div className="hero-image-card">
          <img src="https://images.ctfassets.net/wv75stsetqy3/DaKdXY2tkQGWeVQiCbSx7/ac01166282697e4e0cafb99180d35cd1/Thailand_Featured.jpg?q=60&fit=fill&fm=webp" alt="Kyoto in Autumn" />
        </div>
        <div className="hero-image-card">
          <img src="https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Imported_Blog_Media/shutterstock_2487172969-jpg.jpg?width=1600&height=1067&name=shutterstock_2487172969-jpg.jpg" alt="Marrakech" />
        </div>
      </div>
    </section>
  );
}

export default Hero;