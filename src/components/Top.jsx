function Top ({ onAddTask }){
    return(
        <div className='flex flex-col justify-center items-center' >
            <h1 className='text-[#dfe0df] font-bold text-[30px] mb-[35px] mt-[50px]'>To Do List</h1>
            <button onClick={onAddTask} className='bg-[#2972ee] text-white rounded-xl p-[10px] pl-[20px] pr-[20px] mb-[20px]'>Add new task</button>
        </div> 
    )
}
export default Top