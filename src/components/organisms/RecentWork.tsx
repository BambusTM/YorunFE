import GradientBorder from "@/components/atoms/GradiantBorder";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

const jobs = [
    {
        job: "NoserYoung AG",
        timePeriod: "2023 - Present",
        description: "Application Developer",
    },
    {
        job: "Gibb",
        timePeriod: "2023 - Present",
        description: "Vocational school",
    },
    {
        job: "Genki Jacks",
        timePeriod: "2023 - 2023",
        description: "Japanese Language School",
    },
    {
        job: "Sympany AG",
        timePeriod: "2021 - 2022",
        description: "ICT Support",
    },
    {
        job: "RSSB Highschool",
        timePeriod: "2018 - 2020",
        description: "Rudolf Steiner School Basel",
    }
]

export default function RecentWork() {
    return (
        <GradientBorder borderRadius={8} className="h-full">
            <div className="container mx-auto bg-border rounded-sm p-8 h-full">
                <div className={"pb-6"}>
                    <h2 className={"font-bold"}>
                        Recent Work
                    </h2>
                </div>

                <Table>
                    <TableBody>
                        {jobs.map((job, index) => (
                            <TableRow key={job.job}>
                                <TableCell className="font-medium">
                                    <h4 className={index === 0 || index === 1 ? "text-primary" : ""}>
                                        {job.job} <br/>
                                    </h4>
                                    <h5 className="muted py-2">
                                        {job.timePeriod}
                                    </h5>
                                </TableCell>
                                <TableCell className="text-right align-top">
                                    <h5 className="muted">
                                        {job.description}
                                    </h5>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        </GradientBorder>
    );
}