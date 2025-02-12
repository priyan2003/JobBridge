import { MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";

const ApplicantsTable = () => {
  const shortlistingStatus = ["Accepted", "Rejected"];
  const { applicants } = useSelector((state) => state.application);
  return (
    <div>
      <Table>
        <TableCaption>List of your Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.applications.map((item) => (
            <tr key={item?._id}>
              <TableCell>{item?.applicant?.fullname}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phoneNumber}</TableCell>
              <TableCell className="text-blue-500 cursor-pointer">
                {
                    item?.applicant?.profile?.resume ? <a target="blank" href={item?.applicant?.profile?.resume}>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                }
              </TableCell>
              <TableCell>{item?.applicant?.createdAt?.split("T")[0]}</TableCell>
              <TableCell className="float-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    {shortlistingStatus.map((status, index) => {
                      return (
                        <div key={index}>
                          <span>{status}</span>
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
