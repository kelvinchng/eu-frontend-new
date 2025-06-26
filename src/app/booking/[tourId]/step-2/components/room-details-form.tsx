'use client'

import React, { useState } from 'react'
import { TravellerForm } from './traveller-form'

interface RoomData {
  id: number
  adults: number
  childrenWithBed: number
  childrenWithoutBed: number
  infants: number
}

interface RoomDetailsFormProps {
  rooms: RoomData[]
}

export function RoomDetailsForm({ rooms }: RoomDetailsFormProps) {
  const [mainContactIndex, setMainContactIndex] = useState(0)
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    mainContact: true
  })
  
  const toggleCard = (cardKey: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }))
  }
  
  return (
    <div className="space-y-[34px]">
      {/* Main Contact Person */}
      <div className="bg-[#F4F4F4] rounded-[9px] md:rounded-[25px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] overflow-hidden">
        <div 
          className="flex items-center justify-between p-[30px] md:p-[60px] cursor-pointer"
          onClick={() => toggleCard('mainContact')}
        >
          <h3 className="font-onest font-bold text-[14px] md:font-semibold md:text-[20px] text-[#242424] uppercase tracking-[-2.5%]">
            Main Contact Person
          </h3>
          <svg 
            width="8" 
            height="4" 
            viewBox="0 0 8 4" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`md:hidden transform transition-transform ${expandedCards.mainContact ? '' : 'rotate-180'}`}
          >
            <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
          </svg>
          <svg 
            width="11" 
            height="5" 
            viewBox="0 0 11 5" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`hidden md:block transform transition-transform ${expandedCards.mainContact ? '' : 'rotate-180'}`}
          >
            <path d="M1 1L5.5 4L10 1" stroke="#1E1E1E" strokeWidth="2"/>
          </svg>
        </div>
        
        {expandedCards.mainContact && (
          <div className="px-[30px] md:px-[60px] pb-[30px] md:pb-[60px] pt-0">
            <TravellerForm 
              roomNumber={1}
              travellerType="Main Contact"
              travellerNumber={1}
              isMainContact={true}
            />
          </div>
        )}
      </div>
      
      {/* Room Details */}
      {rooms.map((room, roomIndex) => {
        const travellers = []
        
        // Add adults
        for (let i = 0; i < room.adults; i++) {
          travellers.push({ type: 'Adult', number: i + 1 })
        }
        
        // Add children with bed
        for (let i = 0; i < room.childrenWithBed; i++) {
          travellers.push({ type: 'Child Half Twin', number: i + 1 })
        }
        
        // Add children without bed
        for (let i = 0; i < room.childrenWithoutBed; i++) {
          travellers.push({ type: 'Child w/o Bed', number: i + 1 })
        }
        
        // Add infants
        for (let i = 0; i < room.infants; i++) {
          travellers.push({ type: 'Infant w/o Bed', number: i + 1 })
        }
        
        return travellers.map((traveller, index) => {
          const cardKey = `room-${roomIndex}-traveller-${index}`
          return (
            <div 
              key={cardKey}
              className="bg-white rounded-[9px] md:rounded-[25px] border border-[#E8E8E8] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] md:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] overflow-hidden"
            >
              <div 
                className="flex items-center justify-between p-[30px] md:p-[60px] cursor-pointer"
                onClick={() => toggleCard(cardKey)}
              >
                <h3 className="font-onest font-bold text-[14px] md:font-semibold md:text-[20px] text-[#242424] uppercase tracking-[-2.5%]">
                  Room {room.id}: {traveller.type === 'Child Half Twin' ? 'Child Half Twin' : 
                                  traveller.type === 'Child w/o Bed' ? 'Child w/o Bed' :
                                  traveller.type === 'Infant w/o Bed' ? 'Infant w/o Bed' :
                                  `${traveller.type} ${traveller.number}`}
                </h3>
                <svg 
                  width="8" 
                  height="4" 
                  viewBox="0 0 8 4" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`md:hidden transform transition-transform ${expandedCards[cardKey] ? '' : 'rotate-180'}`}
                >
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
                <svg 
                  width="11" 
                  height="5" 
                  viewBox="0 0 11 5" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden md:block transform transition-transform ${expandedCards[cardKey] ? '' : 'rotate-180'}`}
                >
                  <path d="M1 1L5.5 4L10 1" stroke="#1E1E1E" strokeWidth="2"/>
                </svg>
              </div>
              
              {expandedCards[cardKey] && (
                <div className="px-[30px] md:px-[60px] pb-[30px] md:pb-[60px] pt-0">
                  <TravellerForm 
                    roomNumber={room.id}
                    travellerType={traveller.type}
                    travellerNumber={traveller.number}
                    isMainContact={false}
                  />
                </div>
              )}
            </div>
          )
        })
      })}
    </div>
  )
}