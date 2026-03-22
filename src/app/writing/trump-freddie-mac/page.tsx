import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Trump Wants to IPO Freddie and Fannie | Jack Guillet",
  description:
    "Why taking Freddie Mac and Fannie Mae public with government guarantees is a world class disaster idea.",
};

export default function TrumpFreddieMac() {
  return (
    <div className="min-h-screen">
      <article className="mx-auto max-w-2xl px-6 py-24 md:px-8">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft className="size-4" />
          Back home
        </a>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Trump Wants to IPO Freddie and Fannie
          </h1>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            2025 &middot; 3 min read &middot; Jack Guillet
          </p>
        </header>

        <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Very recently, DJT announced that he intends to take Freddie Mac and
            Fannie Mae public with explicit government guarantees. As all young
            men with a Twitter do, they immediately sent this nonsense to their
            very political group chat with buddies who engage in lots of lively
            chats. Often times, there are contrasting opinions. But not today.
            There was agreement that this was a world class disaster idea.
          </p>

          <p>
            Freddie Mac and Fannie Mae are government-sponsored enterprises that
            buy mortgages from private lenders and package them into
            mortgage-backed securities. They don&apos;t give out loans directly,
            but they make it possible for banks to give out more loans by
            absorbing the risk. Fannie Mae has been around since 1938, Freddie
            Mac since 1970. The government has been distorting the mortgage
            market for almost 90 years. After the housing crisis in &apos;08,
            both were placed into federal conservatorship and have operated
            under explicit government backing ever since. The result? Private
            lenders hand out optimistic mortgages knowing the risk lands on the
            taxpayer. For decades, this system has been putting people in homes
            they can&apos;t afford at the expense of the taxpayer. Not only is
            the expense in covering the underwater loans, but by increasing
            demand for housing, the market is now inflated. So, people pay taxes
            which are then used to increase demand, inflating the cost of
            housing so they can&apos;t afford it. A double kick in the nuts.
          </p>

          <p>
            The idea is essentially that Mac/Mae would operate as publicly
            traded companies who are still funded by the federal government to
            provide dog shit loans. Now shareholders get to profit from the
            upside while taxpayers continue to eat the downside. It&apos;s the
            same moral hazard, but with a ticker symbol. Note: if what Trump
            actually meant was the government will guarantee all existing loans
            while Mae/Mac now have no federal backing for new loans, that&apos;s
            a different story (and a nightmarish story to try to decipher).
          </p>

          <p>
            Either way, the answer is not to find new ways to dress up the same
            broken system. The answer is to get the government out of the
            mortgage business entirely. But that&apos;s a longer conversation
            &mdash; one I get into in my{" "}
            <a
              href="/writing/housing-thesis"
              className="text-accent-cyan underline underline-offset-4 hover:opacity-80"
            >
              broader housing thesis
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
