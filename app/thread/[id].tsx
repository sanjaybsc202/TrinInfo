import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AppButton, AppInput, Card, Heading, Muted, Page } from '@/components/ui';
import { useThreadDetail } from '@/hooks/use-forum-data';

export default function ThreadDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { thread, replies, author, isError } = useThreadDetail(id);
  const [replyText, setReplyText] = useState('');
  const [quoted, setQuoted] = useState<string | null>(null);

  if (isError || !thread) {
    return <Page><Text>Error loading thread.</Text></Page>;
  }

  return (
    <Page>
      <Card>
        <Heading>{thread.title}</Heading>
        <Muted>By {author?.username ?? 'Unknown'} · {new Date(thread.updatedAt).toLocaleString()}</Muted>
        <Text>{thread.content}</Text>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <AppButton label={`Like (${thread.likeCount})`} variant="ghost" />
          <AppButton label="Report" variant="danger" />
        </View>
      </Card>

      <Card>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>Replies</Text>
        {replies.length === 0 && <Text>No replies yet.</Text>}
        {replies.map((reply) => (
          <View key={reply.id} style={{ gap: 4, marginBottom: 10 }}>
            <Text>{reply.content}</Text>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <AppButton label={`Like (${reply.likeCount})`} variant="ghost" />
              <AppButton label="Quote" variant="ghost" onPress={() => setQuoted(reply.id)} />
              <AppButton label="Report" variant="ghost" />
            </View>
          </View>
        ))}
      </Card>

      <Card>
        <Text style={{ fontWeight: '700' }}>Reply</Text>
        {quoted && <Text>Quoting reply: {quoted}</Text>}
        <AppInput placeholder="Write a reply… @mentions ready" multiline numberOfLines={4} value={replyText} onChangeText={setReplyText} />
        <Muted>Attachment support placeholder (images/files)</Muted>
        <AppButton label="Post Reply" onPress={() => setReplyText('')} />
      </Card>
    </Page>
  );
}
