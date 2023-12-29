import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Unsubscribe() {
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.replace('/');
          }, 5000);
          return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Layout>
            <section className="w-full min-h-screen bg-[url('/static/images/hero.webp')] bg-cover bg-center grid text-white">
                <div className="h-full p-4 bg-orange/80 md:p-16 flex flex-col">
                    <div className="flex flex-row gap-3 items-center">
                        <h1 className="text-6xl md:text-7xl">YOU HAVE BEEN UNSUBSCRIBED.</h1>
                    </div>
                    <p className="text-2xl lg:text-3xl font-medium">We're sorry to see you go. Know that you're still familia and always welcome back.</p>
                </div>
            </section>
        </Layout>
    );

}