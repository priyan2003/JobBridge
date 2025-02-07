import React from 'react'
import { Table,TableRow, TableCaption, TableHead, TableHeader, TableBody, TableCell } from '../ui/table'
import { Badge } from '../ui/badge'

const  AppliedJobTable = () => {
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
          {
            [1,2,3,4,5].map((item,index) => (
              <TableRow key={index}>
                <TableCell>12-04-2024</TableCell>
                <TableCell>Backend Developer</TableCell>
                <TableCell>Microsoft</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable