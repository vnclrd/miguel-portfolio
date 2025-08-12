function Work() {
  return(
    <div id="work" className='flex h-[100vh] bg-[#0d1b2a]'>

        <div className='flex items-center gap-10'>
          
          <div className='w-[400px] h-[250px] mb-50 ml-50 bg-[#b0bec5] z-1000'></div>
          <div className='absolute w-[375px] h-[250px] mb-40 ml-45 bg-none border-[2px] border-[#00b4d8]'></div>
          <div className='absolute w-[400px] h-[150px] bg-[#121212] text-justify ml-140 mb-50 p-3.5 z-1000'>
            <p className='flex text-[#e0e0e0] text-[0.75rem]'>
              TrainIn is an automated attendance system designed to record and track the attendance
              of individuals at organized events. It uses NFC cards along with an external reader
              device to provide a seamless and efficient check-in and check-out process. The collected
              data can then be compiled into summaries and detailed reports for easy analysis and management.
            </p>
          </div>

          <div className='w-[400px] h-[250px] mt-60 bg-[#b0bec5] z-1000'></div>
          <div className='absolute w-[375px] h-[250px] mt-70 ml-171 bg-none border-[2px] border-[#00b4d8]'></div>
          <div className='absolute w-[400px] h-[175px] bg-[#121212] text-justify ml-65 mt-100 p-3.5 z-1000'>
            <p className='flex text-[#e0e0e0] text-[0.75rem]'>
              Developed a full-stack printing kiosk that calculates document pricing
              based on page count, color, and paper size, enabling automated, affordable
              printing for students and faculty. Integrated Python with Flask for back-end
              development and utilized WebSocket-based payment tracking. Implemented hardware
              interaction with printers, coin acceptors and change system. As well as cashless
              payment with GCash with integration with PayMongo.
            </p>
          </div>

        </div>
        
    </div>
  )
}

export default Work