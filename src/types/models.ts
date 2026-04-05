export type Role = 'user' | 'moderator' | 'admin';

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  bio: string;
  role: Role;
  reputation: number;
  badges: string[];
  joinDate: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  topicCount: number;
  recentActivity: string;
}

export interface Thread {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  authorId: string;
  likeCount: number;
  replyCount: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  unanswered?: boolean;
}

export interface Reply {
  id: string;
  threadId: string;
  authorId: string;
  content: string;
  likeCount: number;
  createdAt: string;
  quoteReplyId?: string;
}

export interface NotificationItem {
  id: string;
  type: 'mention' | 'reply' | 'like';
  message: string;
  read: boolean;
  createdAt: string;
}

export interface MessageThread {
  id: string;
  participant: string;
  lastMessage: string;
  updatedAt: string;
}

export interface ReportedContent {
  id: string;
  reason: string;
  targetType: 'thread' | 'reply';
  preview: string;
  status: 'pending' | 'approved' | 'deleted' | 'warned';
}
