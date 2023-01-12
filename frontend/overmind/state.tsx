import { Context } from "../overmind";

// type State = {
//   post: string | null;
// };

// export const state: State = {
//   post: "first post",
// };

export type Post = {
  title: string | null;
  body: string | null;
};

export type State = {
  isLoadingPosts: boolean;
  posts: Post[];
};

export const state: State = {
  isLoadingPosts: false,
  posts: [],
};
