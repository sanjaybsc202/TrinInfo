import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AppButton, AppInput, AppNav, Card, EmptyState, Heading, LoadingState, Muted, Page, StatChip, SubHeading } from '@/components/ui';
import { useThreadDetail } from '@/hooks/use-forum-data';

export default function ThreadDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { thread, replies, author, isError, isLoading } = useThreadDetail(id ?? '');
  const [replyText, setReplyText] = useState('');
  const [quoted, setQuoted] = useState<string | null>(null);

  if (isLoading) return <Page><LoadingState label="Loading thread…" /></Page>;
  if (isError || !thread) return <Page><EmptyState title="Thread unavailable" description="This thread may have been removed or moved." /></Page>;

  return (
    <Page>
      <AppNav />
      <Card>
        <Heading>{thread.title}</Heading>
        <Muted>By {author?.username ?? 'Unknown'} • {new Date(thread.updatedAt).toLocaleString()}</Muted>
        <Text>{thread.content}</Text>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <StatChip label={`${thread.replyCount} replies`} />
          <StatChip label={`${thread.likeCount} likes`} />
        </View>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <AppButton label={`Like (${thread.likeCount})`} variant="ghost" />
          <AppButton label="Report" variant="danger" />
        </View>
      </Card>

      <Card>
        <SubHeading>Replies</SubHeading>
        {replies.length === 0 && <EmptyState title="No replies yet" description="Start the conversation with a helpful response." />}
        {replies.map((reply) => (
          <View key={reply.id} style={{ gap: 8, marginBottom: 12 }}>
            {reply.quoteReplyId && <Muted>Quoted: {reply.quoteReplyId}</Muted>}
            <Text>{reply.content}</Text>
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
              <AppButton label={`Like (${reply.likeCount})`} variant="ghost" />
              <AppButton label="Quote" variant="ghost" onPress={() => setQuoted(reply.id)} />
              <AppButton label="Report" variant="ghost" />
            </View>
          </View>
        ))}
      </Card>

      <Card>
        <SubHeading>Write a reply</SubHeading>
        {quoted && <Muted>Quoting reply: {quoted}</Muted>}
        <AppInput
          placeholder="Write a thoughtful reply… Use @username to mention someone"
          multiline
          numberOfLines={5}
          value={replyText}
          onChangeText={setReplyText}
        />
        <Muted>Attachment support placeholder (images/files).</Muted>
        <AppButton label="Post Reply" onPress={() => setReplyText('')} />
      </Card>
    </Page>
  );
}
