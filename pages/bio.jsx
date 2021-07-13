import React from "react";
import Head from "next/head";
import Header from "../layouts/Header/Header";
import H1 from "../components/Headings/H1";
import Socials from "../components/Socials/Socials";
const bio = () => {
  return (
    <div className="p-4 w-full">
      <Head>
        <title>Alysha Kyle | Bio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <div className="max-w-screen-lg w-full ml-auto mr-auto flex gap-6 mt-10">
        <img src="/ak-1.jpeg" alt="alysha kyle" className="avatar" />
        <div className="flex flex-col gap-6">
          <H1>Alysha Kyle</H1>
          <p className="font-thin text-gray-500">
            Alysha was born and raised in the small, rural town of Bancroft,
            Ontario. For as long as she can remember, music has always been
            apart of her life. Alysha sang with her mom and brother from the age
            of 2 to 'The Martin's' soundtracks or along with mom on the piano.
            At 14, Alysha learned how to play piano because she recognized a
            need at camp, and then learned how to play the guitar a few years
            later when her brother taught her some chords. This lead to leading
            worship at youth group, camp and church. Some musical influences
            over the years have been The Martin's, Rachel Lampa, Unhindered, and
            more recently Kari Jobe and Phil Wickham.
          </p>
          <p className="font-thin text-gray-500">
            Walking through different circumstances in life has helped Alysha
            come to realize what a privilege it is to lead others into the
            presence of God. Writing worship songs has deepened her
            understanding of God's love and grace, while also challenging her to
            personally live out what she claims to believe. This past year
            Alysha signed up for the Kingdom Music Academy, which gave her
            confidence to craft and refine full songs. She has also been apart
            of the Disciple a City Music crew who meet regularly to write,
            encourage and worship together in preparation for an upcoming live
            album.
          </p>
          <p className="font-thin text-gray-500">
            Alysha's hope for her songs is that they would lead people to a
            place of deep, personal encounter with God. That in coming before
            Him with a humble, teachable heart it will give Holy Spirit freedom
            to change us and cause us to grow. As we each begin to understand
            more of who we are in Christ, we will be able to boldly step out in
            faith to share His hope.
          </p>
          <Socials />
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:3EuxDDlSGYVjk2G3Tce4Fd?si=jTa9Ang4RmCrHeCqzQh6RQ&dl_branch=1&size=detail&theme=light"
            width="300"
            height="56"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        .avatar {
          aspect-ratio: 3 / 3;
          width: 300px;
          height: 300px;
        }
      `}</style>
    </div>
  );
};

export default bio;
