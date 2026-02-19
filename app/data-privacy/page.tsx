import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Database,
  Download,
  Trash2,
  Mail,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Privacy & Account Deletion — Fikr",
  description:
    "Learn how Fikr handles your data, how to export it, and how to delete your account and all associated data.",
};

export default function DataPrivacy() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="prose-legal">
          <h1>Data Privacy & Account Deletion</h1>
          <p className="text-sm text-muted-foreground !mb-8">
            Last updated: February 15, 2025
          </p>

          <p>
            At Fikr, we believe you should have full control over your data.
            This page explains what data we collect, how it is stored, and how
            you can export or permanently delete your data and account.
          </p>
        </div>

        {/* Quick overview cards */}
        <div className="grid gap-4 sm:grid-cols-3 my-10">
          <Card className="glow-card bg-card/50 border-border/50">
            <CardContent className="pt-6 text-center">
              <Database className="h-8 w-8 text-teal mx-auto mb-3" />
              <p className="text-sm font-medium">Local by Default</p>
              <p className="text-xs text-muted-foreground mt-1">
                Data stays on your device
              </p>
            </CardContent>
          </Card>
          <Card className="glow-card bg-card/50 border-border/50">
            <CardContent className="pt-6 text-center">
              <Shield className="h-8 w-8 text-teal mx-auto mb-3" />
              <p className="text-sm font-medium">Encrypted in Transit</p>
              <p className="text-xs text-muted-foreground mt-1">
                TLS for all cloud data
              </p>
            </CardContent>
          </Card>
          <Card className="glow-card bg-card/50 border-border/50">
            <CardContent className="pt-6 text-center">
              <Trash2 className="h-8 w-8 text-teal mx-auto mb-3" />
              <p className="text-sm font-medium">Full Deletion</p>
              <p className="text-xs text-muted-foreground mt-1">
                Delete everything, anytime
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose-legal">
          <h2>1. What Data We Collect</h2>

          <h3>Data Stored Locally (All Plans)</h3>
          <ul>
            <li>Voice recordings and audio files</li>
            <li>Transcribed text and notes</li>
            <li>AI-generated insights and summaries</li>
            <li>App preferences and settings</li>
            <li>
              API keys (stored securely in your device&apos;s encrypted storage)
            </li>
          </ul>

          <h3>Data Stored in the Cloud (Plus, Pro, Pro Plus Plans)</h3>
          <p>
            If you enable cloud sync by subscribing to a Plus, Pro, or Pro Plus
            plan, the following data is synced to our Firebase servers:
          </p>
          <ul>
            <li>Your notes and transcriptions</li>
            <li>App settings and preferences</li>
            <li>
              Account information (email, display name via Google Sign-In)
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Voice recordings (audio files) are{" "}
            <strong>not</strong> synced to the cloud. They remain on your device
            only.
          </p>

          <h2>2. How to Export Your Data</h2>
          <p>
            You can export all your notes and data from within the App at any
            time:
          </p>
          <ul>
            <li>
              Open the Fikr app and go to <strong>Settings</strong>.
            </li>
            <li>
              Tap <strong>Export Data</strong>.
            </li>
            <li>Choose your preferred format and save location.</li>
            <li>
              Your notes, transcriptions, and insights will be exported to the
              selected location.
            </li>
          </ul>

          <h2>3. How to Delete Your Account & Data</h2>
          <p>
            You have multiple ways to delete your data depending on your
            subscription plan.
          </p>

          {/* Account Deletion Steps */}
          <div className="my-8 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h3 className="!mt-0 !mb-0 text-destructive">
                Account & Data Deletion
              </h3>
            </div>
            <p className="text-sm !mb-4">
              <strong>Warning:</strong> Deleting your account is permanent and
              cannot be undone. All your data will be permanently removed.
            </p>

            <h3>Option A: Delete from Within the App</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Open the Fikr app on your device.
              </li>
              <li>
                Navigate to <strong>Settings</strong> (gear icon).
              </li>
              <li>
                Scroll down to the <strong>Account</strong> section.
              </li>
              <li>
                Tap <strong>&quot;Delete Account&quot;</strong>.
              </li>
              <li>
                Confirm the deletion when prompted.
              </li>
              <li>
                Your account and all cloud-synced data will be permanently
                deleted within 24 hours.
              </li>
            </ol>

            <h3>Option B: Delete Local Data Only (Free Plan)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Open the Fikr app on your device.
              </li>
              <li>
                Navigate to <strong>Settings</strong>.
              </li>
              <li>
                Tap <strong>&quot;Clear All Data&quot;</strong>.
              </li>
              <li>
                Confirm the action. All local notes, recordings, and settings
                will be permanently erased.
              </li>
            </ol>

            <h3>Option C: Request Deletion via Email</h3>
            <p className="text-sm">
              If you are unable to access the App, you can request account and
              data deletion by emailing us:
            </p>
            <p className="text-sm">
              📧{" "}
              <a href="mailto:support@fikr.app">
                <strong>support@fikr.app</strong>
              </a>
            </p>
            <p className="text-sm">
              Please include the email address associated with your account. We
              will process your request and delete all associated data within{" "}
              <strong>30 days</strong>.
            </p>
          </div>

          <h2>4. What Happens After Deletion</h2>
          <ul>
            <li>
              All your cloud-synced data (notes, settings, account info) is
              permanently removed from Firebase.
            </li>
            <li>
              Your Firebase Authentication account is deleted.
            </li>
            <li>
              Local data on your device is cleared if you initiated deletion from
              within the App.
            </li>
            <li>
              Any active subscriptions should be cancelled separately through the
              Apple App Store or Google Play Store to avoid future charges.
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We do not retain any user data after account deletion, with the
            following exceptions:
          </p>
          <ul>
            <li>
              <strong>Analytics data:</strong> Anonymized, aggregated usage
              analytics may be retained for product improvement purposes. This
              data cannot be used to identify you.
            </li>
            <li>
              <strong>Legal obligations:</strong> We may retain certain data if
              required by law or to resolve disputes.
            </li>
          </ul>

          <h2>6. Third-Party Data</h2>
          <p>
            When using AI features, your voice recordings are sent to
            third-party AI providers for processing. These providers have their
            own data retention policies:
          </p>
          <ul>
            <li>
              <strong>OpenAI:</strong> Audio data sent via API is not used for
              training and is retained for up to 30 days for abuse monitoring.
              See{" "}
              <a
                href="https://openai.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google (Vertex AI):</strong> Data processed through Vertex
              AI is subject to Google Cloud&apos;s data processing terms. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about your data, privacy, or account
            deletion, please contact us:
          </p>
          <p>
            📧{" "}
            <a href="mailto:support@fikr.app">
              <strong>support@fikr.app</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
