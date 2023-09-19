import React, { Fragment } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Talk, allSpeakers, allTalks } from 'contentlayer/generated';
import { ConferenceCard } from '@/components/Programme/ConferenceCard';
import { formatHour } from '@/utils/dates';
import { PleniereCard } from '@/components/Programme/PleniereCard';
import { SponsorCard } from '@/components/Programme/SponsorCard';
import { PauseCard } from '@/components/Programme/PauseCard';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = 'Programme | ' + (await parent).title?.absolute;

  return {
    title,
    alternates: {
      canonical: 'programme',
    },
  };
}

export default function ProgrammePage() {
  const talks = allTalks;
  const speakers = allSpeakers;

  const ROOM_GRID = {
    A: { base: 1, lg: 2 },
    B: { base: 1, lg: 3 },
    C: { base: 1, lg: 4 },
    D: { base: 1, lg: 5 },
  };

  // TODO check if better way.
  const INIT: Record<string, Array<Talk>> = {};
  const confs = talks.reduce((accumulator, currentConference) => {
    if (currentConference?.start) {
      if (!accumulator[currentConference?.start]) {
        accumulator[currentConference?.start] = [];
      }

      accumulator[currentConference?.start].push(currentConference);
    }

    return accumulator;
  }, INIT);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        lg: '2.8rem repeat(4, 1fr)',
        xl: '6rem repeat(4, 1fr)',
      }}
      gap="4"
    >
      {Object.entries(confs)
        .sort((entry1, entry2) => {
          const [start1] = entry1;
          const [start2] = entry2;

          return new Date(start1).getTime() - new Date(start2).getTime();
        })
        .map(([start, conferences]) => (
          <Fragment key={start}>
            <GridItem
              textAlign="right"
              pt="4"
              display={{ base: 'none', lg: 'block' }}
            >
              <Text
                as="time"
                dateTime={start}
                fontWeight="bold"
                color="gray.500"
              >
                {formatHour(start)}
              </Text>
            </GridItem>
            {[...conferences]
              .sort((conference1, conference2) => {
                const ROOMS: Array<Talk['room']> = ['A', 'B', 'C', 'D'];
                return (
                  ROOMS.indexOf(conference1.room) -
                  ROOMS.indexOf(conference2.room)
                );
              })
              .map((conference) => (
                <Fragment key={conference?._id}>
                  {conference?.kind === 'pause' && (
                    <GridItem colSpan={{ base: 1, lg: 4 }}>
                      <PauseCard title={conference?.title} />
                    </GridItem>
                  )}
                  {conference?.kind === 'pleniere' && (
                    <GridItem colSpan={{ base: 1, lg: 4 }}>
                      <PleniereCard
                        title={conference?.title}
                        room={conference?.room}
                      />
                    </GridItem>
                  )}
                  {conference?.kind === 'sponsor' && (
                    <GridItem colSpan={{ base: 1, lg: 4 }}>
                      <SponsorCard
                        title={conference?.title}
                        room={conference?.room}
                      />
                    </GridItem>
                  )}
                  {conference?.kind === 'keynote' && (
                    <GridItem
                      colSpan={{
                        base: 1,
                        lg: conference?.columns ?? 4,
                      }}
                    >
                      <ConferenceCard
                        conference={conference}
                        speakers={speakers?.filter(
                          (speaker) =>
                            conference?.speakers?.includes(speaker?.slug)
                        )}
                      />
                    </GridItem>
                  )}
                  {conference?.kind === 'conference' && (
                    <GridItem
                      colSpan={1}
                      colStart={ROOM_GRID[conference?.room ?? 'A']}
                    >
                      <ConferenceCard
                        conference={conference}
                        speakers={speakers.filter(
                          (speaker) =>
                            conference?.speakers?.includes(speaker.slug)
                        )}
                      />
                    </GridItem>
                  )}
                  {conference?.kind === 'quicky' && (
                    <GridItem
                      colSpan={1}
                      colStart={ROOM_GRID[conference?.room ?? 'A']}
                    >
                      <ConferenceCard
                        conference={conference}
                        speakers={speakers?.filter(
                          (speaker) =>
                            conference?.speakers?.includes(speaker?.slug)
                        )}
                      />
                    </GridItem>
                  )}
                  {conference?.kind === 'atelier' && (
                    <GridItem
                      colStart={ROOM_GRID[conference?.room ?? 'A']}
                      colSpan={1}
                      rowSpan={conference?.rows}
                    >
                      <ConferenceCard
                        conference={conference}
                        speakers={speakers.filter(
                          (speaker) =>
                            conference?.speakers?.includes(speaker?.slug)
                        )}
                      />
                    </GridItem>
                  )}
                </Fragment>
              ))}
          </Fragment>
        ))}
    </Grid>
  );
}
