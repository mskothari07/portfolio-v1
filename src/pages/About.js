import Navbar from "../components/Navbar";
import "../css/About.css";

export default function About() {
  const heroImage = ("heroimage.jpg");
  const instaLogo = ("insta-logo.jpg");
  return (
    <div className="about-section">
      <h1 className="title">WHO AM I?</h1>
      <div className="content">
        <div className="heroImage">
          <img class="image" alt="Meet Kothari" src={heroImage} />
        </div>
        <div className="aboutSumup">
          <h4 className="aboutSumup-p">
            Hi, I'm Meet, a full-stack developer with a passion for technology
            that knows no bounds. My journey into the world of coding began when
            I was just a 10th standard student, fascinated by the magic of
            Google Maps. Little did I know that this curiosity would spark a
            chain reaction, leading me to pursue a career in engineering and
            eventually, coding. As I delved deeper into the world of technology,
            I found inspiration in the likes of Tony Stark, aka Iron Man, and
            his incredible suits. This fascination with innovation and
            problem-solving drove me to choose electronic engineering as my
            path. However, it was coding that ultimately won my heart, and I've
            been hooked ever since.
          </h4>
        </div>
        <div className="toggles">
          {/* Section One */}
          <details>
            <summary className="details-summary">
              <span className="details-summary-span">&#x25B8;</span>
              <h2 className="details-summary-h2">
                My Experience: Building the Future of Payments
              </h2>
            </summary>
            <p className="details-p">
              With over 2 years of experience in software development and cloud
              computing, I've had the privilege of working with a payment
              aggregator, integrating numerous payment gateways, and
              collaborating with clients and teams to create the world's first
              universal payment platform. My portfolio boasts an impressive list
              of big-name clients, including Google Pay, Apple Pay, Stripe,
              Adyen, Razorpay, UPI, and many more. My Approach: Consistency,
              Curiosity, and a Passion for Problem-Solving As a developer, I'm
              driven by a consistent desire to tackle tough challenges and build
              robust solutions. I thrive in environments where I can help
              others, and as a team lead, I take pride in guiding my team of 5
              to overcome obstacles and achieve their goals. My core values may
              not be explicitly defined, but my actions speak louder than words
              – I'm always eager to lend a helping hand, and my curiosity drives
              me to continuously learn and grow.
            </p>
          </details>
          {/* Section Two */}
          <details>
            <summary className="details-summary">
              <span className="details-summary-span">&#x25B8;</span>
              <h2 className="details-summary-h2">
                My Unique Strength: A User-Centric Approach
              </h2>
            </summary>
            <p className="details-p">
              What sets me apart from other developers is my ability to think
              from the end-user's perspective. I don't just code to finish
              tasks; I build solutions that are robust, scalable, and designed
              to last. My approach is centered around creating long-term value,
              and I'm always looking for ways to improve and innovate.
            </p>
          </details>
          {/* Section Three */}
          <details>
            <summary className="details-summary">
              <span className="details-summary-span">&#x25B8;</span>
              <h2 className="details-summary-h2">
                Beyond Code: My Interests and Passions
              </h2>
            </summary>
            <p className="details-p">
              When I'm not coding, you can find me deconstructing applications,
              making videos, traveling, or exploring the fascinating world of
              history. I'm also intrigued by the unknown, and I love discovering
              things that are not so common. This curiosity drives me to stay
              ahead of the curve and bring fresh perspectives to my work.
              <div className="social-about">
                <img src={instaLogo} alt="insta-log" className="insta-logo" />
                <a
                  className="insta-about"
                  href="https://www.instagram.com/kothari.meet7"
                >
                  Follow for more
                </a>
              </div>
            </p>
          </details>
          {/* Section Four */}
          <details>
            <summary className="details-summary">
              <span className="details-summary-span">&#x25B8;</span>
              <h2 className="details-summary-h2">Awards and Achievements</h2>
            </summary>
            <div className="achivements-p">
              <ul>
                🏆 Excellent Performer of the Year 2024 at Blazeclan
                Technologies
              </ul>
              <ul>📖 AWS Certified Cloud partitioner</ul>
              <ul>🏆 Quterly value award x2</ul>
            </div>
          </details>
        </div>
        <div className="view-more">
          <a href="/gallery"type="Submit">View Certificate Gallery</a>
        </div>
      </div>
      <footer className="footer">
        <Navbar />
      </footer>
    </div>
  );
}
