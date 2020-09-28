import React from "react"

import { MeetupSpeakers } from "./MeetupSpeakers"

export default {
  title: "Components/MeetupSpeakers",
  component: MeetupSpeakers,
}

const Template = (args) => <MeetupSpeakers {...args} />

export const Default = Template.bind({})
Default.args = {
  speakers: [
    {
      name: "Segun Adebayo",
      avatar: "https://bit.ly/sage-adebayo",
      twitter: "thesegunadebayo",
    },
    {
      name: "Dan Abramov",
      avatar: "https://bit.ly/dan-abramov",
      twitter: "dan_abramov",
    },
  ],
}
