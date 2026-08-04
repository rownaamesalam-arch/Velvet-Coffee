import "./SectionTitle.css";

function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`section-title ${align}`}>

      {subtitle && (
        <span className="section-subtitle">
          {subtitle}
        </span>
      )}

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
}

export default SectionTitle;