import "./Leadership.css";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import {
  churchCouple0,
  churchCouple1,
  churchCouple2,
  churchCouple3,
  jesusSign,
  oldCouplePhoto,
} from "../../assets";
import TextDisplay from "../Information/TextDisplay/TextDisplay";

const Leadership = () => {
  const board = [
    {
      title: "Billy Beacham",
      description: <>Founder – Student Discipleship Ministries</>,
    },
    {
      title: "Louie Giglio",
      description: (
        <>
          Original Visionary – Passion Movement and Pastor – Passion City Church
        </>
      ),
    },
    {
      title: "Shelley Giglio",
      description: <>Chief Strategist – Passion Movement</>,
    },
    {
      title: "Marc Kohler",
      description: <>Business Development – Alliance GP</>,
    },
    {
      title: "Dr. Crawford Loritts",
      description: <>President/Founder – Beyond Our Generation</>,
    },
    {
      title: "Tom Mosley",
      description: <>Campus Pastor – Bayou City Fellowship (Retired)</>,
    },
    {
      title: "Todd Peterson",
      description: <>Chairman Emeritus – The Seed Company</>,
    },
    {
      title: "Jerome Smith",
      description: (
        <>Minister to Families – Tallowood Baptist Church (Retired)</>
      ),
    },
  ];
  return (
    <div className="leader">
      <TextPicDisplay
        title={"Our Leadership"}
        description={
          <>
            We may be biased, but we think we have the very best team of people
            around leading our House week in and week out! DISPLAY&nbsp;CHURCH
            is led by Louie + Shelley Giglio, who are supported by an incredible
            team of some of the most gifted, creative, winsome and hard-working
            people around.
          </>
        }
        img={jesusSign}
      />

      <div className="leader__pastors-container">
        <h2 className="leader__pastors-title">Leadership Team</h2>
        <TextDisplay
          description={
            <>
              We believe we are blessed with a dedicated team of leaders who
              serve our house week after week.
              <br />
              <br />
              Display Church is shepherded by a leadership team committed to our
              mission: to Display Christ and equip His ambassadors. Our Lead
              Pastors serve as the Visionary Architects of this movement,
              supported by an incredible team of some of the most gifted,
              creative, and hard-working people in our community.
              <br />
              <br />
              Together, they guide our worship, discipleship, and service,
              ensuring that every ministry point helps you live for Christ at
              home, at work, and in the world.
            </>
          }
        />
      </div>
      <div className="leader__board-container">
        <h2 className="leader__board-title">Our Board</h2>
        <p className="leader__board-description">
          DISPLAY&nbsp;CHURCH is governed by a board of directors made up of
          individuals with a long history with the ministry of Christ. Their
          integrity, wisdom, experience and spiritual maturity are exceptional.
          As well, they are fully engaged with all God is doing through the
          Church to serve every generation and build up the local church. They
          prayerfully provide guidance and discernment for all that happens in
          and through the ministries of DISPLAY&nbsp;CHURCH.
        </p>
        <p className="leader__board-subdescription">
          Below is a list of the current members of the DISPLAY&nbsp;CHURCH
          Board.
        </p>
        <div className="leader__board-members-container">
          {board.map((member, i) => (
            <div key={i} className="leader__board-member">
              <h3 className="leader__member-title">{member.title}</h3>
              <p className="leader__member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Leadership;
