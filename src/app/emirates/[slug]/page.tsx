import React from 'react';
import { emiratesData } from '@/data/emirates';
import EmiratePageContent from '@/components/EmiratePageContent';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const dynamicParams = false;

export async function generateStaticParams() {
    return Object.keys(emiratesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function EmiratePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = emiratesData[slug];

    if (!data) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-white mb-4">Emirate Not Found</h1>
                    <Link href="/">
                        <Button>Return Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return <EmiratePageContent data={data} />;
}
