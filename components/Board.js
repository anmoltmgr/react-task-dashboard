import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Card, Paper, Box } from "@mui/material";
import { CardActions, Button } from "@material-ui/core";
import Cards from "./Cards";

const data = [
  {
    id: 0,
    title: "to do",
    items: [
      {
        id: 100,
        title: "Design",
        body: "We need 2 different  concepts for software page in our program.",

        assignedUsers: [{ name: "Anmol Thapa" }, { name: "Ram Thapa" }],
      },
      {
        id: 101,
        title: "Development",
        body: "We need 2 different  concepts for software page in our program.",
        assignedUsers: [{ name: "Roshan Kandel" }, { name: "Arati Dhakal" }],
      },
      {
        id: 102,
        title: "Development",
        body: "We need 2 different  concepts for software page in our program.",
        assignedUsers: [{ name: "Roshan Kandel" }, { name: "Arati Dhakal" }],
      },
    ],
  },
  { id: 1, title: "in progress", items: [] },
  { id: 2, title: "completed", items: [] },
];

const Board = () => {
  const [progressBarData, setProgressBarData] = useState(data);
  const [cardData, setCardData] = useState();

  const dragItem = useRef();
  const dragNode = useRef();
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e, params) => {
    console.log("drag started", params);
    dragItem.current = params;

    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("ENTER DRAG");
    console.log("dragged position", dragItem.current);
    console.log("currentPositionParams", params);

    if (e.target !== dragNode.current) {
      const draggedItem = dragItem.current;

      console.log("TARGET NOT SAME!!!");

      const currentPositionParams = params;

      setProgressBarData((oldProgressBarData) => {
        const draggedItemIndex =
          oldProgressBarData[draggedItem.progressBarId] &&
          oldProgressBarData[draggedItem.progressBarId].items &&
          oldProgressBarData[draggedItem.progressBarId].items.length &&
          oldProgressBarData[draggedItem.progressBarId].items.findIndex(
            (item) => {
              console.log("item:", item);
              console.log("dragged item", draggedItem);
              // console.log("current position params", currentPositionParams);
              return item.id === draggedItem.id;
            }
          );
        console.log("Index:", draggedItemIndex);

        //target position

        if (draggedItemIndex >= 0) {
          console.log(
            "  oldProgressBarData[currentPositionParams.progressBarId].items.length",
            oldProgressBarData[currentPositionParams.progressBarId].items.length
          );
          if (
            oldProgressBarData[currentPositionParams.progressBarId].items.length
          ) {
            //add item to new position
            oldProgressBarData[draggedItem.progressBarId].items[
              draggedItemIndex
            ] &&
              oldProgressBarData[
                currentPositionParams.progressBarId
              ].items.splice(
                draggedItemIndex,
                0,
                oldProgressBarData[draggedItem.progressBarId].items[
                  draggedItemIndex
                ]
              );
          } else {
            oldProgressBarData[draggedItem.progressBarId].items[
              draggedItemIndex
            ] &&
              oldProgressBarData[
                currentPositionParams.progressBarId
              ].items.push(
                oldProgressBarData[draggedItem.progressBarId].items[
                  draggedItemIndex
                ]
              );
          }
          //remove element at original place
          oldProgressBarData[draggedItem.progressBarId].items.splice(
            draggedItemIndex,
            1
          );
        }
        // oldCardData[cardIndex].progressBarId = currentPosition.progressBarId;
        // oldCardData[cardIndex]  =
        return oldProgressBarData;
      });

      console.log("PROGRESS BAR DATA", progressBarData);
    } else {
      console.log("TARGET SAME");
    }
  };

  const handleDragEnd = () => {
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    setDragging(false);
  };
  const getBackGroundColor = (params) => {
    console.log(params, "check params");
    const currentItem = dragItem.current;
    console.log("currentItem", currentItem);
    if (
      currentItem.id === params.id &&
      currentItem.progressBarId === params.progressBarId
    ) {
      console.log("insideeee.....");
      return "black";
    } else return "white";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "red",
          padding: "2rem",
          alignItems: "start",

          "& > :not(style)": {
            m: 1,
            width: "30%",
            // height: 500,
            minHeight: 500,
          },
        }}
      >
        {progressBarData &&
          progressBarData.length &&
          progressBarData.map((ele) => {
            return (
              <Paper
                key={ele.id}
                elevation={5}
                onDragEnter={
                  dragging && ele.items && !ele.items.length
                    ? (e) => handleDragEnter(e, { progressBarId: ele.id })
                    : null
                }
              >
                <div>
                  <div className={styles.paperProgressTitle}>
                    <span> {ele.title}</span>
                    <span> 1 </span>
                  </div>
                  <div className={styles.paperAddCardBar}>
                    <Card>
                      <CardActions>
                        <Button size="small">+</Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className={styles.Card}>
                    {ele.items.length &&
                      ele.items.map((card) => {
                        return (
                          <Cards
                            key={card.id}
                            handleDragStart={handleDragStart}
                            title={card.title}
                            body={card.body}
                            id={card.id}
                            progressBarId={ele.id}
                            getBackGroundColor={getBackGroundColor}
                            handleDragEnter={handleDragEnter}
                            dragging={dragging}
                          />
                        );
                      })}
                  </div>
                </div>
              </Paper>
            );
          })}
      </Box>
    </>
  );
};

export default Board;
