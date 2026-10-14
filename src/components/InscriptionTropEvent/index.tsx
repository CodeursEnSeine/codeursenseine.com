'use client';

import { Box } from '@chakra-ui/react';
import Script from 'next/script';

export const InscriptionTropEvent = () => {
  return (
    <div>
      <a
        title="Tropevent.com"
        target="_tropevent"
        className="tropevent-embedded"
        href="https://www.tropevent.com/event/2026-Codeurs-en-Seine-2026"
        data-src="https://www.tropevent.com/event/2026-Codeurs-en-Seine-2026/booking-embedded"
      >
        <Box
          textAlign="center"
          css={{
            '#tropevent-embedded-wrapper-0 &': {
              display: 'none',
            },
          }}
        >
          Chargement du formulaire d&apos;inscription...
        </Box>
      </a>
      <Script
        defer
        type="text/javascript"
        src={`https://www.tropevent.com/widget.js?update=${new Date().toISOString()}`}
      />
    </div>
  );
};
