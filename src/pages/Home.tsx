import Page from "../components/relume/home/_page";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="M. Fischer Bauunternehmen aus Rott am Inn – Tiefbau, Erdarbeiten, Abbruch, Außenanlagen und Baumfällungen im Inntal und Chiemgau. Persönlich auf jeder Baustelle, ohne Subunternehmer."
      />
      <Page />
    </>
  );
}
