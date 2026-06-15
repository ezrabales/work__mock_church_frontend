import GridCardsDisplay from "../Information/GridCardsDisplay/GridCardsDisplay";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./Teams.css";

const Teams = () => {
  return (
    <div className="teams">
      <TextPicDisplay
        title={"Find a Team"}
        description={
          <>
            Serve alongside others as you use your gifts to make a difference in
            the church and the surrounding community.
          </>
        }
      />
      <GridCardsDisplay
        title={"Our Teams"}
        cards={[
          {
            title: "Hospitality Team",
            description:
              "Help create a warm and welcoming environment for every guest who walks through the doors. Serve alongside others to make people feel seen, valued, and at home.",
            btn: "Join Team",
            date: "Sundays",
            time: "8:30AM",
          },
          {
            title: "Production Team",
            description:
              "Support worship services through audio, lighting, video, and presentation technology. No experience is required—just a willingness to learn and serve.",
            btn: "Join Team",
            date: "Sundays",
            time: "8:00AM",
          },
          {
            title: "Kids Ministry Team",
            description:
              "Invest in the next generation by creating a safe, fun, and engaging environment where children can learn about Jesus.",
            btn: "Join Team",
            date: "Sundays",
            time: "9:00AM",
          },
          {
            title: "Worship Team",
            description:
              "Use your musical gifts to help lead the congregation in worship and create an atmosphere that points people toward God.",
            btn: "Join Team",
            date: "Thursdays",
            time: "6:30PM",
          },
          {
            title: "Community Outreach Team",
            description:
              "Serve local families and organizations through outreach projects, events, and practical acts of compassion throughout the community.",
            btn: "Join Team",
            date: "Monthly",
            time: "Varies",
          },
          {
            title: "Prayer Team",
            description:
              "Stand with others in prayer for the church, community, and individual needs while helping foster a culture of prayer.",
            btn: "Join Team",
            date: "Wednesdays",
            time: "6:30PM",
          },
          {
            title: "First Impressions Team",
            description:
              "Be one of the first faces people see when they arrive. Help guests navigate the campus and feel welcomed from the moment they arrive.",
            btn: "Join Team",
            date: "Sundays",
            time: "8:45AM",
          },
          {
            title: "Parking Team",
            description:
              "Assist with traffic flow, safety, and guest arrival to ensure a smooth and positive experience for everyone attending.",
            btn: "Join Team",
            date: "Sundays",
            time: "8:15AM",
          },
          {
            title: "Facilities Team",
            description:
              "Help maintain and improve church facilities so ministry can happen effectively in a clean, safe, and welcoming environment.",
            btn: "Join Team",
            date: "Monthly",
            time: "9:00AM",
          },
          {
            title: "Care Ministry Team",
            description:
              "Support individuals and families through encouragement, prayer, visits, and practical care during difficult seasons.",
            btn: "Join Team",
            date: "Flexible",
            time: "Varies",
          },
          {
            title: "Photography & Media Team",
            description:
              "Capture stories of life change and ministry through photography, video, and creative content that inspires and informs.",
            btn: "Join Team",
            date: "Sundays",
            time: "9:00AM",
          },
          {
            title: "Event Support Team",
            description:
              "Help plan, set up, and execute church events that create opportunities for connection, discipleship, and community impact.",
            btn: "Join Team",
            date: "As Needed",
            time: "Varies",
          },
        ]}
      />
    </div>
  );
};
export default Teams;
