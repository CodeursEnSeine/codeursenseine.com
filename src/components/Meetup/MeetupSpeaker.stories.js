import React from "react"

import { MeetupSpeaker } from "./MeetupSpeaker"

export default {
  title: "Components/MeetupSpeaker",
  component: MeetupSpeaker,
}

const Template = (args) => <MeetupSpeaker {...args} />

export const Default = Template.bind({})
Default.args = {
  speaker: {
    name: "Segun Adebayo",
    bio: "Product & UI Engineer",
    avatar: "https://bit.ly/sage-adebayo",
    twitter: "thesegunadebayo",
  },
}
