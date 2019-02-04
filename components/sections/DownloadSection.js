import { Section } from "./Section";
import colors from "../colors";

export const DownloadSection = () => (
  <Section id="download-section" color={colors.blue} backgroundColor={colors.orange}>
    <SectionTitle>TIETGEN FESTIVAL APP</SectionTitle>
    <p>Download the TIETGEN FESTIVAL app on App Store and Google Play!</p>
    {/* Add image links to app stores */}
  </Section>
);
