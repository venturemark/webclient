export function CountIndicator({ count }: { count: number }) {
  const r = 3;
  const circleLength = 2 * Math.PI * r;
  let colored = (circleLength * count) / 280;
  let gray = circleLength - colored;
  const stroke =
    280 - count <= 0 ? "red" : 280 - count <= 20 ? "orange" : "#029D7F";
  const strokeDasharray = `${colored} ${gray}`;
  return (
    <div
      style={{
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 8 8" height="35px" width="35px" role="img">
        <circle
          id="gray"
          cx="50%"
          cy="50%"
          r={r}
          style={{
            stroke: "#C4C4C4",
            fill: "none",
          }}
        />
        <circle
          id="colored"
          cx="50%"
          cy="50%"
          r={r}
          style={{
            stroke,
            strokeDasharray,
            fill: "none",
          }}
        />
      </svg>
    </div>
  );
}
