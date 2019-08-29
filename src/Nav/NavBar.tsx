import React, { FC } from "react";
import { NavItem } from "./NavItem";
import { Header, Text } from "../Common/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "../Common/Dropdown";
import { DropdownItem } from '../Common/DropdownItem'
import { Link } from "../Common/Link";
import styles from "./NavBar.module.css";
import { useHover } from "../Common/useHover";

export const NavBar: FC = () => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <ul className={styles.navBar}>
      <NavItem>
        <Link href={"https://github.com/chheller"}>
          <Header size={18} color="white" >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              color="white"
              size="lg"
              title="Github"
            ></FontAwesomeIcon>{" "}
            Github
          </Header>
        </Link>
      </NavItem>
      <NavItem>
        <Link
          href={
            "https://www.linkedin.com/in/charles-heller-055677113?trk=people-guest_profile-result-card_result-card_full-click"
          }
        >
          <Header size={18} color="white" >
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              color="white"
              size="lg"
              title="LinkedIn"
            ></FontAwesomeIcon>{" "}
            LinkedIn
          </Header>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={"https://twitter.com/PresumptiveDx/"}>
          <Header size={18} color="white">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              color="white"
              size="lg"
              title="Twitter"
            ></FontAwesomeIcon>{" "}
            Twitter
          </Header>
        </Link>
      </NavItem>
      <div ref={hoverRef}>
        <NavItem className={styles.rightNav} >
          <ProjectsDropdown isOpen={isHovered}></ProjectsDropdown>
        </NavItem>
      </div>
    </ul>
  );
};

const ProjectsDropdown: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Dropdown
      isOpen={isOpen}
      title={
        <Header size={18} color="white">
          <FontAwesomeIcon
            icon={["fas", "cogs"]}
            color="white"
            size="lg"
            title="Projects"
          ></FontAwesomeIcon>{" "}
          Projects
            </Header>
      }
    >
      <DropdownItem>
        <Link href={"https://github.com/chheller/portfolio"}>
          <Text color="white" size={18}>This Site</Text>
        </Link>
      </DropdownItem>

      <DropdownItem>
        <Link href={"http://tesseract.uark.edu/blog/portfolio-items/never-give-up-grit-your-teeth-and-face-the-gods/"}>
          <Text color="white" size={18}>Game Design Final Project</Text>
        </Link>
      </DropdownItem>
    </Dropdown>
  )
}
