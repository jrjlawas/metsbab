import favicon from "@/assets/img/logo/icon.png";
const PageMeta = ({ title, description, icon }) => {
  return (
    <>
      <title>
        {(title ?? "Metsbab Marketing Sltd.") +
          " | The more you learn, the more you earn."}
      </title>
      {description && <meta property="og:description" content={description} />}
      <link rel="icon" href={icon ?? favicon} type="image/png" />
    </>
  );
};
export default PageMeta;
