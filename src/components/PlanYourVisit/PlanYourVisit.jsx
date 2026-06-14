import { useEffect } from "react";
import { useGlobal } from "../GlobalState/GlobalState";
import DropDownListDisplay from "../Information/DropDownListDisplay/DropDownListDisplay";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./PlanYourVisit.css";

const PlanYourVisit = () => {
  const { setFooterBackgroundColor } = useGlobal();

  useEffect(() => {
    setFooterBackgroundColor("#e8e1d8");
  }, []);

  return (
    <div className="visit">
      <TextPicDisplay
        title={
          <>
            What’s it <br /> like?
          </>
        }
        description={
          <>
            Whoever you are and wherever you’re from, we want you to feel at
            home from the moment you walk through the door. So here’s some info
            on what you can expect when you join us at SOUL Church.
          </>
        }
      />
      <DropDownListDisplay
        title={"FAQS"}
        dropDowns={[
          {
            title: "What will happen my first time?",
            description: (
              <>
                When you turn into Mason Road, our friendly Arrivals Team will
                show you to a suitable parking space (Blue badge parking
                available). When you come in to SOUL&nbsp;Church, you'll see our
                cafe and a central atrium where people can hang out and chat.
                From here, you can check your kids in to their age groups and
                come into the main auditorium for the service. Our Host Team
                will be waiting to show you to your seat. Our services usually
                last around 90 minutes, and include worship, prayer and a
                message. We have a family room for those with babies and
                toddlers and a private breastfeeding area. You'll be able to
                watch the service on screen from these rooms, so you won't miss
                anything.
              </>
            ),
          },
          {
            title: "What do I wear?",
            description: (
              <>
                Whatever you're comfortable in!&nbsp;With so many people, it can
                get a bit warm, so layers are always a good idea, but there's no
                dress code.&nbsp;Some people prefer to come in their jeans or
                joggers, while others like to dress more smartly. It really
                doesn't matter - we want you to feel relaxed and at home.
              </>
            ),
          },
          {
            title: "What do you offer for family?",
            description: (
              <>
                We cater for all ages here. If you have a baby in a pram, we
                have an area of seating where we can take a number of buggies
                and prams. It's next to our family room, so if you need to pop
                out with your little one, there's a place where they can play
                and you can feed them and change nappies. We have a separate
                area for breastfeeding if you prefer. Our kids' programme runs
                throughout the service for those aged 3-11 and our youth
                programme usually runs at the 9am and 11am services for high
                school ages. SOUL&nbsp;Youth also runs on Friday nights during
                term time, from 7-9pm.
              </>
            ),
          },
          {
            title: "What about my child’s additional needs?",
            description: (
              <>
                We do have loud music and flashing lights at our services and we
                know this won't work for every child. We have a dedicated
                sensory room for our SOUL&nbsp;Champions, and we offer ear
                defenders to those who might otherwise feel overwhelmed. Our
                kids' team are experienced in dealing with children with
                additional needs and we'll work with you to make sure your child
                feels safe and settled in this new environment. If you've got
                any questions, please drop us a line at info@soulchurch.com.
              </>
            ),
          },
        ]}
      />
      <div className="visit__additional-needs-container">
        <TextPicDisplay
          borderRadius="50px"
          title={
            <>
              Accessibility and <br />
              additional needs
            </>
          }
          description={
            <>
              We have accessible parking on site and all public areas of the
              building are on the ground floor with no steps. We have facilities
              for those with sensory issues too. And there's a dedicated private
              breastfeeding room.{" "}
            </>
          }
          btns={[
            { text: "email us", className: "visit__card-btn", follow: 0.3 },
            {
              text: "email us",
              className: "visit__card-btn-alternate",
              follow: 0.3,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default PlanYourVisit;
