"use client";

import { useState } from "react";

interface Props {
    before: string;
    after: string;
}

export default function BeforeAfterSlider({ before, after }: Props) {
    const [position, setPosition] = useState(50);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percent)));
    };

    const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percent)));
    };

    return (
        <div
            className="relative w-full h-full rounded-xl overflow-hidden cursor-ew-resize"
            onMouseMove={handleMove}
            onTouchMove={handleTouch}
        >
            {/* BEFORE */}
            <img
                src={before}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* AFTER (clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
            >
                <img
                    src={after}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white"
                style={{ left: `${position}%` }}
            />

            {/* Handle */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-black rounded-full shadow-md"
                style={{ left: `calc(${position}% - 12px)` }}
            />

            {/* Labels */}
            <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                BEFORE
            </div>
            <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                AFTER
            </div>
        </div>
    );
}