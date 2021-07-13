import Head from "next/head";
import Socials from "../components/Socials/Socials";
import Header from "../layouts/Header/Header";
import H1 from "../components/Headings/H1";
import Footer from "../layouts/Footer/Footer";
export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Alysha Kyle</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <section className="flex flex-col items-center mt-20 px-4">
        <H1 className="lg:text-7xl text-2xl max-w-screen-lg text-center hero-title">
          Worship leader, Songwriter, Artist
        </H1>
        <div className="flex  w-full max-w-screen-md shadow-lg mt-20 mobile-column">
          <img
            src="/ak-profile.jpeg"
            alt=""
            className="object-cover hero-img"
          />
          <div className="hero-blurb w-full p-4 flex flex-col gap-4">
            <p className="font-thin text-gray-700">
              Alysha was born and raised in the small, rural town of Bancroft,
              Ontario. For as long as she can remember, music has always been
              apart of her life.
            </p>
            <p className="font-thin text-gray-700">
              Alysha's hope for her songs is that they would lead people to a
              place of deep, personal encounter with God. That in coming before
              Him with a humble, teachable heart it will give Holy Spirit
              freedom to change us and cause us to grow.{" "}
            </p>
            <Socials />
          </div>
        </div>

        <span className="divider flex items-center w-full max-w-screen-md mt-20">
          <hr className="w-full" />
          <p className="whitespace-nowrap text-gray-700 mx-4 ">
            Listen to my latest song
          </p>
          <hr className="w-full" />
        </span>

        <div className="w-full max-w-screen-md mt-10 ">
          <h2 className="text-gray-700">Great Expectation</h2>
          <p className="text-gray-500 font-thin mt-2">
            In Romans 3 it talks about how my unbelief does not weaken God’s
            faithfulness. Not that I don’t believe he exists- but do I trust
            that he will be faithful even if things don’t look like I think they
            should? I’ve had to surrender a lot this year and learn how to get
            desperate for the Lord. This song is very much about what it looks
            like to find God on my knees and trust that his goodness and mercy
            will follow me all the days of my life.
          </p>
          <iframe
            src="https://open.spotify.com/embed/track/27DqbjKIrPBEBqaBqwrsvB"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            className="shadow-lg mt-8"
          ></iframe>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hero-blurb {
          background-color: #faedcd;
        }

        .hero-img {
          width: 230px;
        }

        hr {
          border-top-color: #ccd5ae;
        }

        @media screen and (max-width: 425px) {
          .mobile-column {
            flex-direction: column;
          }

          .hero-img {
            width: 100%;
          }

          .hero-title {
            font-size: 3vw !important;
          }
        }
      `}</style>
    </div>
  );
}
