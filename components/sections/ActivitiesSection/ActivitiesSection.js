import { Section } from "../Section";
import { Activity } from "./Activity";
import { SectionTitle } from "../SectionTitle";
import colors from "../../colors";

export const ActivitiesSection = () => {
  const activities = [
    {
      name: "Blind Game of Tag",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Werewolf",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Blind Cooking Challenge",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Silent Disco",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Activity 5",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Activity 6",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "Activity 7",
      startTime: "13:00",
      endTime: "14:00"
    }
  ];

  return (
    <Section id="activities-section" color={colors.pink} backgroundColor={colors.lightblue}>
      <SectionTitle>ACTIVITIES</SectionTitle>
      {activities.map((activity, index) => (
        <Activity activity={activity} key={activity.name} />
      ))}
    </Section>
  );
};
