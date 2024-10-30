"use client";

import { useState } from "react";

interface SkillProps {
    skillName: string;
    description: string;
}

export default function Skill({ skillName, description }: SkillProps) {
    const [isFrontVisible, setIsFrontVisible] = useState(true);

    const handleClick = () => {
        setIsFrontVisible(!isFrontVisible);
    };

    return (
        <div className="w-full h-40 cursor-pointer" onClick={handleClick}>
            {isFrontVisible ? (
                <div className="flex items-center justify-center w-full h-full bg-input text-white border-2 border-card-foreground rounded-2xl shadow-lg p-4">
                    <h3 className="text-lg font-semibold">
                        {skillName}
                    </h3>
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-border border-2 border-primary rounded-2xl shadow-lg p-4">
                    <p className="text-sm text-center">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}
