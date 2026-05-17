import Page from "../components/relume/datenschutz/_page";
import Seo from "../components/Seo";

export default function Datenschutz() {
  return (
    <>
      <Seo
        title="Datenschutzerklärung"
        path="/datenschutz"
        description="Datenschutzerklärung von M. Fischer Maschinenbetrieb gemäß DSGVO."
      />
      <Page />
    </>
  );
}
