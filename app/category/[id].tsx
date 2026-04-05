import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { ThreadCard } from '@/components/thread-card';
import { AppButton, Heading, Page } from '@/components/ui';
import { useCategoryThreads } from '@/hooks/use-forum-data';

export default function CategoryThreadsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [sort, setSort] = useState<'latest' | 'popular' | 'unanswered'>('latest');
  const { data, hasNextPage, isLoading } = useCategoryThreads(id, sort);

  if (isLoading) return <Page><Text>Loading threads...</Text></Page>;

  return (
    <Page>
      <Heading>Threads</Heading>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <AppButton label="Latest" variant={sort === 'latest' ? 'primary' : 'ghost'} onPress={() => setSort('latest')} />
        <AppButton label="Most Popular" variant={sort === 'popular' ? 'primary' : 'ghost'} onPress={() => setSort('popular')} />
        <AppButton label="Unanswered" variant={sort === 'unanswered' ? 'primary' : 'ghost'} onPress={() => setSort('unanswered')} />
      </View>
      {data.length === 0 ? <Text>No threads yet.</Text> : data.map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
      {hasNextPage && <Text>More threads available (pagination-ready).</Text>}
    </Page>
  );
}
