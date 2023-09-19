import { SponsorsList } from '@/components/Sponsors';
import { Divider, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousTitle = 'Code Of Conduct | ' + (await parent).title?.absolute;

  return {
    title: previousTitle,
    alternates: {
      canonical: 'code-of-conduct',
    },
  };
}

export default function CoC() {
  return (
    <Stack spacing="10">
      <Stack spacing="4">
        <Heading as="h1">Code de conduite</Heading>
        <Text>
          You can find{' '}
          <Link href="#code-of-conduct">
            the english 🇬🇧 version at the bottom
          </Link>
          .
        </Text>
        <Text>
          Tous les participants, conférenciers, sponsors et bénévoles de notre
          conférence sont priés d&apos;agréer au code de conduite suivant. Les
          organisateurs veilleront au respect de ce dernier tout au long de
          l&apos;événement. Nous comptons sur la coopération de tous les
          participants pour assurer un environnement sain pour tout le monde.
        </Text>
        <Heading size="lg" fontWeight="medium">
          Besoin d&apos;aide ?
        </Heading>
        <Text>
          Si vous êtes sur le lieu de l&apos;événement, vous pouvez directement
          venir voir n&apos;importe quel membre de l&apos;organisation vêtu
          d&apos;un t-shirt reconnaissable. Dans un autre cas, nous sommes
          disponibles à tout moment sur{' '}
          <Link href="https://twitter.com/codeursenseine">Twitter</Link>.
        </Text>
        <Heading size="lg" fontWeight="medium">
          La version courte
        </Heading>
        <Text>
          Notre conférence souhaite offrir une expérience de conférence sans
          harcèlement pour tous, sans distinction de genre, d&apos;âge,
          d&apos;orientation sexuelle, de handicap, d&apos;apparence physique,
          de taille, de race ou de religion (ou leur absence). Nous ne tolérons
          pas le harcèlement des participants de la conférence sous quelque
          forme que ce soit. Le langage et les images sexuels ne sont appropriés
          pour aucun lieu de l&apos;événement Codeurs En Seine, que ce soit
          pendant les conférences, les ateliers, les fêtes, Twitter, et autres
          média en ligne. Les participants de la conférence qui enfreignent ces
          règles seront sanctionnés ou expulsés de la conférence à la discrétion
          des organisateurs.
        </Text>
        <Heading size="lg" fontWeight="medium">
          La version moins courte
        </Heading>
        <Text>
          Le harcèlement comprend des commentaires oraux offensants liés au
          genre, à l&apos;identité ainsi qu&apos;à l&apos;expression de genre, à
          l&apos;âge, à l&apos;orientation sexuelle, au handicap, à
          l&apos;apparence physique, à la taille, à la race, à
          l&apos;appartenance ethnique, à la religion, aux choix technologiques,
          aux images sexuelles dans les espaces publics, à l&apos;intimidation
          volontaire, au suivi non consenti, au harcèlement photographique ou
          enregistrement, perturbation prolongée de conférence ou d&apos;autres
          ateliers, contact physique inapproprié et attention sexuelle
          importune.
        </Text>
        <Text>
          Les participants invités à mettre fin à tout comportement importun
          devront s&apos;exécuter immédiatement.
        </Text>
        <Text>
          Les sponsors sont également soumis à la politique pour éviter le
          harcèlement lors de l&apos;événement. En particulier, les sponsors ne
          doivent pas utiliser d&apos;images, d&apos;activités ou autres
          supports sexualisées. Le personnel des stands (y compris les
          bénévoles) ne doivent pas utiliser de vêtements, uniformes et costumes
          sexualisés, ni de créer un environnement sexualisé.
        </Text>
        <Text>
          Si un participant se livre à un comportement importun, les
          organisateurs de la conférence peuvent prendre les mesures qu’ils
          jugent appropriées, y compris avertir le contrevenant ou
          l&apos;expulser de la conférence sans remboursement.
        </Text>
        <Text>
          Si vous subissez un harcèlement, remarquez que quelqu&apos;un
          d&apos;autre est harcelé ou avez d&apos;autres préoccupations,
          veuillez contacter immédiatement un organisateur de la conférence. Le
          personnel organisateur de la conférence peut être identifié car il
          portera des vêtements de marque et / ou des badges le démarquant des
          participants de la conférence.
        </Text>
        <Text>
          Le personnel de la conférence se fera un plaisir d&apos;aider les
          participants à contacter les services de sécurité des hôtels / sites
          ou des forces de l&apos;ordre locales, à fournir des escortes ou à
          aider d&apos;une autre manière les personnes victimes de harcèlement à
          se sentir en sécurité pendant toute la durée de la conférence. Nous
          apprécions votre présence.
        </Text>
        <Text>
          Nous nous attendons à ce que tous les participants suivent ces règles
          lors de tout événement lié à la conférence, aux ateliers et aux
          meetups.
        </Text>
        <Divider />
        <Heading as="h1">Code of Conduct</Heading>
        <Text>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organisers will
          enforce this code throughout the event. We expect cooperation from all
          participants to help ensure a safe environment for everybody.
        </Text>
        <Heading size="lg" fontWeight="medium">
          Need Help ?
        </Heading>
        <Text>
          If you are at the event, reach out to any team member wearing a staff
          t-shirt. If you are unable to, we are available to help at any time on{' '}
          <Link href="https://twitter.com/codeursenseine">Twitter</Link>.
        </Text>
        <Heading size="lg" fontWeight="medium">
          The Quick Version
        </Heading>
        <Text>
          Our conference is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, age, sexual
          orientation, disability, physical appearance, body size, race, or
          religion (or lack thereof). We do not tolerate harassment of
          conference participants in any form. Sexual language and imagery is
          not appropriate for any conference venue, including talks, workshops,
          parties, Twitter and other online media. Conference participants
          violating these rules may be sanctioned or expelled from the
          conference without a refund at the discretion of the conference
          organisers.
        </Text>
        <Heading size="lg" fontWeight="medium">
          The Less Quick Version
        </Heading>
        <Text>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, ethnicity, religion, technology
          choices, sexual images in public spaces, deliberate intimidation,
          stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact,
          and unwelcome sexual attention.
        </Text>
        <Text>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </Text>
        <Text>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualised images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualised clothing/uniforms/costumes, or otherwise create a
          sexualised environment.
        </Text>
        <Text>
          If a participant engages in harassing behavior, the conference
          organisers may take any action they deem appropriate, including
          warning the offender or expulsion from the conference with no refund.
        </Text>
        <Text>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of conference
          staff immediately. Conference staff can be identified as they&apos;ll
          be wearing branded clothing and/or badges.
        </Text>
        <Text>
          Conference staff will be happy to help participants contact
          hotel/venue security or local law enforcement, provide escorts, or
          otherwise assist those experiencing harassment to feel safe for the
          duration of the conference. We value your attendance.
        </Text>
        <Text>
          We expect participants to follow these rules at conference and
          workshop venues and conference-related social events.
        </Text>
      </Stack>
      <SponsorsList />
    </Stack>
  );
}
