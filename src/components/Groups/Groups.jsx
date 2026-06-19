import {
  churchGroupJumping,
  EquippingForPrayerAndIntercession,
  Group6thAnd7thGradeGirls,
  Group8thAnd9thGradeGirls,
  GroupHighSchoolGirls,
  GroupHighSchoolGuys,
  GroupMiddleSchoolGuys,
  MensWeeklyBreakfast,
  MonthlyHomeGroup,
  SermonBasedGroupMen,
  TraditionalBibleStudy,
  WednesdayPrayerGroup,
  YoungAdultWomenSmallGroup,
} from "../../assets";
import GridCardsDisplay from "../Information/GridCardsDisplay/GridCardsDisplay";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./Groups.css";

const Groups = () => {
  return (
    <div className="groups">
      <TextPicDisplay
        title={"Find a Group"}
        description={
          <>
            Whether you’re into sewing or cycling, curry or creative, there’s a
            group here for you. We have special interests, Bible study, social
            groups and more.
          </>
        }
        img={churchGroupJumping}
        imgClassName={"groups__main-img"}
      />
      <GridCardsDisplay
        title={"Our Groups"}
        cards={[
          {
            title: "Sermon Based Group - Men - Antwine",
            description: (
              <>
                Join other men for meaningful discussion and practical
                application of recent sermons. Grow in faith, accountability,
                and biblical community together.
              </>
            ),
            btn: "Register Here",
            date: "Thursdays",
            time: "6:30AM",
            img: SermonBasedGroupMen,
          },
          {
            title: "18|28 Young Adult Women Small Group",
            description: (
              <>
                A welcoming community for young adult women to build
                friendships, study Scripture, and encourage one another through
                life's challenges.
              </>
            ),
            btn: "Register Here",
            date: "Thursdays",
            time: "6:30PM",
            img: YoungAdultWomenSmallGroup,
          },
          {
            title: "Equipping for Prayer and Intercession",
            description: (
              <>
                Learn how to develop a deeper prayer life while growing in
                confidence and effectiveness as an intercessor for others.
              </>
            ),
            btn: "Register Here",
            date: "Thursdays",
            time: "6:30PM",
            img: EquippingForPrayerAndIntercession,
          },
          {
            title: "Traditional Bible Study - Grimes",
            description: (
              <>
                Dive deeper into God's Word through verse-by-verse study and
                engaging discussion in a traditional classroom-style setting.
              </>
            ),
            btn: "Register Here",
            date: "Sundays",
            time: "9:30AM",
            img: TraditionalBibleStudy,
          },
          {
            title: "Wednesday Prayer Group",
            description: (
              <>
                Gather weekly to pray for the church, community, and personal
                needs while strengthening your relationship with God through
                prayer.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "12:00PM",
            img: WednesdayPrayerGroup,
          },
          {
            title: "Men's Weekly Breakfast - Ray Antwine",
            description: (
              <>
                Start your week with fellowship, encouragement, and meaningful
                conversation over breakfast with other men.
              </>
            ),
            btn: "Register Here",
            date: "Mondays",
            time: "8:00AM",
            img: MensWeeklyBreakfast,
          },
          {
            title: "Monthly Home Group - Whitlow / Walker",
            description: (
              <>
                Connect with others in a relaxed home environment focused on
                friendship, faith, and authentic community.
              </>
            ),
            btn: "Register Here",
            date: "Last Sunday of the Month",
            time: "6:00PM",
            img: MonthlyHomeGroup,
          },
          {
            title: "C|Y Group High School Girls",
            description: (
              <>
                A safe and encouraging space for high school girls to grow in
                their faith, friendships, and understanding of God's Word.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "6:30PM",
            img: GroupHighSchoolGirls,
          },
          {
            title: "C|Y Group 6th & 7th Grade Girls",
            description: (
              <>
                Middle school girls can build lasting friendships, have fun, and
                discover how faith applies to everyday life.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "6:30PM",
            img: Group6thAnd7thGradeGirls,
          },
          {
            title: "C|Y Group 8th & 9th Grade Girls",
            description: (
              <>
                Designed for young women navigating the transition into high
                school while growing in Christ-centered relationships.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "6:30PM",
            img: Group8thAnd9thGradeGirls,
          },
          {
            title: "C|Y Group High School Guys",
            description: (
              <>
                A place for high school guys to strengthen their faith, build
                character, and connect with peers who share their values.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "6:30PM",
            img: GroupHighSchoolGuys,
          },
          {
            title: "C|Y Group Middle School Guys",
            description: (
              <>
                Middle school boys can grow in their relationship with Christ
                while building friendships through discussion and activities.
              </>
            ),
            btn: "Register Here",
            date: "Wednesdays",
            time: "6:30PM",
            img: GroupMiddleSchoolGuys,
          },
        ]}
      />
    </div>
  );
};
export default Groups;
