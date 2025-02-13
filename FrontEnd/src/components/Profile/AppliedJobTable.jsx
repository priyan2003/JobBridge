import React from "react";
import {
  Table,
  TableRow,
  TableCaption,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((state) => state.job);

  return (
    <div>
      <Table>
        <TableCaption>Your's Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You have not applied for any job</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob?._id}>
                <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={
                      ` ${
                        appliedJob?.status === "accepted"
                          ? "bg-green-600 text-white"
                          : appliedJob?.status === "rejected"
                          ? "bg-red-600 text-white"
                          : "bg-gray-400 text-white"
                      } hover:bg-[inherit] hover:text-[inherit]`
                    }
                  >
                    {appliedJob?.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
