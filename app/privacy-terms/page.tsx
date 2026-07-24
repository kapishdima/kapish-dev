import type { Metadata } from "next";
import Link from "next/link";
import { contacts } from "@/lib/config/portfolio";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service — kapish.dev",
  description:
    "Privacy Policy and Terms of Service for kapish.dev and its digital products.",
};

const LAST_UPDATED = "July 24, 2026";

const SectionTitle: React.FC<{ children: React.ReactNode; id?: string }> = ({
  children,
  id,
}) => (
  <h2 className="scroll-mt-8 font-medium text-base" id={id}>
    {children}
  </h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-medium text-sm">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
);

const SupportEmail: React.FC = () => (
  <a
    className="underline underline-offset-4 hover:text-foreground"
    href={`mailto:${contacts.email}`}
  >
    {contacts.email}
  </a>
);

export default function PrivacyTermsPage() {
  return (
    <main>
      <header className="flex items-center justify-between border-border/60 border-b py-4">
        <Link
          className="text-muted-foreground text-sm underline-offset-4 hover:text-foreground hover:underline"
          href="/"
        >
          ← Back to home
        </Link>
      </header>

      <div className="space-y-10 py-10 pb-16">
        <div className="space-y-2">
          <h1 className="font-medium text-lg">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-muted-foreground text-xs">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <section className="space-y-4" id="privacy">
          <SectionTitle>Privacy Policy</SectionTitle>
          <Paragraph>
            This website (kapish.dev) is operated by Dmytro Kapish
            (&quot;we&quot;, &quot;us&quot;). This policy describes what
            information is collected when you visit the site or purchase a
            digital product, and how it is used.
          </Paragraph>

          <SubTitle>Information we collect</SubTitle>
          <Paragraph>
            We collect anonymous usage analytics (pages visited, referrer,
            device and browser type) via a self-hosted OpenPanel instance. This
            data is aggregated and is not used to identify you personally.
          </Paragraph>
          <Paragraph>
            When you make a purchase, the checkout is handled by Creem
            (creem.io), acting as Merchant of Record. Creem collects the
            information required to process your order — such as your name,
            email address, billing country, and payment details. We never see or
            store your full payment card information. We receive your email
            address and order details so we can deliver the product and provide
            support. Creem&apos;s processing of your data is governed by its own
            privacy policy.
          </Paragraph>
          <Paragraph>
            If you contact us by email, we keep the correspondence for as long
            as needed to help you.
          </Paragraph>

          <SubTitle>How we use information</SubTitle>
          <Paragraph>
            We use the collected information to deliver purchased products,
            provide customer support, improve the site, and comply with legal
            obligations. We do not sell or rent your personal information to
            third parties.
          </Paragraph>

          <SubTitle>Your rights</SubTitle>
          <Paragraph>
            You may request access to, correction of, or deletion of your
            personal data at any time by emailing <SupportEmail />. If your
            request concerns payment data, we may redirect you to Creem, which
            controls that data as Merchant of Record.
          </Paragraph>
        </section>

        <section className="space-y-4" id="terms">
          <SectionTitle>Terms of Service</SectionTitle>
          <Paragraph>
            By accessing kapish.dev or purchasing a product offered on it, you
            agree to these terms. If you do not agree, please do not use the
            site or make a purchase.
          </Paragraph>

          <SubTitle>Products and payments</SubTitle>
          <Paragraph>
            We sell digital products (such as software, templates, and digital
            content). All orders are processed by Creem (creem.io) as Merchant
            of Record — Creem is the seller of record for your purchase, handles
            payment processing, taxes, and invoicing, and its terms of service
            apply to the transaction in addition to these terms.
          </Paragraph>
          <Paragraph>
            Prices are shown at checkout and may change at any time. Applicable
            taxes are calculated and collected by Creem based on your billing
            location.
          </Paragraph>

          <SubTitle>Delivery</SubTitle>
          <Paragraph>
            Digital products are delivered electronically (via email or a
            download/access link) after successful payment. If you do not
            receive your product, contact us at <SupportEmail /> and we will
            resolve it.
          </Paragraph>

          <SubTitle>Refunds</SubTitle>
          <Paragraph>
            If a product does not work as described, contact us at{" "}
            <SupportEmail /> within 14 days of purchase and we will work with
            you to fix the issue or issue a refund through Creem. Because the
            products are digital, refunds are not guaranteed once a product has
            been downloaded or accessed, except where required by law.
          </Paragraph>

          <SubTitle>License and acceptable use</SubTitle>
          <Paragraph>
            Unless stated otherwise for a specific product, purchases grant you
            a personal, non-exclusive, non-transferable license to use the
            product. You may not resell, redistribute, or share purchased
            products without permission.
          </Paragraph>

          <SubTitle>Disclaimer and liability</SubTitle>
          <Paragraph>
            The site and products are provided &quot;as is&quot; without
            warranties of any kind. To the maximum extent permitted by law, we
            are not liable for indirect or consequential damages arising from
            the use of the site or products; our total liability is limited to
            the amount you paid for the product concerned.
          </Paragraph>

          <SubTitle>Changes</SubTitle>
          <Paragraph>
            We may update these terms and this privacy policy from time to time.
            The current version is always available on this page, with the
            &quot;last updated&quot; date shown above.
          </Paragraph>
        </section>

        <section className="space-y-4" id="contact">
          <SectionTitle>Contact</SectionTitle>
          <Paragraph>
            Questions about privacy, these terms, or an order? Email us at{" "}
            <SupportEmail />.
          </Paragraph>
        </section>
      </div>
    </main>
  );
}
