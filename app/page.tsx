import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Brain,
  Lightbulb,
  Cloud,
  Smartphone,
  Shield,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Recording",
    description:
      "Effortlessly capture your thoughts with high-quality voice recording. Just tap and speak — Fikr does the rest.",
  },
  {
    icon: Brain,
    title: "AI Transcription",
    description:
      "Instantly transcribe your voice memos into clean, editable text using state-of-the-art AI models.",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description:
      "Get AI-powered analysis and insights from your notes. Surface patterns, summaries, and action items automatically.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Seamlessly sync your notes across all your devices with secure, encrypted cloud storage powered by Firebase.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description:
      "Available on iOS, Android, macOS, and Windows. Your thoughts, everywhere you are.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Your data stays local by default. Cloud sync is fully optional. You own your data, always.",
  },
];

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Basic features for local use",
    features: [
      "Voice recording & playback",
      "On-device transcription",
      "Local-only data storage",
      "Unlimited notes",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "0",
    originalPrice: "4.99",
    badge: "Limited Offer",
    description: "Cloud Sync + Enhanced Features",
    features: [
      "Everything in Free",
      "Cloud sync via Firebase",
      "Cross-device access",
      "Automatic backups",
      "Priority support",
    ],
    cta: "Get Plus Free",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "14.99",
    badge: "Coming Soon",
    description: "Managed AI + Advanced Insights",
    features: [
      "Everything in Plus",
      "No API key needed",
      "Managed AI transcription",
      "Advanced AI insights",
      "Increased usage limits",
    ],
    cta: "Coming Soon",
    highlighted: false,
    disabled: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/3 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40 text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-medium border border-teal/20 bg-teal/10 text-teal"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Now available on iOS & Android
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Capture thoughts by voice,
            <br />
            <span className="gradient-text">get AI-powered insights</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            Fikr transforms your spoken ideas into organized, searchable notes
            with intelligent analysis. Think out loud — let AI do the rest.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-teal text-teal-foreground hover:bg-teal/90 px-8 py-6 text-base font-semibold shadow-lg shadow-teal/20 transition-all hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5"
            >
              Download Fikr
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base border-border/60 hover:border-teal/40 hover:bg-teal/5 transition-all"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>

          {/* Floating logo */}
          <div className="mt-16 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-teal/20 rounded-3xl blur-2xl scale-110" />
              <img
                src="/fikr-logo-dark.png"
                alt="Fikr App"
                width={120}
                height={120}
                className="relative rounded-3xl shadow-2xl shadow-teal/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 border border-teal/20 bg-teal/10 text-teal"
            >
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything you need to{" "}
              <span className="gradient-text">think clearly</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Fikr combines voice recording, AI transcription, and intelligent
              insights into one seamless experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="glow-card group bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal/30 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal/20 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/3 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 border border-teal/20 bg-teal/10 text-teal"
            >
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Start free,{" "}
              <span className="gradient-text">scale when ready</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Choose the plan that fits your workflow. Upgrade anytime — your
              local data syncs automatically.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`glow-card relative flex flex-col bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-teal/40 shadow-lg shadow-teal/10"
                    : "border-border/50 hover:border-teal/20"
                } ${plan.disabled ? "opacity-80 grayscale-[0.5]" : ""}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-teal text-teal-foreground border-0 px-3 py-0.5 text-xs font-semibold shadow-md shadow-teal/20 whitespace-nowrap">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through decoration-teal/40">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-teal shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button
                    disabled={plan.disabled}
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-teal text-teal-foreground hover:bg-teal/90 shadow-md shadow-teal/20"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to think{" "}
            <span className="gradient-text">out loud?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Download Fikr today and start capturing your best ideas with the
            power of your voice and AI.
          </p>
          <Button
            size="lg"
            className="bg-teal text-teal-foreground hover:bg-teal/90 px-10 py-6 text-base font-semibold shadow-lg shadow-teal/20 transition-all hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5"
          >
            Download Fikr
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
