import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import { z } from 'zod';
import { forumData } from '@/hooks/use-forum-data';
import { AppButton, AppInput, Card, Heading, Page } from '@/components/ui';

const schema = z.object({
  title: z.string().min(5),
  content: z.string().min(20),
  categoryId: z.string().min(1),
  tags: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function CreateThreadScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { categoryId: forumData.categories[0]?.id },
  });

  return (
    <Page>
      <Card>
        <Heading>Create Thread</Heading>
        <Controller control={control} name="title" render={({ field }) => <AppInput placeholder="Thread title" value={field.value} onChangeText={field.onChange} />} />
        {errors.title && <Text>{errors.title.message}</Text>}
        <Controller control={control} name="content" render={({ field }) => <AppInput placeholder="Content" multiline numberOfLines={6} value={field.value} onChangeText={field.onChange} />} />
        {errors.content && <Text>{errors.content.message}</Text>}
        <Controller control={control} name="categoryId" render={({ field }) => <AppInput placeholder="Category ID" value={field.value} onChangeText={field.onChange} />} />
        <Text>Available: {forumData.categories.map((c) => c.id).join(', ')}</Text>
        <Controller control={control} name="tags" render={({ field }) => <AppInput placeholder="Optional tags (comma separated)" value={field.value} onChangeText={field.onChange} />} />
        <AppButton label="Publish Thread" onPress={handleSubmit(() => undefined)} />
      </Card>
    </Page>
  );
}
