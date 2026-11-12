// Emphasizes quantitative results (e.g. "100K+", "35%", "600ms", "~100") inside resume bullets.
const METRIC = /(~?\d[\d,.]*(?:K\+|M\+|\+|%|ms)|~\d+)/g;

const Highlight = ({ text }) =>
  text.split(METRIC).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="metric">
        {part}
      </strong>
    ) : (
      part
    )
  );

export default Highlight;
