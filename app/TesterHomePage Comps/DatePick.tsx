import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateCalender = () => {
  const [startDate, setStartDate] = useState<Date|null>(new Date());
  const handleDateChange = () => {

  }
  return (
    <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} className='bg-base-100 border border-white border-opacity-20 rounded-md'/>
  );
};

export default DateCalender