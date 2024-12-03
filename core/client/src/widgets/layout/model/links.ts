import type { Link } from "./types";
import {
  Analytics,
  Kanban,
  Members,
  Settings,
  Templates,
} from "@/shared/assets/icons";
import { RouteNames } from "@/shared/config/consts";

import { h, markRaw } from "vue";

export const links = markRaw<Link[]>([
  { id: 0, name: "boards", pathName: RouteNames.boards, icon: h(Kanban) },
  {
    id: 1,
    name: "templates",
    pathName: RouteNames.templates,
    icon: h(Templates),
  },
  {
    id: 2,
    name: "analytics",
    pathName: RouteNames.analytics,
    icon: h(Analytics),
  },
  { id: 3, name: "members", pathName: RouteNames.members, icon: h(Members) },
  { id: 4, name: "settings", pathName: RouteNames.settings, icon: h(Settings) },
]);
