import GradientBorder from "@/components/atoms/GradiantBorder";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const jobs = [
    {
        job: "SideQuest",
        timePeriod: "2024 - Present",
        technology: "React, SpringBoot",
    },
    {
        job: "VroomVroomFE",
        timePeriod: "2024 - 2024",
        Technology: "React, MUI",
    },
    {
        job: "VroomVroomBE",
        timePeriod: "2023 - 2024",
        technology: "SpringBoot",
    },
    {
        job: "LittleBamboo",
        timePeriod: "2023 - 2023",
        technology: "HTML, CSS, JS, Bootstrap",
    },
]

export default function RecentWork() {
    return (
        <GradientBorder borderRadius={8}>
            <div className="container mx-auto bg-border rounded-sm p-8">
                <div className={"pb-6"}>
                    <h3>
                        Recent Work
                    </h3>
                </div>

                <Table>
                    <TableBody>
                        {jobs.map((job) => (
                            <TableRow key={job.job}>
                                <TableCell className="font-medium">
                                    <h3>
                                        {job.job} <br/>
                                    </h3>
                                    <h4 className="muted">
                                        {job.timePeriod}
                                    </h4>
                                </TableCell>
                                <TableCell className="text-right">
                                    <h4 className="muted">
                                        {job.technology}
                                    </h4>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </GradientBorder>
    );
}