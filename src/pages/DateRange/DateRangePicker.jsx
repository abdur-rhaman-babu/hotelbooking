
import  { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format} from "date-fns";


const DateRangePicker = () => {
  const [isShowDate,setIsShowDate] = useState(false)
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };


  return (
  <div>
    <span onClick={()=>setIsShowDate(!isShowDate)}>
      {`${format(selectionRange.startDate,"MMMM d, yyyy")} to ${format(selectionRange.endDate, "MMMM d, yyyy")}`}
    </span>

    { isShowDate && 
      <div className="dateRange">
    <DateRange
    ranges={[selectionRange]}
    onChange={handleSelect}
    minDate={new Date()}
  />
      </div>
      
    }
</div>

  );
};

export default DateRangePicker;