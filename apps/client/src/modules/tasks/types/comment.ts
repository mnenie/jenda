import type { User } from "@/modules/auth/types";
import type { EMOJI_TYPES } from "../constants/emojies";
import type { DateParams } from "@/modules/common/types";

type EmojiKey = keyof typeof EMOJI_TYPES;
type ReactionValue = typeof EMOJI_TYPES[EmojiKey];

export interface Comment extends DateParams {
  _id: string
  message: string
  user: User
  replies?: number;
  reactions?: Emoji[];
  isEdit?: boolean;
}

export interface Emoji {
  type: ReactionValue;
  symbol: string;
  count?: number;
  users?: User['_id'][];
}

export interface CommentGroup {
  date?: DateParams['createdAt'];
  comments: Comment[];
}
