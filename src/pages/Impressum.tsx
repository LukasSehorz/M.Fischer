import Page from "../components/relume/impressum/_page";
import Seo from "../components/Seo";

export default function Impressum() {
  return (
    <>
      <Seo
        title="Impressum"
        path="/impressum"
        description="Impressum von M. Fischer Maschinenbetrieb, Markus Fischer, Ritzmehring 1, 83543 Rott am Inn."
      />
      <Page />
    </>
  );
}
