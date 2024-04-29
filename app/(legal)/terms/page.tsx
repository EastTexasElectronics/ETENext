import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import md from 'markdown-it';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/terms/terms.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <>
      <Head>
        <style>{`
          .markdown-content {
            overflow-wrap: break-word;
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
          }
          .markdown-content pre,
          .markdown-content code,
          .markdown-content img {
            max-width: 100%;
            overflow-x: auto;
          }
          .markdown-content table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }
        `}</style>
      </Head>
      <div className="flex justify-center py-10 bg-gray-50 dark:bg-gray-800 w-full">
        <div
          className="prose mx-auto mt-8 px-4 py-7 rounded-md bg-white dark:bg-gray-900 shadow-lg dark:shadow-sm dark:prose-invert dark:prose-headings:text-secondary-300 dark:prose-a:text-primary-400 sm:px-5 sm:py-8 sm:max-w-full md:max-w-xl lg:prose-lg lg:px-6 xl:px-8 markdown-content"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(fileContent),
          }}
        />
      </div>
    </>
  );
};

export default Page;
