export const MarkdownPreview = ({ markdownFile }: { markdownFile: string }) => (
    <div className="w-full bg-white prose dark:prose-dark dark:bg-gray-700 markdown-content" dangerouslySetInnerHTML={{__html: markdownFile}}></div>
);