import { Link } from 'expo-router';
import { Text } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { Card, Heading, Muted, Page } from '@/components/ui';

export default function CategoriesScreen() {
  return (
    <Page>
      <Heading>Categories</Heading>
      {forumData.categories.map((category) => (
        <Card key={category.id}>
          <Link href={`/category/${category.id}`}>
            <Text style={{ fontWeight: '700', fontSize: 18 }}>{category.name}</Text>
          </Link>
          <Muted>{category.description}</Muted>
          <Muted>Topics: {category.topicCount} · Recent: {category.recentActivity}</Muted>
        </Card>
      ))}
    </Page>
  );
}
