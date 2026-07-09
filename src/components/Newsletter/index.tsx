'use client';

import React, { useState } from 'react';
import { Button, Input, Stack, Text } from '@chakra-ui/react';

import { Card } from '@/components/Card';

// Formulaire Brevo « Newsletter site » (double opt-in, liste « Visiteurs Codeurs en Seine »).
const BREVO_FORM_ACTION =
  'https://d5391f64.sibforms.com/serve/MUIFAHTpeAjIJtql9BHkE80LP-NODq78Fi28IWnr5xu3mcDvYVRPdwE85XsNScEyOQZrLQOqXgRoAN41mhbPArMj8lv4t0Ot6tuBVEFlKTDDhV-soIoAJl4YC_FOTu6bECpFQQL9j_hXhRXf0vv_59MY-2zCpH5OFZcOK-5bUxP73ITcMVOkOnkPNiYs2RpmBOQAxBe991yWJJw8Qg==';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const Newsletter = ({ ...props }) => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('loading');

    // L'endpoint Brevo ne renvoie pas d'en-tête CORS sur sa réponse de succès
    // (redirection), donc on ne peut pas lire le résultat. On envoie la requête
    // en « no-cors » (fire-and-forget) : l'inscription est bien enregistrée côté
    // Brevo, et on affiche un succès optimiste. L'email est déjà validé côté
    // client (type=email + required), et le double opt-in fait le reste.
    try {
      await fetch(BREVO_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form),
      });
      setStatus('success');
      setMessage(
        'Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.'
      );
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Une erreur est survenue, merci de réessayer plus tard.');
    }
  };

  return (
    <Card {...props}>
      <Stack spacing={4}>
        <Text as="strong">
          Renseignez votre email pour recevoir les news de Codeurs en Seine
        </Text>

        {status === 'success' ? (
          <Text color="green.600" fontWeight="medium">
            {message}
          </Text>
        ) : (
          <form
            action={BREVO_FORM_ACTION}
            method="post"
            id="sib-form"
            data-type="subscription"
            target="_blank"
            onSubmit={handleSubmit}
          >
            <Stack flexDirection={{ base: 'column', md: 'row' }} spacing="4">
              <Input
                placeholder="nom@domaine.fr"
                type="email"
                id="EMAIL"
                name="EMAIL"
                width="auto"
                flexGrow={1}
                required
              />
              <Button
                colorScheme="brand"
                type="submit"
                flexGrow={{ base: 1, md: 0 }}
                isLoading={status === 'loading'}
              >
                Recevoir les news par email
              </Button>
            </Stack>

            {status === 'error' && (
              <Text color="red.600" mt="3" fontSize="sm">
                {message}
              </Text>
            )}

            {/* Anti-spam Brevo : champ leurre qui doit rester vide */}
            <input
              type="text"
              name="email_address_check"
              defaultValue=""
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: 'none' }}
            />
            <input type="hidden" name="locale" value="fr" />
          </form>
        )}
      </Stack>
    </Card>
  );
};
