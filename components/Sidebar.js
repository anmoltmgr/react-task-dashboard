import styles from "../styles/Home.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Sidebar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <ul>
          <h3>.studio</h3>
          <div className={styles.list}>
            <div className={styles.upperlist}>
              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <HomeOutlinedIcon style={{ marginRight: "1rem" }} />
                Overview
              </ol>
              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <SignalCellularAltIcon style={{ marginRight: "1rem" }} /> Stats
              </ol>
              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <FolderOpenOutlinedIcon style={{ marginRight: "1rem" }} /> Chats
              </ol>

              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <ChatOutlinedIcon style={{ marginRight: "1rem" }} />
                Calendar
              </ol>

              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <DateRangeOutlinedIcon style={{ marginRight: "1rem" }} />
                Projects
              </ol>
            </div>
            <div className={styles.lowerlist}>
              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <SettingsOutlinedIcon style={{ marginRight: "1rem" }} />
                Settings
              </ol>
              <ol
                style={{
                  display: "flex",
                  alignitems: "center",
                }}
              >
                <LogoutOutlinedIcon style={{ marginRight: "1rem" }} />
                Log out
              </ol>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
