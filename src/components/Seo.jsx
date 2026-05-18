const SITE_URL = "https://www.mfischer-bauunternehmen.de";
const DEFAULT_IMAGE = `${SITE_URL}/images/bild31.png`;
const BRAND = "M. Fischer Bauunternehmen";

export default function Seo({
  title = "",
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${BRAND}` : `${BRAND} – Tiefbau, Abbruch & Außenanlagen | Rott am Inn`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large"} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
