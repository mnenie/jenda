export interface SectionItem {
  title?: string;
  description?: string;
  icon: string;
  urlPrefix:
    | "kanban"
    | "about"
    | "collaborative"
    | "activity"
    | "members"
    | "chats";
}

export interface Link {
  title?: string;
  url: string;
}
