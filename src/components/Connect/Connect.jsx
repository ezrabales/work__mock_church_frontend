import { useNavigate } from "react-router-dom";
import CardSlider from "../Information/CardSlider/CardSlider";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./Connect.css";
import { churchGroup, churchTeams, connectedGroup } from "../../assets";

const Connect = () => {
  const navigate = useNavigate();
  return (
    <div className="connect">
      <TextPicDisplay
        title={
          <>
            Life is better <br />
            when you go <br /> through it <br /> together
          </>
        }
        description={
          "Be part of the SOUL family – join a group and team and get connected today. "
        }
        img={connectedGroup}
      />
      <CardSlider
        title={"New Here?"}
        cards={[
          {
            title: "SOUL Path",
            description:
              "Your chance to find out more about us, ask questions and meet key members of our team and leadership.",
            btn: "SIGN UP",
          },
          {
            title: "Alpha",
            description:
              "Who is Jesus? Why read the Bible? Why do bad things happen to good people? Register your interest for Alpha to ask the big questions.",
            btn: "ENQUIRE",
          },
          {
            title: "Follow Jesus",
            description:
              "If you’re a new Christian, this is for you. Our seven-session course will help you learn and grow on your faith journey.",
            btn: "SIGN UP",
          },
          {
            title: "Bible Resources",
            description:
              "Not sure where to start with the Bible? Find out more about it here and dive right in!",
            btn: "LEARN MORE",
          },
          {
            title: "Life Groups",
            description:
              "Build meaningful relationships, grow in your faith, and find community through one of our weekly Life Groups.",
            btn: "FIND A GROUP",
          },
          {
            title: "Serve Team",
            description:
              "Use your gifts to make a difference. Join one of our teams and help create a welcoming church experience.",
            btn: "GET INVOLVED",
          },
          {
            title: "Prayer",
            description:
              "Need prayer or support? Our team would love to stand with you and pray for whatever you're facing.",
            btn: "REQUEST PRAYER",
          },
          {
            title: "Next Steps",
            description:
              "Ready to take the next step in your faith journey? Explore baptism, membership, serving, and more.",
            btn: "LEARN MORE",
          },
        ]}
      />
      <TextPicDisplay
        title={
          <>
            FIND A <br /> GROUP
          </>
        }
        titleClassName={"connect__text-title"}
        description={
          "Whether you’re into sewing or cycling, curry or creative, there’s a group here for you. We have special interests, Bible study, social groups and more."
        }
        btns={[
          {
            text: "LEARN MORE",
            className: "connect__text-btn",
            onClick: () => navigate("/groups"),
          },
        ]}
        img={churchGroup}
      />
      <TextPicDisplay
        reverse
        title={
          <>
            FIND A <br /> TEAM
          </>
        }
        titleClassName={"connect__text-title_reverse"}
        description={
          "Serving on a team is the best way to meet people and put down roots. Whether you’re into tech, photography, building maintenance, admin or you’re a friendly face, we can help you find your perfect fit!"
        }
        btns={[
          {
            text: "LEARN MORE",
            className: "connect__text-btn",
            onClick: () => navigate("/teams"),
          },
        ]}
        img={churchTeams}
        imgClassName={"connect__img_reverse"}
      />
    </div>
  );
};
export default Connect;
