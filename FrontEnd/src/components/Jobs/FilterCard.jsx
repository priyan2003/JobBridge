import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType: "Location",
    array:["Gurugoan","Bangaluru","Hydrabad","Pune","Noida","Mumbai"]
  },
  {
    filterType: "Industry",
    array:["Frontend Developer","Backend Developer","Full Stack Developer","Data Scientist","Software Developer"]
  },
  {
    filterType: "Salary",
    array:["5LPA-10LPA","11LPA-15LPA","16LPA-20LPA"]
  }
]
const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  
  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue))
    
  },[selectedValue])
  return (
    <div className='w-full bg-white rounded-md p-4'>
      <h1 className='font-bold text-xl'>Filter jobs</h1>
      <hr className='mt-4'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data,index) => (
            <div key={index} className=''>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,idx)=>{
                  const itemId = `id${index}-${idx}`;
                  return (
                    <div key={index} className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId}/>
                      <Label htmlFor={itemId}>{item}</Label>
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