import React from "react"
import { Heading, Text, Stack, Divider } from "@chakra-ui/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Header } from "../../components/Header"
import { A } from "../../components/A"

const CoCPage = ({ pageContext }) => (
  <Layout theme="ces">
    <SEO title="Code de conduite" />
    <Header description={pageContext.siteMetadata.description}>
      Codeurs en Seine
    </Header>
    <Stack spacing={6}>
      <Heading as="h1">Code de conduite</Heading>
      <Text>
        You can find{" "}
        <A href="#jump-to-gb">
          the english{" "}
          <span role="img" aria-label="GB Flag">
            🇬🇧
          </span>{" "}
          version at the bottom
        </A>
        .
      </Text>
      <Text>
        Tous les participants, conférenciers, sponsors et bénévoles de notre
        conférence sont priés d'agréer au code de conduite suivant. Les
        organisateurs veilleront au respect de ce dernier tout au long de
        l'événement. Nous comptons sur la coopération de tous les participants
        pour assurer un environnement sain pour tout le monde.
      </Text>
      <Heading as="h2" size="lg">
        Besoin d'aide ?
      </Heading>
      <Text>
        Si vous êtes sur le lieu de l'événement, vous pouvez directement venir
        voir n'importe quel membre de l'organisation vêtu d'un t-shirt
        reconnaissable. Dans un autre cas, nous sommes disponible à tous moments
        sur <A href="https://twitter.com/codeursenseine">Twitter</A>.
      </Text>
      <Heading as="h2" size="lg">
        La version courte
      </Heading>
      <Text>
        Notre conférence souhaite offrir une expérience de conférence sans
        harcèlement pour tous, sans distinction de genre, d'âge, d'orientation
        sexuelle, de handicap, d'apparence physique, de taille, de race ou de
        religion (ou leur absence). Nous ne tolérons pas le harcèlement des
        participants de la conférence sous quelque forme que ce soit. Le langage
        et les images sexuels ne sont appropriés pour aucun lieu de l'événement
        Codeurs En Seine, que ce soit pendant les conférences, les ateliers, les
        fêtes, Twitter, et autres média en ligne. Les participants de la
        conférence qui enfreignent ces règles seront sanctionnés ou expulsés de
        la conférence à la discrétion des organisateurs.
      </Text>
      <Heading as="h2" size="lg">
        La version moins courte
      </Heading>
      <Text>
        Le harcèlement comprend des commentaires oraux offensants liés au genre,
        à l'identité ainsi qu'à l'expression de genre, à l'âge, à l'orientation
        sexuelle, au handicap, à l'apparence physique, à la taille, à la race, à
        l'appartenance ethnique, à la religion, aux choix technologiques, aux
        images sexuelles dans les espaces publics, à l'intimidation volontaire,
        au suivi non consenti, au harcèlement photographique ou enregistrement,
        perturbation prolongée de conférence ou d'autres ateliers, contact
        physique inapproprié et attention sexuelle importune.
      </Text>
      <Text>
        Les participants invités à mettre fin à tout comportement importun
        devront s'exécuter immédiatement.
      </Text>
      <Text>
        Les sponsors sont également soumis à la politique pour éviter le
        harcèlement lors de l'événement. En particulier, les sponsors ne doivent
        pas utiliser d'images, d'activités ou autres supports sexualisées. Le
        personnel des stands (y compris les bénévoles) ne doivent pas utiliser
        de vêtements, uniformes et costumes sexualisés, ni de créer un
        environnement sexualisé.
      </Text>
      <Text>
        Si un participant se livre à un comportement importun, les organisateurs
        de la conférence peuvent prendre les mesures qu’ils jugent appropriées,
        y compris avertir le contrevenant ou l'expulser de la conférence sans
        remboursement.
      </Text>
      <Text>
        Si vous subissez un harcèlement, remarquez que quelqu'un d'autre est
        harcelé ou avez d'autres préoccupations, veuillez contacter
        immédiatement un organisateur de la conférence. Le personnel
        organisateur de la conférence peut être identifié car il portera des
        vêtements de marque et / ou des badges le démarquant des participants de
        la conférence.
      </Text>
      <Text>
        Le personnel de la conférence se fera un plaisir d'aider les
        participants à contacter les services de sécurité des hôtels / sites ou
        des forces de l'ordre locales, à fournir des escortes ou à aider d'une
        autre manière les personnes victimes de harcèlement à se sentir en
        sécurité pendant toute la durée de la conférence. Nous apprécions votre
        présence.
      </Text>
      <Text>
        Nous nous attendons à ce que tous les participants suivent ces règles
        lors de tout événement lié à la conférences, aux ateliers et aux
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
      <Heading as="h2" size="lg">
        Need Help ?
      </Heading>
      <Text>
        If you are at the event, reach out to any team member wearing a staff
        t-shirt. If you are unable to, we are available to help at any time on{" "}
        <A href="https://twitter.com/codeursenseine">Twitter</A>.
      </Text>
      <Heading as="h2" size="lg">
        The Quick Version
      </Heading>
      <Text>
        Our conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, age, sexual orientation,
        disability, physical appearance, body size, race, or religion (or lack
        thereof). We do not tolerate harassment of conference participants in
        any form. Sexual language and imagery is not appropriate for any
        conference venue, including talks, workshops, parties, Twitter and other
        online media. Conference participants violating these rules may be
        sanctioned or expelled from the conference without a refund at the
        discretion of the conference organisers.
      </Text>
      <Heading as="h2" size="lg">
        The Less Quick Version
      </Heading>
      <Text>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </Text>
      <Text>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </Text>
      <Text>
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualised images, activities, or other
        material. Booth staff (including volunteers) should not use sexualised
        clothing/uniforms/costumes, or otherwise create a sexualised
        environment.
      </Text>
      <Text>
        If a participant engages in harassing behavior, the conference
        organisers may take any action they deem appropriate, including warning
        the offender or expulsion from the conference with no refund.
      </Text>
      <Text>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of conference staff
        immediately. Conference staff can be identified as they'll be wearing
        branded clothing and/or badges.
      </Text>
      <Text>
        Conference staff will be happy to help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference. We value your attendance.
      </Text>
      <Text>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events.
      </Text>
    </Stack>
  </Layout>
)

export default CoCPage
