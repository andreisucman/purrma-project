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
          <SectionTitle icon={"icon icon__team icon_b"} title={"The team"} />
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
              name: "Irem Sena Tekin",
              img: woman1,
              title: "Finance Manager",
              about: `Irem has 5 years of corporate experience in audit, product
              management and business development.`,
              desc: `At Purrma Irem is responsible for financial compliance,
              reporting, and P&L management.`,
              links: {
                ln: "https://www.linkedin.com/in/irem-sena-tekin-797a85a9/?originalSubdomain=tr",
              },
              timeline: {
                one: {
                  isAct: true,
                  text: "Business Development Supervisor (Garanti BBVA)",
                },
                two: { text: "Product Manager (Turkcell)" },
              },
            }}
          />
        </div>
        <div className={styles.row}>
          <Card
            data={{
              name: "Daniel Blyth",
              img: man2,
              title: "IT Manager",
              about: `Daniel is a full-stack developer with X years of experience in
              building software with nodejs and the parse-platform.`,
              desc: `At Purrma Daniel is responsible for the development and
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
              name: "Eysan Ozgurengin",
              img: woman2,
              title: "Marketing Manager",
              about: `Eysan is a Gen Z influencer and a talented marketing specialist
              with 1.5 years of professional experience.`,
              desc: `At Purrma Eysan is responsible for developing promotional
              activities, and building brand identity.`,
              links: {
                ln: "https://www.linkedin.com/in/eysanozgurengin/",
              },
              timeline: {
                one: {
                  isAct: true,
                  text: "Marketing Specialist (Invent Analytics)",
                },
                two: { text: "Marketing Specialist (Pin Global Gida)" },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
