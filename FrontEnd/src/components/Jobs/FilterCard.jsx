import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
  {
    filterType: "Location",
    array:["Gurugoan","Bangalore","Hydrabad","Pune","Noida","Mumbai"]
  },
  {
    filterType: "Industry",
    array:["Frontend Developer","Backend Developer","Full Stack Developer","Data Scientist","Softwarw Developer"]
  },
  {
    filterType: "Salary",
    array:["0 - 40k","40k - 1lakh","1lakh - 5lakh"]
  }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white rounded-md p-4'>
      <h1 className='font-bold text-xl'>Filter jobs</h1>
      <hr className='mt-4'/>
      <RadioGroup>
        {
          filterData.map((data,index) => (
            <div key={index} className=''>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,index)=>{
                  return (
                    <div key={index} className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard