import { ExpandMoreOutlined } from "@material-ui/icons";
import { Typography, Badge } from "@material-ui/core";

const Midbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem 1rem 2rem",
      }}
    >
      <h2>Project</h2>
      <span style={{ display: "flex" }}>
        <Typography>this week</Typography>

        <ExpandMoreOutlined />
      </span>
    </div>
  );
};

export default Midbar;
