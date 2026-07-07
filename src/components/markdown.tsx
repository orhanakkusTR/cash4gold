import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SHOW_CALCULATOR } from "@/data/business";

// While the /gold-calculator estimator is hidden behind the launch flag, the
// route 307-redirects to "/". Blog bodies link to it heavily, so rewrite those
// in-body links to a live, relevant page — that way no internal link points at
// a redirect. Restores automatically when SHOW_CALCULATOR is re-enabled.
function resolveHref(href?: string): string | undefined {
  if (!SHOW_CALCULATOR && href === "/gold-calculator") return "/what-we-buy";
  return href;
}

/**
 * Renders a markdown string with the site's prose styling (white + gold).
 * Used for blog article bodies. Tailwind v4 utilities are applied per element
 * so we avoid pulling in the typography plugin.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div
      className="
        text-[1.0625rem] leading-[1.75] text-foreground/80
        [&>p]:mt-5 [&>p:first-child]:mt-0
        [&_a]:font-medium [&_a]:text-gold-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-600
        [&_strong]:font-semibold [&_strong]:text-foreground
        [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-3 sm:[&>h2]:mt-12 sm:[&>h2]:text-3xl
        [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-2
        [&>ul]:mt-5 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6
        [&>ol]:mt-5 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6
        [&>blockquote]:mt-6 [&>blockquote]:border-l-4 [&>blockquote]:border-gold-400 [&>blockquote]:bg-cream-100 [&>blockquote]:py-2 [&>blockquote]:pl-5 [&>blockquote]:pr-4 [&>blockquote]:text-foreground/70 [&>blockquote]:italic
        [&>hr]:my-10 [&>hr]:border-hairline
        [&_th]:border [&_th]:border-hairline [&_th]:bg-cream-100 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border [&_td]:border-hairline [&_td]:px-3 [&_td]:py-2
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...props }) => (
            <a href={resolveHref(href)} {...props}>{children}</a>
          ),
          // Wide tables scroll horizontally on narrow screens instead of
          // clipping at the viewport edge; desktop stays full-width as before.
          table: ({ children, ...props }) => (
            <div className="mt-6 overflow-x-auto overscroll-x-contain">
              <table
                className="w-full min-w-[34rem] border-collapse text-[0.9375rem] leading-[1.6] sm:min-w-0 sm:text-[1.0625rem] sm:leading-[1.75]"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
