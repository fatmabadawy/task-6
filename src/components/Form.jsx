
import  { useState } from "react";

function Form({ onAddTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const [year, month, day] = date.split('-');
    const monthAbbreviation = new Date(date).toLocaleString('default', { month: 'short' });
    onAddTask({
      dayDate: day,
      month: monthAbbreviation,
      task: title,
      numdays: duration
    });
    setTitle("");
    setDuration("");
    setDate("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[30px] p-[20px]">
      <div className="flex gap-[20px] justify-center items-center">
        <div>
          <p className="text-[#dfe0df]">Title</p>
          <input
            type="text"
            className="bg-[#78787a] rounded-[5px] p-[5px]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p className="text-[#dfe0df]">Duration (days)</p>
          <input
            type="text"
            className="bg-[#78787a] rounded-[5px] p-[5px]"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <p className="text-[#dfe0df]">Date</p>
          <input
            type="date"
            className="bg-[#78787a] rounded-[5px] p-[5px]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <button onClick={handleSubmit} className='bg-[#2972ee] text-white rounded-xl p-[10px] pl-[20px] pr-[20px]'>
          Add
        </button>
        <button onClick={onCancel} className='bg-[#2972ee] text-white rounded-xl p-[10px] pl-[20px] pr-[20px]'>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Form;