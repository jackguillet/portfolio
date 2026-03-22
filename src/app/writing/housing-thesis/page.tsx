import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "The American Housing Crisis | Jack Guillet",
  description:
    "Why federally subsidized mortgages, low interest rates, and restrictive zoning have created a housing market that punishes the working class.",
};

export default function HousingThesis() {
  return (
    <div className="min-h-screen">
      <article className="mx-auto max-w-2xl px-6 py-24 md:px-8">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-opacity hover:opacity-60"
        >
          <ArrowLeft className="size-4" />
          Back home
        </a>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            The American Housing Crisis
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            A Free Market Argument
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            2025 &middot; 10 min read &middot; Jack Guillet
          </p>
        </header>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            When a society agrees that housing should be the primary vehicle of
            retirement funds, you can expect a complete disaster down the road.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            The Core Problem
          </h2>

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

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            Why These Loans Are Garbage
          </h2>

          <p>
            The system enables loans to people who really can&apos;t afford
            them, at subsidized rates. GSE-backed loans actually defaulted at
            lower rates than private-label mortgages during the &apos;08 crisis.
            It was Wall Street&apos;s unregulated mortgage-backed securities
            that blew up the worst. But the GSEs&apos; problem was sheer scale:
            they guaranteed trillions in mortgages, so even a modest default
            rate required a $190 billion taxpayer bailout. And when things go
            south, the government bends over backwards to prevent defaults.
            During COVID, borrowers could pause payments for up to 18 months
            with no penalty. Missed payments were simply tacked onto the end of
            the loan. No change in principal, no rate change, just good old
            fashioned taxpayer absorbing the risk for people who took on debt
            they couldn&apos;t pay down.
          </p>

          <p>
            So not only does the federal government use your taxes to pay for
            bad mortgages for others, but by doing so it inflates the value of
            the home you want to purchase so it is unattainable. Moral of the
            story? The government should have stayed out of housing financing,
            and now is a better time than later to start correcting its mistake.
            The government should instead focus on deregulating building
            permitting and zoning so that we can actually build new, dense
            housing to accommodate population growth and live in nicer places
            for less money. But they won&apos;t. No shot. And here is why.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            Why Housing as Retirement Is Broken
          </h2>

          <p>
            Why do we need housing to support retirement when there are a myriad
            of better options? If housing is cheaper, you don&apos;t need as
            much retirement saved up. You could be investing in the stock
            market, buying bonds, sending kids to school, starting a business,
            giving to charity.
          </p>

          <p>
            The 30 year fixed rate mortgage essentially led people to purchase
            homes they couldn&apos;t afford, increasing demand and driving up
            prices. The 30 year fixed is almost uniquely American. Most
            countries use adjustable rate mortgages. The product only exists
            because of Fannie Mae and Freddie Mac, which created a secondary
            market large enough to make it viable for lenders. Without
            government backing, no private lender would take on 30 years of
            interest rate risk. So the very instrument that Americans consider a
            birthright is itself a product of the government distortion
            I&apos;ve been describing.
          </p>

          <p>
            These buyers add to those who need the housing market to go up
            because their retirement depends on it. It creates a musical chairs
            scenario where individuals need to get in on a home to ride the
            inflation wave and spiking asset values, but this dream has an ugly
            ending one way or another. So you better get off the ride before it
            crashes.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            The Tools That Don&apos;t Work
          </h2>

          <p>
            You may say: why can&apos;t we just get more people into homes using
            different tools? Why do we need to collapse the housing market?
            Let&apos;s look at what&apos;s available. Specifically, how can we
            make housing more attainable and affordable while ensuring that the
            market continues to rise?
          </p>

          <h3 className="!mt-8 text-xl font-semibold text-foreground">
            Interest Rates
          </h3>

          <p>
            This has been the bread and butter of this country for the better
            part of the last 50 years. Just a bunch of people on their knees
            begging for ZIRP. Begging for low rates. Here is what low rates
            actually do.
          </p>

          <p>
            Mortgage payments come down. The sticker price goes up, and monthly
            payments go down. A win for retirement accounts and for buyers,
            supposedly. But if everyone who owns a home now has a 3% rate
            (because you can refinance a fixed rate mortgage for the remainder
            of its length), and current rates are at 8%, then who can afford the
            homes? If all the home owners value their homes at 3% rates, and the
            buyers value the same home at 8% rates, the discrepancy will be
            massive. This is what creates a housing bubble and it is causing the
            exact one we are seeing right now.
          </p>

          <p>
            And why can&apos;t we just have low rates? Low rates lead to rampant
            inflation and wild leveraging sprees. It creates an economy that
            devalues productive work and incentivizes just owning as much as
            absolutely possible because inflation will turn the same payment
            from a burden to a light dent in a matter of just a few years. It
            encourages all the wrong things in an economy.
          </p>

          <h3 className="!mt-8 text-xl font-semibold text-foreground">
            Federally Subsidized Housing
          </h3>

          <p>
            This is essentially what started this whole discussion. Freddie Mac
            and Fannie Mae use taxpayer dollars to subsidize home ownership for
            lower and middle class. Sounds great at first. But once again, this
            is a temporary, bullshit band-aid solution that will only make the
            root cause worse. Things like Section 8 or subsidized loans result
            in increased prices to rent or buy, while the underlying asset gains
            value at the expense of the taxpayer.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            Why Nothing Will Change
          </h2>

          <p>
            First, people who own homes (a lot of people) need their home to
            rise in value for their retirement funds. Housing equity makes up a
            majority of the median retirement portfolio in America. Any
            politician who threatens that is dead on arrival.
          </p>

          <p>
            Second, if the cost of housing came down, so would assets.
            Let&apos;s say I get my way and good old free market capitalism
            sweeps over the housing market and government actually allows us to
            build new shit. The housing market will collapse. I mean collapse.
            30%+. Assets are correlated, and other assets will plummet, which
            will not make the donor class very happy at all. It will cause a
            gigantic recession. Even considering this outcome, I am hoping for
            the correction. Every single young person in this country should be
            hoping for it as well. Not because they need extra help, or they are
            &quot;socialist,&quot; but because they want to bring back free
            market capitalism to American assets.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            Potential Outcomes
          </h2>

          <p>
            <strong className="text-foreground">
              Scenario 1: Permanent Inflation.
            </strong>{" "}
            House prices keep going up, so rates stay low. This causes massive
            inflation. Wages continue to be diminished as asset values
            skyrocket. This ultimately ends in normal people being unable to
            grow wealth because they can no longer afford any assets. In this
            scenario, expect the government to go deeper and deeper into debt to
            subsidize working and lower class housing at the expense of the
            middle class, who are now also completely priced out. This will
            cause an even larger increase in wealth inequality in the country
            and continue to encourage gambling as the better way to achieve
            wealth as opposed to productive work.
          </p>

          <p>
            <strong className="text-foreground">
              Scenario 2: The Correction.
            </strong>{" "}
            The painful yet necessary &quot;coming to Jesus&quot; moment for the
            entire US economy. The only way out is through. Someone, almost
            everyone, is going to take a loss. The reality is that people owe
            loans for assets that are worth significantly less than they would
            like to believe. When the market corrects, it will cause a massive
            economic collapse. If you&apos;re smart enough to develop an
            off-ramp to this disaster, my ears are open. But there will
            inevitably be pain.
          </p>

          <h2 className="!mt-12 text-2xl font-bold text-foreground">
            What Would It Take?
          </h2>

          <p>
            So what actually gets the ball rolling? What policy changes would
            have to be enacted?
          </p>

          <p>
            <strong className="text-foreground">1. Building.</strong> This is
            likely the easiest one to get most people on board. Because while
            deregulating to allow denser building will bring down the value of
            homes, at least there is tangible and visible value in watching
            cities and suburbs modernize to allow for more housing, which brings
            in more shops, restaurants, and businesses. We need to go after the
            zoning and permitting restrictions enacted in the 1970s that are now
            a stranglehold on our ability to provide and improve housing in this
            country.
          </p>

          <p>
            <strong className="text-foreground">
              2. Eliminate the federal deficit.
            </strong>{" "}
            Mostly by raising taxes, especially in the upper brackets. You might
            think this is completely out of left field. For the last thousand
            words I have been bitching and moaning for the federal government to
            stay out of the loan business and deregulate the housing industry.
            You might paint me as a libertarian free market extremist. I
            wouldn&apos;t consider myself an extremist, but frankly I&apos;m not
            that far off. So to suggest raising taxes on the rich may be a
            surprise.
          </p>

          <p>
            But here is the reality. The larger the government deficit, the more
            they need to borrow money. When the government goes into debt to pay
            for services for the poor, they are doing so by paying for housing,
            healthcare, military funding, much of which funds the assets of
            those who own them. Essentially, the government borrows money from
            the wealthy with interest, and then uses that money to purchase
            services, rents, and research that increase the value of assets.
            Then, those bonds are paid back with interest. It is directly
            contributing to growing wealth inequality.
          </p>

          <p>
            This is where I likely lose my conservative readers with claims like
            &quot;this kid is just a socialist.&quot; Well, they are extremely
            wrong. It is the older asset holders that are the ones who beg for
            socialism. They want socialism in the form of federal bailouts when
            their assets collapse.
          </p>

          <p>
            For the last few decades, interest rates have been at historically
            low levels, especially after the crisis in &apos;08 and COVID. These
            incidents resulted in ZIRP, which causes runaway inflation. This
            inflation is a huge boon to assets while it punishes the working
            class whose wages cannot keep up. While individuals are working and
            losing access to building wealth, it is those who already own the
            assets who sit on them and watch them balloon in value while they
            add no value to the product.
          </p>

          <p>
            This is the heart of the issue I take with the economy. If someone
            buys a run down home and either remodels or rebuilds it, preferably
            into something denser, they are providing a huge value to society by
            increasing the quality of life available at that location and they
            deserve to be paid appropriately by watching the value of that asset
            increase. Another legitimate form of value gain is demand. The
            demand to live in or around a major city has increased significantly
            in the last few decades. For the old couple that owns a home in an
            area that has seen increased demand, that is a legitimate gain in
            value because they held onto an asset that became inherently more
            valuable. The issue I take is the value gain that assets see from
            the manipulation of the dollar via low rates and quantitative
            easing.
          </p>

          <div className="!mt-16 border-t border-border pt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              This is an evolving thesis.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
