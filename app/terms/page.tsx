import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Fikr",
  description:
    "Read the Terms of Use for the Fikr mobile application.",
};

export default function TermsOfUse() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 prose-legal">
        <h1>Terms of Use</h1>
        <p className="text-sm text-muted-foreground !mb-8">
          Last updated: February 15, 2025
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the Fikr application
          (&quot;App&quot;), you agree to be bound by these Terms of Use
          (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
          App.
        </p>

        <h2>2. Description of Service</h2>
        <p>Fikr is a voice-to-note application that allows you to:</p>
        <ul>
          <li>Record voice memos and convert them to text using AI.</li>
          <li>Organize, edit, and manage your notes.</li>
          <li>Generate AI-powered insights from your notes.</li>
          <li>
            Optionally sync your data across devices (with eligible subscription
            plans).
          </li>
        </ul>

        <h2>3. User Accounts and API Keys</h2>

        <h3>3.1 API Keys</h3>
        <p>
          The App may require you to provide your own API keys from third-party
          AI providers (e.g., OpenAI). You are responsible for:
        </p>
        <ul>
          <li>Maintaining the confidentiality of your API keys.</li>
          <li>All charges incurred through the use of your API keys.</li>
          <li>
            Complying with the terms of service of the respective AI providers.
          </li>
        </ul>

        <h3>3.2 Account Security</h3>
        <p>
          If you use cloud sync features, you are responsible for maintaining the
          security of your account credentials. Notify us immediately of any
          unauthorized use.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to use the App to:</p>
        <ul>
          <li>
            Upload or process content that is unlawful, harmful, threatening,
            abusive, or otherwise objectionable.
          </li>
          <li>Violate any applicable local, national, or international law.</li>
          <li>
            Infringe upon the intellectual property rights of others.
          </li>
          <li>
            Attempt to reverse-engineer, decompile, or disassemble the App.
          </li>
          <li>
            Interfere with or disrupt the App&apos;s infrastructure.
          </li>
        </ul>

        <h2>5. Intellectual Property</h2>

        <h3>5.1 App Ownership</h3>
        <p>
          The App, including its design, code, features, and documentation, is
          owned by Fikr and protected by intellectual property laws. You are
          granted a limited, non-exclusive, non-transferable license to use the
          App.
        </p>

        <h3>5.2 Your Content</h3>
        <p>
          You retain full ownership of all content you create using the App,
          including voice recordings, notes, and any derived insights. We claim
          no ownership over your content.
        </p>

        <h2>6. Subscriptions and Payments</h2>

        <h3>6.1 Free Tier</h3>
        <p>
          The free tier allows you to use the App with your own API keys. All
          data is stored locally on your device.
        </p>

        <h3>6.2 Paid Subscriptions</h3>
        <p>
          Paid subscriptions (when available) may include additional features
          such as cloud sync and managed AI access. Subscription terms:
        </p>
        <ul>
          <li>
            Subscriptions are billed through Apple App Store or Google Play
            Store.
          </li>
          <li>
            Subscriptions auto-renew unless cancelled at least 24 hours before
            the end of the current period.
          </li>
          <li>
            You can manage and cancel subscriptions through your device&apos;s
            app store settings.
          </li>
        </ul>

        <h3>6.3 Refunds</h3>
        <p>
          Refund requests are handled by Apple or Google according to their
          respective refund policies.
        </p>

        <h2>7. Disclaimers</h2>

        <h3>7.1 AI Accuracy</h3>
        <p>
          AI-generated transcriptions and insights may contain errors. The App is
          provided as a productivity tool, and you should not rely solely on
          AI-generated content for critical decisions.
        </p>

        <h3>7.2 Service Availability</h3>
        <p>
          The App is provided &quot;as is&quot; and &quot;as available.&quot; We
          make no warranties regarding uptime, accuracy, or reliability.
          Third-party AI services may experience downtime or changes outside our
          control.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Fikr shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          including but not limited to loss of data, loss of profits, or business
          interruption.
        </p>

        <h2>9. Data Loss</h2>
        <p>
          While we implement reasonable measures to protect your data, we are not
          responsible for data loss resulting from:
        </p>
        <ul>
          <li>Device failure or loss.</li>
          <li>
            Deletion of data through the App&apos;s built-in features.
          </li>
          <li>Third-party service interruptions.</li>
        </ul>
        <p>
          We strongly recommend using the export feature to regularly back up
          your data.
        </p>

        <h2>10. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use
          of the App after changes constitutes acceptance of the updated Terms.
        </p>

        <h2>11. Termination</h2>
        <p>
          We may terminate or suspend your access to the App at any time, without
          prior notice, for conduct that we believe violates these Terms or is
          harmful to other users or us.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with
          applicable laws, without regard to conflict of law principles.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions about these Terms, please contact us at:
        </p>
        <p>
          📧{" "}
          <a href="mailto:support@fikr.app">
            <strong>support@fikr.app</strong>
          </a>
        </p>
      </div>
    </section>
  );
}
