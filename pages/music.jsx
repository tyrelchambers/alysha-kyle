import React from "react";
import Head from "next/head";
import Header from "../layouts/Header/Header";
import H1 from "../components/Headings/H1";
import Socials from "../components/Socials/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faSpotify } from "@fortawesome/free-brands-svg-icons";
import SocialWithLink from "../components/SocialWithLink/SocialWithLink";
const music = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Alysha Kyle | Music</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="max-w-screen-lg mr-auto ml-auto mt-10">
        <H1 className="text-4xl text-center text-gray-800">
          Alysha Kyle Music
        </H1>
        <div className="w-full flex justify-center mt-6">
          <Socials />
        </div>
        <div className="flex flex-col w-full mt-10">
          <h2 className="text-2xl flex gap-4 items-center">
            <hr className="w-full" /> Posture <hr className="w-full" />
          </h2>
          <div className="flex mt-4">
            <img
              src="/posture.png"
              alt="Posture"
              className="object-cover hero-img mr-8"
            />
            <div className="hero-blurb w-full flex flex-col gap-4">
              <p className="font-thin text-gray-500 ">
                When I look at the world around me, it can get very discouraging
                knowing there's very little I can do to change it. Sometimes I
                would catch myself on the brink of giving up. What's the point
                anyways? It wasn't until I began learning to surrender my need
                to control, and fixed my eyes on Jesus, that I saw a huge change
                in my own heart.
              </p>
              <p className="font-thin text-gray-500">
                That change in me started to shift my perspective as I learned
                God's love and compassion for people. This song is the butterfly
                emerging from the chrysalis. The ongoing transformation that can
                only happen when I allow God space to renew my mind, so that I
                can be filled to overflowing with humility, grace and ultimately
                His peace.
              </p>
              <div className="flex gap-8">
                <SocialWithLink
                  href="https://music.apple.com/us/album/posture/1561733876?i=1561733877"
                  icon={faMusic}
                />
                <SocialWithLink
                  href="https://open.spotify.com/track/01025YqFXW6N1g0tRasABB?si=ae22748ddc3c4574"
                  icon={faSpotify}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-20">
          <h2 className="text-2xl flex gap-4 items-center">
            <hr className="w-full" /> Worthy <hr className="w-full" />
          </h2>
          <div className="flex mt-4">
            <img
              src="/worthy.jpeg"
              alt="Worthy"
              className="object-cover hero-img mr-8"
            />
            <div className="hero-blurb w-full flex flex-col gap-4">
              <p className="font-thin text-gray-500 ">
                This song came from a quiet moment of worship as I was battling
                with fear of the unknown. I have watched strongholds crumble in
                my own life as I've learned to make Jesus the centre of my life.
                I pray that this song brings breakthrough in the lives of anyone
                who declares that Jesus is worthy.
              </p>
              <div className="flex gap-8">
                <SocialWithLink
                  href="https://music.apple.com/us/album/worthy/1551228881?i=1551228882"
                  icon={faMusic}
                />
                <SocialWithLink
                  href="https://open.spotify.com/track/3XD6q2WvyoBmdXMcsKiC8L?si=cdf49a8a9fcc4109"
                  icon={faSpotify}
                />
                <SocialWithLink
                  href="https://music.amazon.ca/albums/B08VCVFWFJ?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&trackAsin=B08VDCNGP2"
                  icon={faAmazon}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-20">
          <h2 className="text-2xl flex gap-4 items-center">
            <hr className="w-full" /> Great Expectation
            <hr className="w-full" />
          </h2>
          <div className="flex mt-4">
            <img
              src="/ge.jpeg"
              alt="Great Expectation"
              className="object-cover hero-img mr-8"
            />
            <div className="hero-blurb w-full flex flex-col gap-4">
              <p className="font-thin text-gray-500 ">
                In Romans 3 it talks about how my unbelief does not weaken God’s
                faithfulness. Not that I don’t believe he exists- but do I trust
                that he will be faithful even if things don’t look like I think
                they should? I’ve had to surrender a lot this year and learn how
                to get desperate for the Lord. This song is very much about what
                it looks like to find God on my knees and trust that his
                goodness and mercy will follow me all the days of my life.
              </p>
              <div className="flex gap-8">
                <SocialWithLink
                  href="https://music.apple.com/us/album/great-expectation/1546156148?i=1546156149"
                  icon={faMusic}
                />
                <SocialWithLink
                  href="https://open.spotify.com/track/27DqbjKIrPBEBqaBqwrsvB?si=24d30e95f2c64c39"
                  icon={faSpotify}
                />
                <SocialWithLink
                  href="https://music.amazon.ca/albums/B08R6Y998N?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&trackAsin=B08R71W8D5"
                  icon={faAmazon}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .hero-img {
          width: 200px;
          height: 200px;
          border-radius: 5px;
        }

        hr {
          border-top-color: #ccd5ae;
        }

        h2 {
          color: #8fa253;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default music;
