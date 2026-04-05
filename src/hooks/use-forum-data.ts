import { useMemo, useState } from 'react';
import { categories, replies, threads, users } from '@/data/mock';

export type ThreadSort = 'latest' | 'popular' | 'unanswered';

export function useCategoryThreads(categoryId?: string, sort: ThreadSort = 'latest') {
  const [page] = useState(1);

  const data = useMemo(() => {
    const filtered = categoryId ? threads.filter((t) => t.categoryId === categoryId) : threads;
    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'popular') return b.likeCount - a.likeCount;
      if (sort === 'unanswered') return Number(Boolean(b.unanswered)) - Number(Boolean(a.unanswered));
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    return sorted;
  }, [categoryId, sort]);

  return {
    data,
    page,
    hasNextPage: true,
    isLoading: false,
    isError: false,
  };
}

export function useThreadDetail(threadId: string) {
  const thread = threads.find((t) => t.id === threadId);
  const threadReplies = replies.filter((r) => r.threadId === threadId);
  const author = users.find((u) => u.id === thread?.authorId);

  return {
    thread,
    author,
    replies: threadReplies,
    isLoading: false,
    isError: !thread,
  };
}

export const forumData = { categories, threads, users, replies };
