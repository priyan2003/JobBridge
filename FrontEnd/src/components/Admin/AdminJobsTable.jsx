import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table";
  import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
  import { Edit2, Eye, MoreHorizontal } from "lucide-react";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AdminJobsTable = () => {
    const {allAdminJobs = [],searchJobByText} = useSelector(state => state.job);
    console.log(searchJobByText);
    
    const [filterJobs ,setFilterJobs] = useState(allAdminJobs);
    useEffect(()=>{
      const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=>{
        if(!searchJobByText){
          return true;
        }
        return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase())
      })
      setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])
    const navigate = useNavigate();
    return (
      <div>
        <Table>
          <TableCaption>List of your recent posted Jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterJobs.map((job) => (
              <tr key={job?._id}>
                <TableCell>
                    <div className="flex items-center">
                    <img className="h-10 w-10" src={job?.company?.logo} alt="" />
                    {job?.company?.name}
                    </div>
                </TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                <TableCell className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div onClick={()=>navigate(`/admin/companies/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                      <div onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 w-fit cursor-pointer mt-2">
                        <Eye className="w-4"/>
                        <span>Applicants</span>
                      </div>
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
  
  export default AdminJobsTable;
  