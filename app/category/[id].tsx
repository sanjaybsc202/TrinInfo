import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { ThreadCard } from '@/components/thread-card';
import { AppButton, AppNav, EmptyState, Heading, LoadingState, Page, SubHeading } from '@/components/ui';
import { forumData, useCategoryThreads } from '@/hooks/use-forum-data';

export default function CategoryThreadsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [sort, setSort] = useState<'latest' | 'popular' | 'unanswered'>('latest');
  const { data, hasNextPage, isLoading } = useCategoryThreads(id, sort);
  const category = forumData.categories.find((item) => item.id === id);

  return (
    <Page>
      <AppNav />
      <Heading>{category?.name ?? 'Category'} Threads</Heading>
      <SubHeading>{category?.description ?? 'Browse discussions by this topic.'}</SubHeading>

      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <AppButton label="Latest" variant={sort === 'latest' ? 'primary' : 'ghost'} onPress={() => setSort('latest')} />
        <AppButton label="Most Popular" variant={sort === 'popular' ? 'primary' : 'ghost'} onPress={() => setSort('popular')} />
        <AppButton label="Unanswered" variant={sort === 'unanswered' ? 'primary' : 'ghost'} onPress={() => setSort('unanswered')} />
      </View>

      {isLoading && <LoadingState label="Loading threads…" />}
      {!isLoading && data.length === 0 && (
        <EmptyState title="No threads yet" description="Be the first to start a discussion in this category." />
      )}
      {data.map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
      {hasNextPage && <Text style={{ opacity: 0.7 }}>Scroll for more (pagination-ready structure).</Text>}
    </Page>
  );
}
