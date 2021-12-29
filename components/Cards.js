import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Cards = (props) => {
  console.log("Props", props);
  return (
    <div

    // className={props.dragging ? props.getStyles() : "dnd-item"}
    >
      <Card
        draggable
        onDragStart={(e) => {
          props.handleDragStart(e, {
            id: props.id,
            progressBarId: props.progressBarId,
          });
        }}
        style={{ padding: "1rem" }}
        onDragEnter={
          props.dragging
            ? (e) =>
                props.handleDragEnter(e, {
                  id: props.id,
                  progressBarId: props.progressBarId,
                })
            : null
        }
        sx={{
          minWidth: 275,
          padding: "1rem",
          backgroundColor: props.dragging
            ? props.getBackGroundColor({
                id: props.id,
                progressBarId: props.progressBarId,
              })
            : "white",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            {props.body}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
