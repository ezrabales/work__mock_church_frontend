import { useNavigate } from "react-router-dom";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./About.css";
import {
  churchManWorship,
  oldCouplePhoto,
  smallStartUpChurch,
  teachingFromBible,
} from "../../assets";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <TextPicDisplay
        title={
          <>
            Glory of God. <br /> Radical Grace. <br />
            Sincere Worship
          </>
        }
        description={
          <>
            We are a Jesus Church. A small tribe of His followers connected by
            our common faith and a deep desire to see our city [and the world]
            come to know His power and beauty. We are not perfect. But Jesus is.
            Thankfully, we are a Jesus Church.
          </>
        }
        img={churchManWorship}
        imgClassName={"about__title-img"}
      />
      <TextPicDisplay
        title={
          <>
            What we <br /> believe
          </>
        }
        titleClassName={"about__text-title_reverse"}
        description={
          <>
            We live in shifting times but are rooted in eternal truths, the
            teachings of Holy Scripture. Here at Passion City Church we are
            guided by certain foundational beliefs and shaping values.
          </>
        }
        btns={[
          {
            text: "Learn More",
            className: "about__text-btn",
            onClick: () => navigate("/beliefs"),
          },
        ]}
        img={teachingFromBible}
        imgClassName={"about__beliefs-img"}
      />
      <TextPicDisplay
        title={
          <>
            Our <br /> History
          </>
        }
        titleClassName={"about__text-title"}
        description={
          <>
            Passion City Church began with a stirring in the hearts of Louie and
            Shelley Giglio for the local church. Born out of the Passion
            Movement (a decades-old movement among the collegiate generation),
            they sought to plant a local community of faith impacted and
            informed by the DNA of Passion.
            <br />
            <br />
            With a small team of people, that vision took flight in 2008, as
            small gatherings began in homes throughout Atlanta. The desire was
            to foster a family of believers connected by a common faith, on
            mission in the city and the world to amplify the name of Jesus.
            <br />
            <br />
            And that’s exactly what happened. Our first gathering was held on
            February 15, 2009, in Atlanta at The Tabernacle. From there, God
            faithfully provided, as our little tribe met at various locations
            all over the city of Atlanta until we landed in our first permanent
            gathering site at 515 Garson Drive. Since then we’ve added locations
            in the Cumberland and Trilith areas of Atlanta and a location in
            Washington D.C. whose weekly gatherings started in April of 2018.
            <br />
            <br />
            Passion City Church remains a place where the gospel is central and
            Jesus is always the lead story. We are a Jesus church and want to
            gather in worship and scatter to shine His light and love throughout
            the city and beyond.
          </>
        }
        descriptionClassName={"about__text-description"}
        btns={[
          {
            text: "Learn More",
            className: "about__text-btn",
          },
        ]}
        img={smallStartUpChurch}
        imgClassName={"about__history-img"}
      />
      <TextPicDisplay
        subtitle={"Our Leadership"}
        subtitleClassName={"about__text-subtitle"}
        title={
          <>
            Louie + Shelley <br /> Giglio
          </>
        }
        titleClassName={"about__text-leadership-title_reverse"}
        description={
          <>
            We live in shifting times but are rooted in eternal truths, the
            teachings of Holy Scripture. Here at Passion City Church we are
            guided by certain foundational beliefs and shaping values.
          </>
        }
        btns={[
          {
            text: "See our leadership",
            className: "about__text-leadership-btn",
            onClick: () => navigate("/leadership"),
          },
        ]}
        reverse
        img={oldCouplePhoto}
        imgClassName={"about__leadership-img"}
      />
    </div>
  );
};
export default About;
