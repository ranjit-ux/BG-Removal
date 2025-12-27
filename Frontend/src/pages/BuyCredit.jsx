import React from "react";
import { assets } from "../assets/assets";

const plans = [
  {
    name: "Starter",
    oldPrice: "₹499",
    price: "₹199",
    credits: "40 Images",
    perImage: "₹4.9 / image",
    desc: "Perfect for personal projects and quick background removal",
    features: [
      "HD Quality",
      "Transparent PNG",
      "No Watermark",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    oldPrice: "₹999",
    price: "₹499",
    credits: "150 Images",
    perImage: "₹3.3 / image",
    desc: "Best for creators & freelancers",
    features: [
      "Ultra HD Quality",
      "Transparent PNG",
      "Batch Processing",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Business",
    oldPrice: "₹1599",
    price: "₹999",
    credits: "400 Images",
    perImage: "₹2.4 / image",
    desc: "For teams & heavy usage",
    features: [
      "4K Quality",
      "Bulk Uploads",
      "Fast Processing",
      "Dedicated Support",
    ],
    popular: false,
  },
];

const BuyCredit = () => {
  return (
    <div className="px-6 lg:px-44 py-20 bg-linear-to-b from-white to-slate-50 min-h-screen">
    
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Choose the Plan That’s{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">
            Right for You
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          One-time payment. No subscription. Use credits anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 bg-white border transition 
            ${
              plan.popular
                ? "border-purple-500 shadow-2xl scale-105"
                : "border-gray-200 hover:shadow-xl"
            }`}
          >
            {/* Badge */}
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Plan Name */}
            <h3 className="text-xl font-semibold text-gray-800">
              {plan.name}
            </h3>

            <p className="mt-2 text-gray-500 text-sm">{plan.desc}</p>

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  {plan.oldPrice}
                </span>
                <span className="text-4xl font-extrabold text-gray-800">
                  {plan.price}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {plan.credits} • {plan.perImage}
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`mt-8 w-full py-3 rounded-full font-semibold transition 
              ${
                plan.popular
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105"
                  : "border border-gray-300 hover:border-purple-400 text-gray-700"
              }`}
            >
              {plan.popular ? "Upgrade to Pro 🚀" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      {/* Trust */}
      <p className="mt-16 text-center text-xs text-gray-500">
        Secure payments • Instant credit delivery • 24/7 support
      </p>
    </div>
  );
};

export default BuyCredit;
