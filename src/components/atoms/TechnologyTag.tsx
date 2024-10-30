interface TechnologyTagProps {
    technology: string;
}

export default function TechnologyTag({ technology }: TechnologyTagProps) {
    return (
        <div className="text-xs bg-input border border-primary text-white py-1 px-3 mr-2 mt-2 rounded-lg w-auto">
            {technology}
        </div>
    );
}