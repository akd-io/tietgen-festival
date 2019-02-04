import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import colors from "../colors";

export const AboutSection = () => (
  <Section id="about-section" color={colors.black} backgroundColor={colors.lightpink}>
    <SectionTitle>About Tietgen</SectionTitle>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus sem et sapien maximus
      pulvinar. Duis condimentum lacinia sem ut elementum. Sed et augue vulputate, lacinia mauris
      vitae, vestibulum eros. Aenean tincidunt ac ipsum et finibus. Suspendisse et volutpat ante,
      nec imperdiet nulla. Mauris tincidunt tempor arcu vitae pellentesque. Proin suscipit, mauris
      vitae posuere fermentum, massa tellus malesuada dui, nec porta sapien purus posuere elit.
      Praesent dictum turpis vel felis blandit vulputate. Donec hendrerit, sem ut eleifend
      ultricies, felis augue elementum libero, non accumsan diam lorem bibendum odio. Phasellus a
      dui aliquet, vestibulum mi quis, dictum orci. Nulla facilisi. Suspendisse potenti.
    </p>
    <p>
      Nam maximus nisl id pretium aliquet. Nulla imperdiet sapien nisi, sed dapibus quam sagittis a.
      Curabitur ac enim quam. Ut condimentum ipsum et mauris rhoncus, ac bibendum tellus rutrum. Sed
      ac gravida nulla, sed eleifend dui. Sed erat lorem, varius ut placerat a, luctus scelerisque
      lacus. Praesent varius posuere eros. Etiam non justo magna. Aenean sem nisi, dignissim quis
      neque id, gravida facilisis turpis. Fusce varius luctus dolor, in lobortis lorem ultricies
      nec. Sed imperdiet magna eget massa porttitor ultrices. Curabitur non dolor sit amet diam
      lobortis feugiat. Cras sollicitudin purus nisi, vitae laoreet purus fermentum nec. Vestibulum
      a pellentesque sapien. In a ante turpis. Pellentesque mauris erat, molestie in ipsum vel,
      placerat porttitor odio.
    </p>
    <style jsx>{`
      p {
        font-size: calc(1em + 0.5vw);
        width: 100%;
        max-width: 700px;
        text-align: center;
      }
    `}</style>
  </Section>
);
