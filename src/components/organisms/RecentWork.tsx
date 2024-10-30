import GradientBorder from "@/components/atoms/GradiantBorder";
import {
    Table,
    TableBody,
    TableCell,
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
                    <h2 className={"font-bold"}>
                        Recent Work
                    </h2>
                </div>

                <Table>
                    <TableBody>
                        {jobs.map((job, index) => (
                            <TableRow key={job.job}>
                                <TableCell className="font-medium">
                                    <h4 className={index === 0 ? "text-primary" : ""}>
                                        {job.job} <br/>
                                    </h4>
                                    <h5 className="muted py-2">
                                        {job.timePeriod}
                                    </h5>
                                </TableCell>
                                <TableCell className="text-right align-top">
                                    <h5 className="muted">
                                        {job.technology}
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