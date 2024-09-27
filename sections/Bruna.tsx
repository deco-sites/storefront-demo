import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  image?: ImageWidget;
  layout?: "Free" | "Pro" | "Business" | "Enterprise";
}

export default function PricingSection({
  title = "Choose Your Plan",
  description = "Select the perfect plan for your needs",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  layout = "Pro"
}: Props) {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Gain full control at no cost. Test in our sandbox and go live for free in just minutes.",
      features: [
        "Git-based CMS",
        "Free public GitHub Repos",
        "Hosting (5K Pageviews / Mo)",
        "Unlimited Public Projects",
        "Up to 5 Members",
        "Custom Domains"
      ],
      buttonText: "Start for Free",
      highlighted: layout === "Free"
    },
    {
      name: "Pro",
      price: "$9",
      description: "Ideal for freelancers looking to deliver professional websites to their clients with ease.",
      features: [
        "Web IDE with Live Previews",
        "Private GitHub Repos",
        "Hosting (50K Pageviews / Mo)",
        "Unlimited Private Project",
        "Up to 20 Members",
        "AB Testing & Results"
      ],
      buttonText: "Get Started",
      highlighted: layout === "Pro"
    },
    {
      name: "Business",
      price: "$99",
      description: "Ideal for growing brands and agencies that need to manage multiple projects efficiently.",
      features: [
        "Hosting (500K Pageviews / Mo)",
        "GetSiteDone Pro for Free",
        "Customizable Roles & Permissions",
        "SSO",
        "99.99% Uptime SLA"
      ],
      buttonText: "Get Started",
      highlighted: layout === "Business"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Edge-native Universal CMS for organizations with specific needs.",
      features: [
        "Premium Support",
        "Access to Professional Services",
        "Special Deals for Self-Hosting",
        "Whitelabel Licensing"
      ],
      buttonText: "Book a Demo",
      highlighted: layout === "Enterprise"
    }
  ];

  return (
    <section class="py-16" style={{ backgroundColor, color: textColor }}>
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-4">{title}</h2>
        <p class="text-xl text-center mb-12">{description}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              class={`rounded-lg p-6 ${
                plan.highlighted
                  ? "border-2 border-green-500"
                  : "border border-gray-700"
              }`}
            >
              <h3 class="text-2xl font-bold mb-2">{plan.name}</h3>
              <p class="text-3xl font-bold text-green-500 mb-4">
                {plan.price}
                <span class="text-sm font-normal">/ month</span>
              </p>
              <p class="mb-6">{plan.description}</p>
              <button
                class={`w-full py-2 px-4 rounded ${
                  plan.highlighted
                    ? "bg-green-500 text-black"
                    : "bg-gray-700 text-white"
                } hover:opacity-90 transition-opacity`}
              >
                {plan.buttonText}
              </button>
              <ul class="mt-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} class="flex items-center">
                    <svg
                      class="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}