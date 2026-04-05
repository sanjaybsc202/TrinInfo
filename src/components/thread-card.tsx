import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Thread } from '@/types/models';
import { Card, Muted, StatChip, SubHeading, useAppTheme } from '@/components/ui';

export function ThreadCard({ thread }: { thread: Thread }) {
  const { colors } = useAppTheme();

  return (
    <Card>
      <Link href={`/thread/${thread.id}`}>
        <SubHeading>{thread.title}</SubHeading>
      </Link>
      <Muted>{thread.content}</Muted>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <StatChip label={`${thread.replyCount} replies`} />
        <StatChip label={`${thread.likeCount} likes`} />
        <StatChip label={new Date(thread.updatedAt).toLocaleDateString()} />
      </View>
      {thread.tags.length > 0 && (
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          {thread.tags.map((tag) => (
            <Text key={tag} style={{ color: colors.primary, fontWeight: '600' }}>#{tag}</Text>
          ))}
        </View>
      )}
    </Card>
  );
}
