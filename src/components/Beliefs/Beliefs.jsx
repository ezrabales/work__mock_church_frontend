import { bible } from "../../assets";
import Btn from "../Btn/Btn";
import TextPicDisplay from "../Information/TextPicDisplay/TextPicDisplay";
import "./Beliefs.css";

const Beliefs = () => {
  const list = [
    {
      title: "Knowable Truth",
      description: (
        <>
          We believe in the accuracy, truth, authority and power of the Holy
          Scriptures as the Word of God.
        </>
      ),
    },
    {
      title: "One God",
      description: (
        <>
          We believe in a personal God who has revealed Himself as One. God
          exists in three persons—Father, Son and Holy Spirit—each distinct, yet
          all of One essence.
        </>
      ),
    },
    {
      title: "Uniqueness of Christ",
      description: (
        <>
          We believe Jesus Christ to be the virgin born Son of God who lived in
          flesh, died for the sins of the world, was buried, rose again, and
          ascended to the Father according to the Scriptures.
        </>
      ),
    },
    {
      title: "Grace Life",
      description: (
        <>
          We believe that the death of Jesus Christ was the final and complete
          sacrifice for the sins of humanity. Salvation is obtained by grace
          through faith in Jesus Christ. All who repent of their sins and
          receive Jesus Christ as Savior and Lord are born again into eternal
          life as children of God.
        </>
      ),
    },
    {
      title: "Indwelling Power",
      description: (
        <>
          We believe that life on earth is to be lived in the power of the Holy
          Spirit, who indwells believers, enabling them to live distinctive
          lives in the life and power of Christ, making famous the Father in
          heaven.
        </>
      ),
    },
    {
      title: "God's People",
      description: (
        <>
          We believe that those who have placed their faith in Christ are knit
          together in one Body, the Church, a distinctive community of faith
          expressed in local clusters, engaging culture on every front with
          God's hope and love... a Church for which Christ will personally
          return.
        </>
      ),
    },
    {
      title: "The Knowledge of the Holy",
      description: (
        <>
          Created by and for God, we seek to passionately pursue an intimate
          relationship with God in response to His great love for us. To know
          God is the ultimate treasure of the soul.
        </>
      ),
    },
    {
      title: "Whole Life Worship",
      description: (
        <>
          More than outward forms, theologically informed worship must encompass
          our entire existence, whereby in all circumstances our words and
          actions bring glory to God.
        </>
      ),
    },
    {
      title: "His Renown",
      description: (
        <>
          We echo and affirm the Westminster confession:{" "}
          <em>
            "the chief end of man is to glorify God and enjoy Him forever."
          </em>{" "}
          All things exist for the glory of God.
        </>
      ),
    },
    {
      title: "Community of Faith",
      description: (
        <>
          The worldwide Body of Christ functions best in localized communities
          of believers. Thus we seek to plant churches that amplify His fame,
          strengthen the lives of people and repair communities so that all
          people can know the healing power and grace of the Savior.
        </>
      ),
    },
  ];
  return (
    <div className="beliefs">
      <TextPicDisplay
        title={
          <>
            What <br /> we believe
          </>
        }
        description={
          <>
            We live in shifting times but are rooted in eternal truths, the
            teachings of Holy Scripture. Here at Passion City Church we are
            guided by certain foundational beliefs and shaping values.
          </>
        }
        img={bible}
      />
      <div className="beliefs__list-wrapper">
        <div className="beliefs__list">
          {list.map((item, i) => (
            <div className="beliefs__list-item">
              <h3 className="beliefs__item-title">
                {i + 1}. {item.title}
              </h3>
              <p className="beliefs__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="beliefs__btn-container">
        <Btn follow={0.4} className={"beliefs__btn"}>
          Read Full Statement of Beliefs Here
        </Btn>
      </div>
    </div>
  );
};
export default Beliefs;
