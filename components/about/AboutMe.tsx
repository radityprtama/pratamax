import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Raditya Alia Pratama</b>, you can call me{" "}
        <b>Raditya</b> or <b>Dit</b> for short. If you&apos;re my school/college
        friend you maybe know me as <b>Zurra</b>.
      </p>
      <p>
        I grew up in a city called{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=kota+tangerang"
        >
          Kota Tangerang
        </Link>
        . Attend school in{" "}
        <Link
          className="underline"
          isExternal
          href="https://smk.nusantara1.sch.id/"
        >
          SMK Nusantara 1
        </Link>{" "}
        with my major in{" "}
        <Link
          className="underline"
          href="https://www.gamelab.id/news/1809-mengenal-jurusan-pplg-definisi-keunggulan-dan-prospek-kerjanya"
          isExternal
        >
          <i>RPL (Software Engineering)</i>
        </Link>
        , through this major, I will learn a lot about programming and
        application development. I'm currently in my last year of high school
        and I'm very passionate.
      </p>
      <p>
        I love exploring everything related to technology. And i like join many
        community and orgs to expand my knowledge, besides liking coding{" "}
        <b>
          I'm passionate about UI/UX Design - I've like created many things. I'm
          also interested in design and regularly create logos, posters, and
          other visual materials
        </b>
        , in short, I'm a tech enthusiast who loves to learn new things.
      </p>
    </section>
  );
};

export default AboutMe;
