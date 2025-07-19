import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rajat Dua</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Developer</span>{" "}
            <br />
            & Content Creator
          </h1>
          <p className="hero--section-description">
            💡 Crafting smart solutions through development & creative storytelling.
            <br />🧩 Blending code and content to build meaningful digital experiences.

            <br /> 🚀 Have a project or idea in mind? <br />Let’s bring it to life — together.
          </p>
        </div>
        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
