import {
  chapelWorship,
  churchLife,
  churchSupportGroup,
  kidsMinistry,
  nurseryMinistry,
  studentsGroup,
  youthGroup,
} from "../../assets";
import DeckDisplay from "../Information/DeckDisplay/DeckDisplay";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./LifeInChurch.css";

const LifeInChurch = () => {
  return (
    <div className="life">
      <TextPicDisplay
        title={
          <>
            Life in <br />
            Church
          </>
        }
        description={
          <>
            There’s so much more to church than Sunday services. We’re a family,
            a community, where people of all ages can find a home. Read on to
            find out about some of the things that happen in our church – on
            Sundays and during the week.
          </>
        }
        img={churchLife}
      />
      <DeckDisplay
        cards={[
          {
            title: "Little Ambassadors",
            description: (
              <>
                For ages 3-11, our Little Ambassadors meet on Sundays during the
                services, with termly Creative nights. There’s a family room for
                parents with babies, as well as a separate room for
                breastfeeding. Kids worship together, learn about God’s Word,
                pray, play games and more. We also give them the chance to serve
                within the kids’ ministry, so they can grow in their unique
                gifting.
              </>
            ),
            btns: [
              {
                content: "Learn more",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Sign up",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: kidsMinistry,
            imgClassName: "life__kids-img",
          },
          {
            title: "Youth Ministry",
            description: (
              <>
                Meeting during the Sunday morning services and on Friday nights
                from 7-9pm, Youth Ministry is for ages 11-18. With a service,
                plus sports, food, games and groups, it’s a great way for teens
                to connect with God and meet new people.
              </>
            ),
            btns: [
              {
                content: "Learn more",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Email",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: youthGroup,
          },
          {
            title: (
              <>
                Young Adults <br /> YA
              </>
            ),
            description: (
              <>
                For young adults age 18-25 there's YA. With various groups and
                meet ups, services and even a dedicated conference, there’s
                plenty happening here.
              </>
            ),
            btns: [
              {
                content: "Learn more",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Email",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: studentsGroup,
          },
          {
            title: "DISPLAY Nursery",
            description: (
              <>
                Our registered and liscenced nursery offers a nurturing and
                caring environment for your little ones in those all-important
                early years. Visit our page to find out more about us.
              </>
            ),
            btns: [
              {
                content: "Learn more",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Call us",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: nurseryMinistry,
          },
          {
            title: "Chapel",
            description: (
              <>
                Every Tuesday in term-time, we gather to worship, pray and study
                the Word, with a particular focus on leadership and lifestyle at
                10.30am. Everyone is welcome to come along.
              </>
            ),
            btns: [
              {
                content: "Directions",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Email",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: chapelWorship,
            imgClassName: "life__chapel-img",
          },
          {
            title: (
              <>
                Wellbeing <br /> Wednesday
              </>
            ),
            description: (
              <>
                Our wellbeing group meet every Wednesday, with Bible teaching,
                lunch, a job club, mental health support and more. This is a
                lovely kind and welcoming group – why not join us and see for
                yourself?
              </>
            ),
            btns: [
              {
                content: "Directions",
                follow: 0.3,
                className: "life__card-btn",
              },
              {
                content: "Email",
                follow: 0.3,
                className: "life__card-btn-alternate",
              },
            ],
            img: churchSupportGroup,
          },
        ]}
      />
    </div>
  );
};
export default LifeInChurch;
