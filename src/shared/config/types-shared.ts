type Path = {
  pathName: string;
};

export interface WorkspaceLink extends Path {
  name: string;
}
export interface ProjectLink extends Path {
  _id: string;
  name: string;
}

export type CombinedLink = WorkspaceLink | ProjectLink;
