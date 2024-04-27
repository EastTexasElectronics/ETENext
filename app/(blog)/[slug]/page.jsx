// TODO We need to get rid of the document.write in the markdown-it renderer evaluate using MDX instead for this.

import md from 'markdown-it';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '~/components/widgets/Header';

import { findPostBySlug, findLatestPosts } from '~/utils/posts';

export const dynamicParams = false;

const getFormattedDate = (date) => date;

export async function generateMetadata({ params }) {
  const post = await findPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  return { title: post.title, description: post.description };
}

export async function generateStaticParams() {
  return (await findLatestPosts()).map(({ slug }) => ({ slug }));
}

export default async function Page({ params }) {
  const post = await findPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Header />
      <section className="mx-auto py-8 sm:py-16 lg:py-20">
        <article>
          <header className={post.image ? 'text-center' : ''}>
            <p className="mx-auto max-w-3xl px-4 sm:px-6">
              <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time>
            </p>
            <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
              {post.title}
            </h1>
            <Image
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.description}
              loading="eager"
              priority
              width={900}
              height={480}
            />
          </header>
          <div
            className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: md({
                html: true,
              }).render(post.content),
            }}
          />
        </article>
      </section>
    </>
  );
}
