export const TextArea = ({ onChange, ref }: { onChange: React.ChangeEventHandler<HTMLTextAreaElement>, ref: React.RefObject<HTMLTextAreaElement> }) => (
    <textarea
        onChange={onChange}
        ref={ref}
        className="flex min-h-[80px] rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-full bg-white dark:bg-gray-700"
        id="markdown-input" placeholder="Type your markdown here..."
    />
);
