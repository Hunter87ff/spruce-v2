import { useState } from 'react';
import Navbar from '../../components/block/Navbar';
import Footer from '../../components/block/Footer';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Basic",
            description: "Perfect for small communities and casual tournaments",
            price: {
                monthly: 0,
                annual: 0
            },
            features: [
                "3 tournaments ",
                "Basic bot features",
                "100 participants per tournament",
                "Discord role integration",
                "Basic analytics"
            ],
            notIncluded: [
                "API access",
                "Custom bot",
                "Custom Point Table",
                "Priority support",
                "Duplicate Tag Filter",
            ]
        },
        {
            name: "Standard",
            description: "Ideal for growing communities and regular events",
            price: {
                monthly: 1,
                annual: 9
            },
            features: [
                "Up to 10 tournaments",
                "Duplicate Tag Filter",
                "Advanced bot features",
                "500 participants per tournament",
                "Custom role management",
                "Detailed analytics",
                "Tournament scheduling",
                "Automated announcements"
            ],
            notIncluded: [
                "API access",
                "Custom bot",
                "Custom Point Table",
                
            ],
            popular: true
        },
        {
            name: "Premium",
            description: "For professional tournaments and large communities",
            price: {
                monthly: 3,
                annual: 29
            },
            features: [
                "Custom bot",
                "Unlimited tournaments",
                "Custom Point Table",
                "Duplicate Tag Filter",
                "Premium bot features",
                "Unlimited participants",
                "24/7 priority support",
                "Advanced role management",
                "Advanced analytics",
                "Tournament scheduling",
                "Automated announcements",
                "API access",
            ],
            notIncluded: []
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-900 px-4 py-16">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Choose Your Tournament Plan
                        </h2>
                        <p className="mt-4 text-xl text-gray-400">
                            Select the perfect plan for your community's needs
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="mt-12 flex justify-center">
                        <div className="relative flex items-center rounded-full bg-gray-800 p-1">
                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${!isAnnual ? 'bg-blue-600 text-white' : 'text-gray-400'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${isAnnual ? 'bg-blue-600 text-white' : 'text-gray-400'
                                    }`}
                            >
                                Annual <span className="text-xs">(Save 20%)</span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="mt-12 grid gap-8 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-2xl ${plan.popular ? 'border-2 border-blue-500 bg-gray-800' : 'bg-gray-800'
                                    } p-8`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                                        <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                    <p className="mt-2 text-gray-400">{plan.description}</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-white">
                                            ${isAnnual ? plan.price.annual : plan.price.monthly}
                                        </span>
                                        <span className="ml-2 text-gray-400">
                                            /{isAnnual ? 'year' : 'month'}
                                        </span>
                                    </div>
                                </div>

                                <button className={`mb-8 w-full rounded-lg py-3 text-sm font-semibold transition-colors ${plan.popular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                    }`}>
                                    Get Started
                                </button>

                                <div className="space-y-4">
                                    <p className="text-sm font-semibold text-white">Included features:</p>
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start">
                                            <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}

                                    {plan.notIncluded.length > 0 && (
                                        <>
                                            <p className="mt-6 text-sm font-semibold text-white">Not included:</p>
                                            {plan.notIncluded.map((feature) => (
                                                <div key={feature} className="flex items-start">
                                                    <X className="mr-3 h-5 w-5 flex-shrink-0 text-gray-500" />
                                                    <span className="text-sm text-gray-400">{feature}</span>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Link */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-400">
                            Have questions?{' '}
                            <button className="text-blue-500 hover:text-blue-400">
                                Check our FAQ
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PricingPage;