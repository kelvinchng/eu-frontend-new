'use client'

import React from 'react'

interface RoomCardProps {
  room: {
    id: number
    adults: number
    childrenWithBed: number
    childrenWithoutBed: number
    infants: number
  }
  onUpdateRoom: (roomId: number, field: 'adults' | 'childrenWithBed' | 'childrenWithoutBed' | 'infants', value: number) => void
}

export function RoomCard({ room, onUpdateRoom }: RoomCardProps) {
  return (
    <div className="bg-[#F4F4F4] rounded-[9px] md:rounded-[25px] p-[30px] md:px-[52px] md:py-[50px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)]">
      <h3 className="font-onest font-bold text-[14px] md:text-[20px] text-[#242424] uppercase mb-[33px] md:mb-0">
        Room {room.id}
      </h3>
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Adult */}
        <div className="flex items-center justify-between mb-[37px]">
          <span className="font-onest font-medium text-[13px] text-[#242424] max-w-[130px]">
            Adult (&gt; 12 years old)
          </span>
          <div className="w-[103px] h-[41px] bg-white border border-[#E8E8E8] rounded-[4px] flex items-center">
            <button
              onClick={() => onUpdateRoom(room.id, 'adults', room.adults - 1)}
              className="w-[34px] h-full flex items-center justify-center"
            >
              <div className="w-[8px] h-0 border-t-[1.4px] border-[#242424]"></div>
            </button>
            <div className="flex-1 text-center font-onest font-medium text-[13px] text-[#242424]">
              {room.adults}
            </div>
            <button
              onClick={() => onUpdateRoom(room.id, 'adults', room.adults + 1)}
              className="w-[34px] h-full flex items-center justify-center"
            >
              <div className="relative w-[8px] h-[8px]">
                <div className="absolute w-[8px] h-0 border-t-[1.4px] border-[#242424] top-[3px]"></div>
                <div className="absolute w-0 h-[8px] border-l-[1.4px] border-[#242424] left-[3px]"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Child */}
        <div className="mb-[37px]">
          <div className="mb-[25px]">
            <span className="font-onest font-medium text-[13px] text-[#242424]">
              Child (2 - 11 years old)
            </span>
          </div>
          
          {/* With Bed */}
          <div className="flex items-center justify-between mb-[15px]">
            <span className="font-onest text-[13px] text-[#242424] w-[161px] text-right pr-[31px]">
              With Bed
            </span>
            <div className="w-[103px] h-[41px] bg-white border border-[#E8E8E8] rounded-[4px] flex items-center">
              <button
                onClick={() => onUpdateRoom(room.id, 'childrenWithBed', room.childrenWithBed - 1)}
                className="w-[34px] h-full flex items-center justify-center"
              >
                <div className="w-[8px] h-0 border-t-[1.4px] border-[#242424]"></div>
              </button>
              <div className="flex-1 text-center font-onest font-medium text-[13px] text-[#242424]">
                {room.childrenWithBed}
              </div>
              <button
                onClick={() => onUpdateRoom(room.id, 'childrenWithBed', room.childrenWithBed + 1)}
                className="w-[34px] h-full flex items-center justify-center"
              >
                <div className="relative w-[8px] h-[8px]">
                  <div className="absolute w-[8px] h-0 border-t-[1.4px] border-[#242424] top-[3px]"></div>
                  <div className="absolute w-0 h-[8px] border-l-[1.4px] border-[#242424] left-[3px]"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Without Bed */}
          <div className="flex items-center justify-between">
            <span className="font-onest text-[13px] text-[#242424] w-[161px] text-right pr-[31px]">
              Without Bed
            </span>
            <div className="w-[103px] h-[41px] bg-white border border-[#E8E8E8] rounded-[4px] flex items-center">
              <button
                onClick={() => onUpdateRoom(room.id, 'childrenWithoutBed', room.childrenWithoutBed - 1)}
                className="w-[34px] h-full flex items-center justify-center"
              >
                <div className="w-[8px] h-0 border-t-[1.4px] border-[#242424]"></div>
              </button>
              <div className="flex-1 text-center font-onest font-medium text-[13px] text-[#242424]">
                {room.childrenWithoutBed}
              </div>
              <button
                onClick={() => onUpdateRoom(room.id, 'childrenWithoutBed', room.childrenWithoutBed + 1)}
                className="w-[34px] h-full flex items-center justify-center"
              >
                <div className="relative w-[8px] h-[8px]">
                  <div className="absolute w-[8px] h-0 border-t-[1.4px] border-[#242424] top-[3px]"></div>
                  <div className="absolute w-0 h-[8px] border-l-[1.4px] border-[#242424] left-[3px]"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Infant */}
        <div className="flex items-center justify-between">
          <span className="font-onest font-medium text-[13px] text-[#242424] max-w-[130px]">
            Infant (&lt; 2 years old)
          </span>
          <div className="w-[103px] h-[41px] bg-white border border-[#E8E8E8] rounded-[4px] flex items-center">
            <button
              onClick={() => onUpdateRoom(room.id, 'infants', room.infants - 1)}
              className="w-[34px] h-full flex items-center justify-center"
            >
              <div className="w-[8px] h-0 border-t-[1.4px] border-[#242424]"></div>
            </button>
            <div className="flex-1 text-center font-onest font-medium text-[13px] text-[#242424]">
              {room.infants}
            </div>
            <button
              onClick={() => onUpdateRoom(room.id, 'infants', room.infants + 1)}
              className="w-[34px] h-full flex items-center justify-center"
            >
              <div className="relative w-[8px] h-[8px]">
                <div className="absolute w-[8px] h-0 border-t-[1.4px] border-[#242424] top-[3px]"></div>
                <div className="absolute w-0 h-[8px] border-l-[1.4px] border-[#242424] left-[3px]"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Responsive positioning */}
      <div className="hidden md:block relative mt-[50px]">
        <div className="w-full max-w-[658px]">
          {/* Adult */}
          <div className="flex items-center h-[107px]">
            <span className="font-onest text-[18px] text-[#242424] w-[280px]">
              Adult (&gt; 12 years old)
            </span>
            <div className="w-[145.68px] h-[51px] bg-white border border-[#E8E8E8] rounded-[9px] flex items-center">
              <button
                onClick={() => onUpdateRoom(room.id, 'adults', room.adults - 1)}
                className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
              >
                -
              </button>
              <div className="flex-1 text-center font-onest text-[18px]">
                {room.adults}
              </div>
              <button
                onClick={() => onUpdateRoom(room.id, 'adults', room.adults + 1)}
                className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
              >
                +
              </button>
            </div>
          </div>

          {/* Child */}
          <div className="flex items-start h-[118px]">
            <span className="font-onest text-[18px] text-[#242424] w-[280px] mt-[47px]">
              Child (2 - 11 years old)
            </span>
            
            <div className="flex flex-col">
              {/* With Bed */}
              <span className="font-onest text-[18px] text-[#242424] mb-[11px]">
                With Bed
              </span>
              <div className="w-[145.68px] h-[51px] bg-white border border-[#E8E8E8] rounded-[9px] flex items-center">
                <button
                  onClick={() => onUpdateRoom(room.id, 'childrenWithBed', room.childrenWithBed - 1)}
                  className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
                >
                  -
                </button>
                <div className="flex-1 text-center font-onest text-[18px]">
                  {room.childrenWithBed}
                </div>
                <button
                  onClick={() => onUpdateRoom(room.id, 'childrenWithBed', room.childrenWithBed + 1)}
                  className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col ml-[68px]">
              {/* Without Bed */}
              <span className="font-onest text-[18px] text-[#242424] mb-[11px]">
                Without Bed
              </span>
              <div className="w-[145.68px] h-[51px] bg-white border border-[#E8E8E8] rounded-[9px] flex items-center">
                <button
                  onClick={() => onUpdateRoom(room.id, 'childrenWithoutBed', room.childrenWithoutBed - 1)}
                  className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
                >
                  -
                </button>
                <div className="flex-1 text-center font-onest text-[18px]">
                  {room.childrenWithoutBed}
                </div>
                <button
                  onClick={() => onUpdateRoom(room.id, 'childrenWithoutBed', room.childrenWithoutBed + 1)}
                  className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Infant */}
          <div className="flex items-center h-[107px] mt-[11px]">
            <span className="font-onest text-[18px] text-[#242424] w-[280px]">
              Infant (&lt; 2 years old)
            </span>
            <div className="w-[145.68px] h-[51px] bg-white border border-[#E8E8E8] rounded-[9px] flex items-center">
              <button
                onClick={() => onUpdateRoom(room.id, 'infants', room.infants - 1)}
                className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
              >
                -
              </button>
              <div className="flex-1 text-center font-onest text-[18px]">
                {room.infants}
              </div>
              <button
                onClick={() => onUpdateRoom(room.id, 'infants', room.infants + 1)}
                className="w-[41px] h-full flex items-center justify-center text-[30px] font-onest"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}