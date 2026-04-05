import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { AppNav, Card, Heading, Muted, Page, StatChip, SubHeading, useAppTheme } from '@/components/ui';

export default function CategoriesScreen() {
  const { colors } = useAppTheme();

  return (
    <Page>
      <AppNav />
      <Heading>Categories</Heading>
      <Muted>Browse focused communities and jump into active conversations.</Muted>
      {forumData.categories.map((category) => (
        <Card key={category.id}>
          <Link href={`/category/${category.id}`}>
            <Text style={{ fontWeight: '800', fontSize: 20, color: colors.text }}>{category.name}</Text>
          </Link>
          <SubHeading>{category.description}</SubHeading>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <StatChip label={`${category.topicCount} topics`} />
            <StatChip label={`Last activity ${category.recentActivity}`} />
          </View>
        </Card>
      ))}
    </Page>
  );
}
