import "./Main.css";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import CardSlider from "../Information/CardSlider/CardSlider";
import OnPageForm from "../OnPageForm/OnPageForm";
import { useNavigate } from "react-router-dom";
import { heroVideo, welcomingHug } from "../../assets";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__hero-vid-container">
        <video
          className="main__hero-vid"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <TextPicDisplay
        title={"Welcome Home"}
        description={
          <>
            Display Church is a vibrant Christ-centered community where we love
            Jesus and love people. As ambassadors of His kingdom, we are
            dedicated to displaying Christ in our everyday lives. We'd love to
            see you here soon as we live out our mission together.
            <br />
            <br />
            We meet every Sunday at 9:00 AM and 11:00 AM. <br /> DISPLAY CHURCH
            Some St. Kalispell, MT <br />
            See you there!
          </>
        }
        img={welcomingHug}
      />
      <CardSlider
        cards={[
          {
            title: "Services",
            description: (
              <>
                Everyone is invited to experience Jesus in our welcoming space.
                Learn what to expect when you visit us.
              </>
            ),
            btn: "LEARN MORE",
            onClick: () => navigate("/planYourVisit"),
          },
          {
            title: "Pastoral Care",
            description: (
              <>
                Looking for prayer support? Our pastoral care team is on hand to
                pray with you. Submit your prayer requests here.
              </>
            ),
            btn: "EMAIL US",
          },
          {
            title: "Connect",
            description: (
              <>
                We're big on friendship and community, so we run lots of groups
                where you can connect with like-minded people.
              </>
            ),
            btn: "LEARN MORE",
            onClick: () => navigate("/connect"),
          },
          {
            title: "Grow",
            description: (
              <>
                Serve as an ambassador for Christ and actively participate in
                the mission on our volenteer team. It's also a great way to meet
                new people.
              </>
            ),
            btn: "LEARN MORE",
            onClick: () => navigate("/teams"),
          },
          {
            title: "Generations",
            description: (
              <>
                From tots to teens and beyond, we have groups for every age.
                You’re never too young or too old to be part of
                DISPLAY&nbsp;CHURCH!
              </>
            ),
            btn: "LEARN MORE",
            onClick: () => navigate("/groups"),
          },
          {
            title: "Foundation",
            description: (
              <>
                DISPLAY Foundation is our outreach arm, meeting the needs of the
                people in Kalispell and the valley by showing them Jesus' love.
              </>
            ),
            btn: "LEARN MORE",
          },
        ]}
      />
      <div className="main__form-container">
        <p className="main__form-subtitle">Sign Up</p>
        <h2 className="main__form-title">Stay up to date</h2>
        <p className="main__form-description">
          Sign up below for the latest news and updates from Display Church.
        </p>
        <OnPageForm
          inputs={[
            {
              name: "firstName",
              type: "text",
              placeholder: "First Name *",
              required: true,
            },
            {
              name: "lastName",
              type: "text",
              placeholder: "Last Name *",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address *",
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Main;
