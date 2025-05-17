'use client'

import Navbar from "./Navbar"
import Footer from "./Footer"
import { ReactNode } from "react"
import BackgroundImage from "./BackGroundImage"


export default function AuthLayout ({children}: { children: ReactNode}) {
    return (
        <div className="bg-black text-gray-100 relative min-h-screen overflow-hidden">
            <BackgroundImage />

            <div className="relative z-10">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Your one in a million might be closer than you think
                        </h1>

                        <p className="text-4xl text-gray-400 mb-8">
                            <span className="font-semibold text-primary">1.6 million</span> messages sent daily.
                        </p>
                    </div>

                    <div className=" bg-black p-8 rounded-2xl border border-gray-800 shadow-xl">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}