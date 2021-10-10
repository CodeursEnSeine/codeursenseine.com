import React from "react";

import { Box, Stack, Heading } from "@chakra-ui/react";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import Layout from "components/layout";

import Seo from "components/seo";
import RedirectCodeursEnSeine from "components/RedirectCodeursEnSeine";

const Live = () => {
  if (process.env.GATSBY_ARCHIVE) {
    return <RedirectCodeursEnSeine path="/live" />;
  }

  const isBrowser = typeof window !== "undefined";

  return (
    <Layout theme="ces">
      <Seo
        title="Live"
        meta={[
          {
            property: `og:image`,
            content: `${process.env.GATSBY_ORIGIN}/images/ces/social.jpg`,
          },
        ]}
      />
      <Box>
        <Stack spacing={6}>
          <Heading as="h1" mb={6}>
            Live Twitch
          </Heading>
        </Stack>
        {isBrowser && (
          <>
            <TwitchPlayer
              channel="codeursenseine"
              id="codeursenseine"
              width="100%"
            />
            <TwitchChat
              channel="codeursenseine"
              id="codeursenseine-chat"
              theme="light"
              width="100%"
            />
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Live;
