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

const Leadership = () => {
  const pastors = [
    {
      title: "Ben + Donna Stuart",
      description: (
        <>
          Ben Stuart is the pastor of Passion City Church, Washington D.C. Prior
          to joining Passion City Church, Ben served as the executive director
          of Breakaway Ministries on the campus of Texas A&amp;M. Ben earned a
          master’s degree in historical theology from Dallas Theological
          Seminary.
        </>
      ),
      img: churchCouple0,
    },
    {
      title: "Brad + Brittany Jones",
      description: (
        <>
          Passion City Church 515 is pastored by Brad Jones. Together, he and
          his wife Brittany have been a part of the Passion Movement for over a
          decade helping carry the heartbeat of Passion Conference and Passion
          City Church. They live in Atlanta with their two children, Caleb and
          Addy.
        </>
      ),
      img: churchCouple1,
    },
    {
      title: "Jonathan + Mary Pickens",
      description: (
        <>
          Jonathan Pickens serves as the Cumberland Location Pastor at Passion
          City Church. He is passionate about helping people know, follow, and
          enjoy Jesus. Jonathan graduated from the University of Georgia and
          holds a Master’s in Historical Theology from Dallas Theological
          Seminary. He and his wife, Mary, live in Marietta with their two
          daughters, Rae and Merit. Together, Jonathan and Mary love building
          the church.
        </>
      ),
      img: churchCouple2,
    },
    {
      title: "Dan + Jo Watson",
      description: (
        <>
          Dan Watson serves as the Location Pastor at Passion City Church at
          Trilith located in the greater Atlanta area. He and his wife, Jo, are
          passionate about raising up the next generation of leaders and enjoy
          traveling the globe inspiring people to live for the glory of God.
          Married for over 15 years with four beautiful children, Dan and Jo are
          originally from the United Kingdom where they pastored a thriving
          ministry before relocating to the United States.
        </>
      ),
      img: churchCouple3,
    },
  ];

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
            around leading our House week in and week out! Passion City Church
            is led by Louie + Shelley Giglio, who are supported by an incredible
            team of some of the most gifted, creative, winsome and hard-working
            people around.
          </>
        }
        img={jesusSign}
      />
      <TextPicDisplay
        subtitle={"Our Leadership"}
        title={"Louie + Shelley Giglio"}
        description={
          <>
            Louie is the Visionary Architect and Director of the Passion
            Movement, comprised of Passion Conferences, Passion City Church,
            Passion Publishing and sixstepsrecords, and the founder of Passion
            Global Institute. Shelley is the Chief Strategist, Director of Label
            Operations and Artist Management for sixstepsrecords, co-founder of
            the Passion Movement, and leads The GROVE, a gathering for the Women
            of Atlanta.
          </>
        }
        img={oldCouplePhoto}
        imgClassName={"leader__main-pastors-pic"}
      />
      <div className="leader__pastors-container">
        <h2 className="leader__pastors-title">Our Pastors</h2>
        {pastors.map((pastor, i) => (
          <TextPicDisplay
            key={i}
            backgroundColor="#e8e1d8"
            title={pastor.title}
            titleClassName={"leader__pastor-title"}
            description={pastor.description}
            descriptionClassName={"leader__pastor-description"}
            img={pastor.img}
            imgClassName={"leader__pastor-img"}
          />
        ))}
      </div>
      <div className="leader__board-container">
        <h2 className="leader__board-title">Our Board</h2>
        <p className="leader__board-description">
          Passion, Inc. is governed by a board of directors made up of
          individuals with a long history with the ministry of Passion. Their
          integrity, wisdom, experience and spiritual maturity are exceptional.
          As well, they are fully engaged with all God is doing through Passion
          to serve the collegiate generation and build up the local church. They
          prayerfully provide guidance and discernment for all that happens in
          and through the ministries of Passion.
        </p>
        <p className="leader__board-subdescription">
          Below is a list of the current members of the Passion Board.
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
