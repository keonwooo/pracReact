import React, { useReducer, useState } from "react"
import todoReducer from "./reducer/todo-reducer";
import { FaRegTrashAlt } from "react-icons/fa";
import './App.css'

export default function AppTodoList() {
  const [todoList, setTodoList] =  useReducer(todoReducer, initTodoList);
    return (
      <>
        <div className="container mx-auto max-w-2xl">
          <div className="buttonDiv mt-6 flex items-center justify-end gap-x-1">
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">All</button>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Active</button>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Completed</button>
          </div>
          <div className="listDiv overflow-hidden bg-white shadow sm:rounded-lg">
            <ul>
              {todoList.todo.map((node) => (
                <div className="todoListDiv gap-x-1">
                  <div className="todo gap-x-1">
                    <input type="checkbox" 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={node.completed}
                    />
                    {forLineThrough(node)}
                  </div>
                  <div>
                    <FaRegTrashAlt />
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="insertDiv gap-x-1">
            <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">add</button>
          </div>
        </div>
      </>
    )
}

function forLineThrough(node) {
  if (node.completed) {
    return <li className="line-through" key={node.id}>{node.descr}</li>
  } else {
    return <li key={node.id}>{node.descr}</li>
  }
}

const initTodoList = {
  todo: [
    {
      id: 1
      ,descr: '강의 보기'
      ,completed: false
    }
    ,{
      id: 2
      ,descr: '준비물 챙기기'
      ,completed: false
    }
    ,{
      id: 3
      ,descr: '청소하기'
      ,completed: false
    }
  ]
};