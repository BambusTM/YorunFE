import React from "react";

export interface GradientBorderProps {
    children?: React.ReactNode;
    borderRadius?: number;
    className?: string;
}

export default function GradientBorder({
                                           children,
                                           borderRadius = 14,
                                           className = "",
                                       }: GradientBorderProps) {
    return (
        <div className={`gradient-border ${className} flex items-center justify-center`} style={{ borderRadius: `${borderRadius}px`}}>
            <div className="gradient-inner w-full h-full" style={{ borderRadius: `${borderRadius}px`, margin: 0, padding: 0 }}>
                {children}
            </div>
        </div>
    );
}
