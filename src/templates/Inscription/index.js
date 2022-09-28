import React from "react";
import Helmet from "react-helmet";
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

import { OGImage } from "components/OG";

const Inscription = () => (
  <Layout theme="ces">
    <OGImage path="/images/ces/social.jpg" />
    <Seo title="Inscription" />
    <Heading as="h1" mb={8}>
      Inscription
    </Heading>

    <Box mb={5}>
      <Text>
        <b>L'accès reste gratuit</b> mais si vous aimez cette journée et souhaitez soutenir l'association, n'hésitez pas à <b>indiquer le montant auquel vous désirez participer</b> lors de votre commande.
      </Text>
      <Text textAlign="right" mt={5}>
        <i>L'équipe Codeurs en Seine</i>
      </Text>
    </Box>
    
    <a title="Vente de billets en ligne" href="https://www.billetweb.fr/shop.php?event=codeurs-en-seine-2022"  className="shop_frame"  target="_blank"  data-src="https://www.billetweb.fr/shop.php?event=codeurs-en-seine-2022"  data-max-width="100%"  data-initial-height="2000" data-scrolling="no"  data-id="codeurs-en-seine-2022"  data-resize="1">Vente de billets en ligne</a>
    <Helmet>
      <script type="text/javascript" src="https://www.billetweb.fr/js/export.js"></script>
    </Helmet>
  </Layout>
);

export default Inscription;
