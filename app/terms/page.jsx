import LegalPage from "../../components/LegalPage";
import { site } from "../../data/site";

export const metadata = {
  title: "Terms of use",
  description:
    "The terms for using the Alloy Homes website. Short and plain: what the site is for, and what it isn't.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", images: [site.shareImage] },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      path="/terms"
      updated="September 25, 2026"
      intro={`These terms cover your use of this website, run by ${site.legalName} ("Alloy Homes", "we"). By using the site you agree to them. They're written to be read, so they're short.`}
    >
      <h2>What this site is for</h2>
      <p>
        The site shows our work and explains how we build, so you can decide
        whether to get in touch. It's general information, not an offer, a
        quote, or a contract.
      </p>

      <h2>Building with us is a separate agreement</h2>
      <p>
        Nothing on this site creates a building contract. Scope, price,
        schedule, warranty, and everything else about a build are set out in a
        separate written agreement signed by you and Alloy Homes. If anything
        here conflicts with that agreement, the agreement governs.
      </p>

      <h2>The homes and photos shown</h2>
      <p>
        The homes on this site are real Alloy projects, shown as examples of
        our work. Every custom home is different. The design, finishes,
        features, and cost of your home will depend on your own plans, lot, and
        selections.
      </p>

      <h2>Client reviews</h2>
      <p>
        Testimonials are real clients describing their own experience of
        building with us. Your experience may differ.
      </p>

      <h2>Our content</h2>
      <p>
        The photos, text, logo, and design of this site belong to Alloy Homes or
        are used with permission. You're welcome to share links to our pages.
        Please ask us before copying, republishing, or using our photos or text
        for any commercial purpose.
      </p>

      <h2>Using the site fairly</h2>
      <p>
        Please don't try to break, overload, or gain unauthorized access to the
        site, send automated submissions through the inquiry form, or use the
        form to send anything unlawful or abusive.
      </p>

      <h2>Links to other sites</h2>
      <p>
        We link to our social pages, trade associations, and other websites for
        convenience. We don't control those sites and aren't responsible for
        their content.
      </p>

      <h2>No guarantees about the website</h2>
      <p>
        We work to keep the site accurate and available, but it is provided
        as is. We don't promise it will always be available, error-free, or
        up to date.
      </p>

      <h2>Limits on liability</h2>
      <p>
        As far as the law allows, Alloy Homes isn't liable for any loss that
        comes from using this website or relying on its content. This doesn't
        limit anything in a signed building agreement.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Utah, and any
        dispute about the website will be handled by the courts located in
        Utah.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle information you send through the site is explained in
        our <a href="/privacy">privacy policy</a>.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top shows
        when they last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
