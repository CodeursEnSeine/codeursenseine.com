import { Alert, AlertDescription } from '@chakra-ui/react';

export type ProgrammeInformationProps = {};

export const ProgrammeInformation = () => {
  return (
    <>
      <Alert colorScheme="brand" borderRadius="md">
        <AlertDescription>
          Le programme est en cours de finalisation et sera disponible en fin de
          semaine
        </AlertDescription>
      </Alert>
    </>
  );
};
