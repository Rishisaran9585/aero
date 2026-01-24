import { getPackageBySlug, allPackages } from "@/data/packages";
import PackageDetailsClient from "@/components/PackageDetailsClient";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
    return allPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);

    if (!pkg) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
                <Link href="/package1" className="text-secondary flex items-center gap-2">
                    <ChevronLeft size={20} /> Back to Packages
                </Link>
            </div>
        );
    }

    return <PackageDetailsClient pkg={pkg} />;
}
