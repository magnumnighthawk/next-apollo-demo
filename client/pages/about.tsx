import ReactMarkdown from "react-markdown";
import ProfileCard from "components/ProfileCard";
import Readme from "lib/readme";
import { AboutPageWrapper, Changelog } from "styles";

const About = () => (
  <AboutPageWrapper>
    <ProfileCard />
    <Changelog>
      <ReactMarkdown>{Readme}</ReactMarkdown>
    </Changelog>
  </AboutPageWrapper>
);

export default About;
