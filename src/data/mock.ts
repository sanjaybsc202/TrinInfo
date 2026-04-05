import { Category, MessageThread, NotificationItem, Reply, ReportedContent, Thread, User } from '@/types/models';

export const categories: Category[] = [
  { id: 'c1', slug: 'tech', name: 'Tech', description: 'Development, AI, cloud and tools.', topicCount: 1240, recentActivity: '2 min ago' },
  { id: 'c2', slug: 'gaming', name: 'Gaming', description: 'PC, console, indie and esports.', topicCount: 860, recentActivity: '12 min ago' },
  { id: 'c3', slug: 'health', name: 'Health', description: 'Fitness, nutrition and wellness.', topicCount: 540, recentActivity: '25 min ago' },
];

export const users: User[] = [
  { id: 'u1', username: 'alex', email: 'alex@forum.dev', bio: 'Full-stack dev and community mentor.', role: 'admin', reputation: 2300, badges: ['Founder', 'Top Contributor'], joinDate: '2024-01-10' },
  { id: 'u2', username: 'maria', email: 'maria@forum.dev', bio: 'Moderator focusing on healthy discussions.', role: 'moderator', reputation: 1240, badges: ['Moderator'], joinDate: '2024-04-18' },
  { id: 'u3', username: 'sam', email: 'sam@forum.dev', bio: 'Curious learner who asks good questions.', role: 'user', reputation: 420, badges: ['Newcomer'], joinDate: '2025-03-02' },
];

export const threads: Thread[] = [
  { id: 't1', categoryId: 'c1', title: 'Expo Router best practices in large apps', content: 'Share your route architecture and guard patterns.', authorId: 'u1', likeCount: 42, replyCount: 12, tags: ['expo', 'router'], createdAt: '2026-04-01T10:00:00Z', updatedAt: '2026-04-04T17:00:00Z' },
  { id: 't2', categoryId: 'c1', title: 'How to structure TanStack Query keys?', content: 'Need scalable key strategy for forum APIs.', authorId: 'u3', likeCount: 27, replyCount: 0, tags: ['react-query'], createdAt: '2026-04-03T12:30:00Z', updatedAt: '2026-04-05T11:30:00Z', unanswered: true },
  { id: 't3', categoryId: 'c2', title: 'Favorite co-op games this year', content: 'Looking for game recommendations.', authorId: 'u2', likeCount: 65, replyCount: 20, tags: ['co-op'], createdAt: '2026-03-21T09:00:00Z', updatedAt: '2026-04-05T14:00:00Z' },
];

export const replies: Reply[] = [
  { id: 'r1', threadId: 't1', authorId: 'u2', content: 'I split route groups by auth and permissions.', likeCount: 9, createdAt: '2026-04-02T10:00:00Z' },
  { id: 'r2', threadId: 't1', authorId: 'u3', content: 'Quote support is useful for context in long threads.', likeCount: 6, createdAt: '2026-04-03T08:15:00Z', quoteReplyId: 'r1' },
];

export const notifications: NotificationItem[] = [
  { id: 'n1', type: 'mention', message: '@sam mentioned you in Expo Router thread.', read: false, createdAt: '2026-04-05T10:15:00Z' },
  { id: 'n2', type: 'reply', message: 'New reply on your question about query keys.', read: true, createdAt: '2026-04-05T07:00:00Z' },
];

export const messageThreads: MessageThread[] = [
  { id: 'm1', participant: 'maria', lastMessage: 'Please check community rules before posting links.', updatedAt: '2026-04-05T09:10:00Z' },
  { id: 'm2', participant: 'alex', lastMessage: 'Great thread idea, keep it going!', updatedAt: '2026-04-04T16:00:00Z' },
];

export const reportedContent: ReportedContent[] = [
  { id: 'rep1', reason: 'Harassment', targetType: 'reply', preview: 'Aggressive language in reply #232', status: 'pending' },
  { id: 'rep2', reason: 'Spam', targetType: 'thread', preview: 'Repeated promo links', status: 'warned' },
];
