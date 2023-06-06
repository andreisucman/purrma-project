import React from "react";
import Card from "./Card";
import andrei from "../../public/assets/team/andrei.webp";
import daniel from "../../public/assets/team/daniel.webp";
import man3 from "../../public/assets/team/man3.png";
import woman2 from "../../public/assets/team/woman2.png";
import SectionTitle from "../common/SectionTitle";
import styles from "./Team.module.scss";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.row}>
          <SectionTitle
            icon={"icon icon__team icon_b"}
            title={"The team"}
            id="team"
          />
          <Card
            data={{
              name: "Andrei Sucman",
              img: andrei,
              title: "Team Manager",
              about: `Andrei has 3 years of corporate experience in sales and marketing
              and 2 years of entrepreneural experience with ecommerce.`,
              desc: `At Purrma Andrei is responsible for planning, setting, monitoring
              milestones and answering customer service requests.`,
              links: {
                ln: "https://www.linkedin.com/in/andrei-sucman/",
                gh: "https://github.com/andreisucman",
              },
              timeline: {
                one: { text: "Manager (Glodermal)" },
                two: { text: "Project Manager (Turkcell)" },
              },
            }}
          />
        </div>
        <div className={styles.row}>
          <Card
            data={{
              name: "Daniel Blyth",
              img: daniel,
              title: "IT Manager",
              about: `Daniel is a Full-Stack developer with 4 years of experience in
              building software with Nodejs and the Parse Platform.`,
              desc: `A recognized pro by Github, Daniel is responsible for the development and
              maintainance of the technical infrastructure.`,
              links: {
                gh: "https://github.com/dblythy",
              },
              timeline: {
                one: {
                  isAct: true,
                  text: "Software Engineer (Parse Platform)",
                },
              },
            }}
          />
          <Card
            data={{
              name: "Name Surname",
              img: woman2,
              title: "Marketing Manager",
              about: `Name is a Gen Z influencer and a talented marketing specialist
              with 1.5 years of professional experience.`,
              desc: `At Purrma Name is responsible for developing promotional
              activities, and building brand identity.`,
              links: {
                ln: "/",
              },
              timeline: {
                one: {
                  isAct: true,
                  text: "Marketing Specialist (Company A)",
                },
                two: { text: "Marketing Specialist (Company B)" },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
