import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Map, Award, Users, CheckCircle, Trophy } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <PageHeader
                title="Our Story"
                subtitle="Bridging cultures and creating memories since 2010. A legacy of excellence in Dubai tourism."
                image="/assets/abu_dhabi.jpg"
                highlight="Who We Are"
                isLarge={true}
            />

            <section className="py-24 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">The Aerosafe Promise</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Redefining Luxury Travel in the UAE</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                            <p>
                                Aerosafe Tours is more than just a travel agency; we are your personal concierge in Dubai. With a passion for perfection and a deep understanding of the region, we curate experiences that go beyond the ordinary.
                            </p>
                            <p>
                                Our strength lies in our ownership. owning our own fleet of luxury vehicles and having in-house licensed guides allows us to maintain strict quality control over every aspect of your journey.
                            </p>
                            <p>
                                Through our sister brand, <strong>First Dream Destination</strong>, we seamlessly connect travelers from India (Chennai & Trivandrum) to the UAE, creating a bridge of trust and comfort.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-10">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
                                <p className="text-sm text-secondary uppercase tracking-widest">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">50k+</h4>
                                <p className="text-sm text-secondary uppercase tracking-widest">Happy Travelers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
                    <div className="lg:col-span-6">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">The Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Built on Trust with<br />Aerosafe Tours</h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-light max-w-xl">
                            As a globally recognized leader in travel management, Aerosafe provides the robust operational backbone that powers our journeys. Known for unwavering safety standards and seamless logistics, it ensures every trip is grounded in reliability.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <Map className="h-8 w-8 text-secondary mb-5" />
                                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                                <p className="text-gray-400 text-sm">Connections in 50+ countries</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <Shield className="h-8 w-8 text-secondary mb-5" />
                                <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
                                <p className="text-gray-400 text-sm">24/7 dedicated support team</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-10">
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">Mastering the Art</span>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">of Experience</h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                                At First Dream Destinations, we design journeys, not just trips—crafting moments that stay with you long after travel ends.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <CheckCircle className="h-6 w-6 text-secondary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Artisanal Curation</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Each itinerary is carefully tailored to reflect your interests and values.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="h-6 w-6 text-secondary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Exclusive Proximity</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Access private estates, hidden spaces, and local stories beyond the usual routes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="h-6 w-6 text-secondary mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Invisible Logistics</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">We manage every detail seamlessly, so you focus only on the experience.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-10 text-sm text-gray-500">
                                First Dream Destinations is Aerosafe Tours’ sister company in India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Shield, title: "Licensed & Secure", desc: "Fully DTCM approved with comprehensive insurance." },
                        { icon: Users, title: "Personalized Care", desc: "We treat every guest like family, not just a customer." },
                        { icon: Trophy, title: "Award Winning", desc: "Recognized for excellence in service and hospitality." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors">
                            <item.icon className="h-10 w-10 text-secondary mb-6" />
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

        </div>
    );
}
