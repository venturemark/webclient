const maxLength = 600;
const radius = 3;
const circleLength = 2 * Math.PI * radius;

export function CountIndicator({ count }: { count: number }) {
  let colored = Math.min(circleLength, circleLength * (count / maxLength));
  let gray = Math.max(0, circleLength - colored);
  const stroke =
    maxLength - count <= 0
      ? "red"
      : maxLength - count <= maxLength / 10
      ? "orange"
      : "#029D7F";
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
          r={radius}
          style={{
            stroke: "#C4C4C4",
            fill: "none",
          }}
        />
        <circle
          id="colored"
          cx="50%"
          cy="50%"
          r={radius}
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
