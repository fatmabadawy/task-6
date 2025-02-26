function Com({ dayDate, month, task, numdays }) {
  return (
    <div className="flex justify-between items-center bg-[#292b3a] p-[10px] rounded-xl pl-[20px] pr-[20px] m-[20px] mb-[7px] mt-[7px]">
      <div className="bg-[#2972ee] font-bold flex flex-col border-[1px] justify-center items-center p-[5px] pl-[15px] pr-[15px] rounded-xl text-white mr-[-50px]">
        <p>{month}</p>
        <p>{dayDate}</p>
      </div>
      <p className="font-bold text-[#bdc0bd] mr-[200px] w-[150px]">{task}</p>
      <div className="bg-[#2972ee] font-bold pl-[10px] pr-[10px] rounded-xl pt-[10px] pb-[10px] text-white border-[1px]">
        {numdays} days
      </div>
    </div>
  );
}

export default Com;
