'use client';

import { Mail, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { MotionFooter } from './motion-wrapper';

export default function Footer() {
    return (
        <MotionFooter
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full border-t border-white/10 py-20 bg-linear-to-r from-violet-300 via-gray-100 to-rose-200"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Left side: Brand/Info */}
                <div className="text-center sm:text-left space-y-2">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-1">
                        <Sparkles className="w-5 h-5" /> Shortly AI
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Built with 💜 by Adnan
                    </p>
                </div>

                {/* Right side: Social links */}
                <div className="flex gap-5 items-center text-muted-foreground">
                    <Link
                        href="mailto:your@email.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-500 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-500 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-500 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-500 transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </MotionFooter>
    );
}