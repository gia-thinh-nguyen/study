'use client'
import React, { useState,useContext} from 'react';
import { Context } from '@/app/WholeContext';
const TodoListModal=()=>{

  const [taskInput, setTaskInput] = useState('');
  const {showModal, setShowModal,tasks, setTasks}= useContext(Context);
  
  console.log(tasks)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index].startsWith('✓') ? updatedTasks[index].substr(2) : `✓ ${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  const handleClearAll = () => {
    setTasks([]);
  };
 
  return(showModal) && (
    <div className='z-[600]'>
      { (
        
            <div className="bg-[#D8DCFF] rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full 3xl:maw-w-lg">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left  w-full">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">To-do tasks</h3>
                    <div className="mt-2 flex w-full">
                      <input 
                        type="text" 
                        value={taskInput} 
                        onChange={(e) => setTaskInput(e.target.value)} 
                        placeholder="Enter a task..." 
                        className="grow w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-2"
                      />
                      <button 
                        onClick={handleAddTask} 
                        className="py-2 px-4 bg-[#565676] text-black font-semibold rounded-md focus:outline-none"
                      >
                        Add Task
                      </button>
                    </div>
                    <ul className="mt-3 overflow-auto">
                      {tasks.map((task, index) => (
                        <li 
                          key={index} 
                          onClick={() => handleTaskToggle(index)} 
                          className={`cursor-pointer ${task.startsWith('✓') ? 'line-through text-gray-500' : ''}`}
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </div>
              </div>
              <div className="bg-[#D8DCFF] px-4 py-3 sm:px-6 flex justify-between">
                
                <button 
                      onClick={handleClearAll} 
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  text-black bg-[#A76571]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Clear All
                </button>
                <button 
                  onClick={handleCloseModal} 
                  type="button" 
                  className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-300 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>

      )}
    </div>
  );
}

export default TodoListModal;
