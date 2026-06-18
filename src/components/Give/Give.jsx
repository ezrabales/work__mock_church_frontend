import { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import DeckDisplay from "../Information/DeckDisplay/DeckDisplay";
import TextDisplay from "../Information/TextDisplay/TextDisplay";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./Give.css";
import GiveSelectInput from "./GiveSelectInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Btn from "../Btn/Btn";
import {
  churchCeiling,
  churchWorkers,
  churchWorship,
  givingFood,
} from "../../assets";

const Give = () => {
  const dateInputRef = useRef(null);
  const [btnActive, setBtnActive] = useState("recurring");

  const { values, handleChange, setValues } = useForm({
    fund: "",
    amount: "",
    frequency: "",
    gifts: "",
    startDate: "",
  });

  const fundOptions = [
    { value: "Not Charged", label: "Not Charged" },
    { value: "Awaiting Payment", label: "Awaiting Payment" },
    { value: "Partially Paid", label: "Partially Paid" },
    { value: "Paid in Full", label: "Paid in Full" },
  ];

  function handleSelectFundClick(e) {
    console.log(e.target);
  }

  return (
    <div className="give">
      <TextPicDisplay
        title={"Heartbeat of Generosity"}
        description={
          <>
            God is moving in powerful ways in our midst. Thank you for being a
            part of all that He is doing in and through our church.
          </>
        }
        img={churchWorkers}
      />
      <TextDisplay
        title={"Why we give"}
        description={
          <>
            At Church, we don’t say, “we’re going to take the offering”. <br />
            <br />
            Simply stated: God is not a taker. God is a giver. So we give the
            offering. <br />
            <br /> Here’s the truth: there’s nothing you and I have that God
            needs. God doesn’t want to take the offering. God doesn’t want to
            take our money. Because, God doesn’t need our money. On the other
            hand, God has let go of everything. He sent His Son to give us life
            and breath and freedom. To set us free from our chains, from our
            bondage, from what enslaved us. To deliver us out of death and into
            life. To give us Himself. <br />
            <br />
            So in response to all He’s done we say, “God I want the world to
            know about Jesus. So I’m going to give into our House. I’m going to
            give into Passion City Church because I believe here my money will
            be multiplied to help the city and the world come to know Jesus.{" "}
            <br />
            <br />
            At the end of the day, when I stand in heaven I’m going to know that
            money wasn’t lost. That money was gained because it multiplied
            itself over and over again into people’s lives.” <br />
            <br />
            So the prayer is that God would take our hearts today. Capture us
            today. Awaken us to that fact that He loves us and cares for us.
            There’s nothing we have that He doesn’t already have a million times
            over more than we have. And there’s nothing we have that didn’t come
            from Him first. <br />
            <br />
            Then, we will have this great privilege and ability to respond by
            joining Him with our time, our energy, our gifts, our opportunities,
            and our money. We have this opportunity to lean into the things that
            last forever and sewing into what God is doing here in this House.
            <br />
            <br />
            For Jesus! <br />
            <br />
            Pastor
          </>
        }
      />
      <DeckDisplay
        title={"Give Towards..."}
        cards={[
          {
            title: (
              <>
                Give to <br /> SOUL Church
              </>
            ),
            description: (
              <>
                We love the people of our city and we aim to keep our doors open
                at least five days a week. We have toddler groups, wellbeing
                groups, friendship groups and study groups among others. Church
                is so much more than a Sunday service. Thanks for your support!
              </>
            ),
            btns: [
              {
                content: "Learn More",
                follow: 0.3,
                className: "deck__card-btn",
              },
              {
                content: "Give",
                follow: 0.3,
                className: "deck__card-btn_transparent",
              },
            ],
            img: churchWorship,
          },
          {
            title: <>Our new home</>,
            description: (
              <>
                We’re building a home for the people of Norwich, where everyone
                is welcome. It will be a valuable community asset as well as the
                place we gather as a church. There will be a nursery, soft play,
                a café, meeting rooms, our social supermarket, sports
                facilities, and plenty more.
              </>
            ),
            btns: [
              {
                content: "Learn More",
                follow: 0.3,
                className: "deck__card-btn",
              },
              {
                content: "Give",
                follow: 0.3,
                className: "deck__card-btn_transparent",
              },
            ],
            img: churchCeiling,
          },
          {
            title: <>Soul Foundation</>,
            description: (
              <>
                We support a number of initiatives in Norwich and further
                afield, feeding the homeless, offering education and medicine to
                those overseas, and so much more, as well as running a social
                supermarket from our church site.
                <br />
                <br />
                You can find out more about these initiatives on our dedicated
                SOUL Foundation site. Together, we can change lives!
              </>
            ),
            btns: [
              {
                content: "Learn More",
                follow: 0.3,
                className: "deck__card-btn",
              },
              {
                content: "Give",
                follow: 0.3,
                className: "deck__card-btn_transparent",
              },
            ],
            img: givingFood,
          },
        ]}
      />
      <div className="give__give-container">
        <div className="give__give-selector-container">
          <button
            className={`give__give-selector-btn ${btnActive === "one-time" ? "give__give-selector-btn_active" : ""}`}
            onClick={() => setBtnActive("one-time")}
          >
            One-time
          </button>
          <button
            className={`give__give-selector-btn ${btnActive === "recurring" ? "give__give-selector-btn_active" : ""}`}
            onClick={() => setBtnActive("recurring")}
          >
            Recurring
          </button>
        </div>
        <div className="give__fund-container">
          <GiveSelectInput
            setValues={setValues}
            values={values}
            input={{
              name: "fund",
              placeholder: "Fund",
              options: ["one", "two", "three"],
            }}
          />
          <label className="give__fund-label">
            <span className="give__fund-input-prefix">$</span>
            <input
              name="amount"
              type="number"
              className="give__fund-input"
              placeholder="Amount"
              required
              onChange={handleChange}
              value={values.amount}
            />
          </label>
        </div>
        {btnActive === "recurring" && (
          <div className="give__recurrence-container">
            <h3 className="give__recurrence-title">Recurrence</h3>
            <p className="give__recurrence-subtitle">
              You can edit your recurring gift anytime.
            </p>
            <div className="give__recurrence-inputs-container">
              <GiveSelectInput
                setValues={setValues}
                values={values}
                input={{
                  name: "frequency",
                  placeholder: "Frequency",
                  options: [
                    "Weekly",
                    "Bi-weekly",
                    "Twice a month",
                    "Monthly",
                    "Quarterly",
                    "Annually",
                  ],
                }}
              />
              <label className="give__fund-label">
                <input
                  name="gifts"
                  type="number"
                  className="give__fund-input"
                  placeholder="How many gifts (optional)"
                  onChange={handleChange}
                  value={values.gifts}
                />
              </label>

              <DatePicker
                className="give__fund-label"
                selected={values.startDate}
                onChange={(date) =>
                  setValues((prev) => ({
                    ...prev,
                    startDate: date,
                  }))
                }
                placeholderText="Start Date"
              />
            </div>
          </div>
        )}
        <div className="give__btn-container">
          <Btn follow="0.5" className={"give__btn"}>
            Give
          </Btn>
        </div>
      </div>
    </div>
  );
};
export default Give;
