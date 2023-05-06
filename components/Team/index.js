import React from "react";
import Image from "next/image";
import Card from "./Card";
import man1 from "../../public/assets/team/man1.png";
import man2 from "../../public/assets/team/man2.png";
import woman1 from "../../public/assets/team/woman1.png";
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
              img: man1,
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
          <Card
            data={{
              name: "Name Surname",
              img: woman1,
              title: "Finance Manager",
              about: `Name has 5 years of corporate experience in audit, product
              management and business development.`,
              desc: `At Purrma Name is responsible for financial compliance,
              reporting, and P&L management.`,
              links: {
                ln: "/",
              },
              timeline: {
                one: {
                  isAct: true,
                  text: "Business Development Supervisor (Company C)",
                },
                two: { text: "Product Manager (Company D)" },
              },
            }}
          />
        </div>
        <div className={styles.row}>
          <Card
            data={{
              name: "Name Surname",
              img: man2,
              title: "IT Manager",
              about: `Name is a full-stack developer with X years of experience in
              building software with nodejs.`,
              desc: `At Purrma Name is responsible for the development and
              maintainance of the technical infrastructure.`,
              links: {
                ln: "/",
                gh: "/",
              },
              timeline: {
                one: { text: "Software Developer (Company X)" },
                two: { text: "Software Developer (Company Y)" },
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
