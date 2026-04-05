import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Thread } from '@/types/models';
import { Card, Muted } from '@/components/ui';

export function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <Card>
      <Link href={`/thread/${thread.id}`}>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>{thread.title}</Text>
      </Link>
      <Muted>{thread.content}</Muted>
      <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
        <Muted>Replies: {thread.replyCount}</Muted>
        <Muted>Likes: {thread.likeCount}</Muted>
        <Muted>Updated: {new Date(thread.updatedAt).toLocaleDateString()}</Muted>
      </View>
    </Card>
  );
}
