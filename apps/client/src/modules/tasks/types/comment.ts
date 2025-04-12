import type { User } from "@/modules/auth/types";
import type { EMOJI_TYPES } from "../constants/emojies";
import type { DateParams } from "@/modules/common/types";

type EmojiKey = keyof typeof EMOJI_TYPES;
type ReactionValue = typeof EMOJI_TYPES[EmojiKey];

export interface CommentReaction {
  type: ReactionValue;
  count: number;
  isMyReaction: boolean;
}

export interface Comment extends DateParams {
  _id: string
  message: string
  user: User
  replies?: number;
  reactions?: CommentReaction[];
  isEdit?: boolean;
}

export interface Emoji {
  type: ReactionValue;
  symbol: string;
}

export interface CommentGroup {
  date?: DateParams['createdAt'];
  comments: Comment[];
}
