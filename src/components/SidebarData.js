import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

// dataだけを格納していくので、このcomponentはdataのみ
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Mail",
    icon: <AttachEmailIcon />,
    link: "/mail",
  },
  {
    title: "Analitics",
    icon: <AssessmentIcon />,
    link: "/analitics",
  },
  {
    title: "Add friends",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "Setting for payment",
    icon: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "Upload",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/rocket",
  },
];