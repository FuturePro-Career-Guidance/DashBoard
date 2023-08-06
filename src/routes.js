import React from "react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineDashboard,
  AiFillSchedule
 } from "react-icons/ai";
 import { BsPersonWorkspace } from "react-icons/bs";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";


// Admin Imports
import MainDashboard from "views/admin/default";
import CVreview from "views/admin/CVreview";
import Profile from "views/admin/profile";
import mockInterviews from "views/admin/mockInterviews";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Mentor Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={AiOutlineDashboard} width='20px' height='20px' color='white' />,
    component: MainDashboard,
  },
  {
    name: "CV review",
    layout: "/admin",
    path: "/CVreview",
    icon: (
      <Icon
        as={AiFillSchedule}
        width='20px'
        height='20px'
        color='white'
      />
    ),
    component: CVreview,
    secondary: true,
  },
  {
    name: "Mock Interviews",
    layout: "/admin",
    icon: <Icon as={BsPersonWorkspace} width='20px' height='20px' color='white' />,
    path: "/mockInterviews",
    component: mockInterviews,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='white' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='white' />,
    component: SignInCentered,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
