import React from "react";
import dayjs from "dayjs";
import { Button } from "@chakra-ui/react";

export const CallForPaperButton = ({ startDate, endDate, cfpId, ...rest }) => {
  // Check if we not are between the start and end date of the CFP.
  if (dayjs().isBefore(dayjs(startDate)) || dayjs().isAfter(dayjs(endDate))) {
    return null;
  }

  return (
    <Button
      as="a"
      href={`https://conference-hall.io/public/event/${cfpId}`}
      {...rest}
    >
      Call For Paper
    </Button>
  );
};
