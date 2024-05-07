'use client';
import React, { useState } from 'react';

const Toast: React.FC = () => {
  const [openNotify, setOpenNotify] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggleNotify = () => {
    setOpenNotify(!openNotify);
    setOpen1(!open1);
    setOpen2(!open2);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 items-center">
      <div>
        <button
          onClick={toggleNotify}
          className="px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-blue-500 to-cyan-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md"
        >
          <div className="mr-2">
            <svg className="w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Show
        </button>
      </div>
      {openNotify && (
        <div className="absolute bottom-5 left-8 flex flex-col space-y-2">
          {open1 && (
            <div className="bg-white cursor-pointer shadow rounded-lg px-3 py-2 w-64 space-y-2">
              {/* Header */}
              <div className="flex justify-between items-center w-full">
                <div className="font-semibold text-sm">Notifikasi Baru</div>
                <div
                  onClick={() => setOpen1(!open1)}
                  className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div className="flex justify-start items-start space-x-4">
                <div className="relative flex flex-shrink-0">
                  {/* <image src="https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Meow" className="w-14 h-14 rounded-full object-cover" /> */}
                  <div className="absolute -bottom-1 -right-2 h-7 w-7 bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-400 rounded-full text-white flex justify-center items-start">
                    <div className="">
                      <svg
                        className="w-5 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-20 overflow-hidden">
                  <div className="overflow-ellipsis overflow-hidden text-sm">
                    <div className="leading-tight ">
                      <b className="font-semibold">Hasan Muhammad</b> Menambahkann 2 foto di{' '}
                      <b className="font-semibold">Tailwind CSS Indonesia</b>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold text-xs leading-loose">15 menit yang lalu</div>
                </div>
              </div>
            </div>
          )}

          {open2 && (
            <div className="bg-white cursor-pointer shadow rounded-lg px-3 py-2 w-64 space-y-2">
              {/* Header */}
              <div className="flex justify-between items-center w-full">
                <div className="font-semibold text-sm">Notifikasi Baru</div>
                <div
                  onClick={() => setOpen2(!open2)}
                  className="h-6 w-6 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div className="flex justify-start items-start space-x-4">
                {/* <div className="relative flex flex-shrink-0">
                                    <image src="https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Meow" className="w-14 h-14 rounded-full object-cover" />
                                    <div className="absolute -bottom-1 -right-2 h-7 w-7 bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-400 rounded-full text-white flex justify-center items-start">
                                        <div className="">
                                            <svg className="w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                        </div>
                                    </div>
                                </div> */}
                <div className="flex flex-col h-20 overflow-hidden">
                  <div className="overflow-ellipsis overflow-hidden text-sm">
                    <div className="leading-tight ">
                      <b className="font-semibold">Hasan Muhammad</b> Menambahkann 2 foto di{' '}
                      <b className="font-semibold">Tailwind CSS Indonesia</b>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold text-xs leading-loose">15 menit yang lalu</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Toast;
