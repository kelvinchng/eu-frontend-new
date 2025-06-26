'use client'

import React from 'react'

interface RoomData {
  id: number
  adults: number
  childrenWithBed: number
  childrenWithoutBed: number
  infants: number
}

interface PackageDetailsProps {
  rooms: RoomData[]
  pricing: {
    adultTwinPrice: number
    childHalfTwinPrice: number
    childWithoutBedPrice: number
    infantPrice: number
    adultDiscount: number
    childWithBedDiscount: number
    adultTax: number
    childTax: number
  }
  subtotal: number
}

export function PackageDetails({ rooms, pricing, subtotal }: PackageDetailsProps) {
  const {
    adultTwinPrice,
    childHalfTwinPrice,
    childWithoutBedPrice,
    infantPrice,
    adultDiscount,
    childWithBedDiscount,
    adultTax,
    childTax
  } = pricing

  return (
    <div className="bg-white rounded-[25px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] p-[60px_58px] mt-[26px]">
      <h3 className="font-onest font-semibold text-[20px] text-[#242424] uppercase tracking-[-2.5%]">
        PACKAGE DETAILS
      </h3>
      
      {/* Divider after header */}
      <div className="w-full h-[1px] bg-[#E8E8E8] mt-[20px] mb-[26px]"></div>
      
      <div className="space-y-[17px]">
        {/* Headers */}
        <div className="flex text-[18px] font-onest font-medium text-[#242424] pb-[19px] border-b border-[#E8E8E8]">
          <div className="flex-1">Fare</div>
          <div className="w-[100px] text-left">Price</div>
          <div className="w-[60px] text-center">Unit</div>
          <div className="w-[100px] text-right">Subtotal</div>
        </div>
        
        {/* Adult Twin */}
        {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
          <div className="flex text-[18px] font-onest text-[#242424]">
            <div className="flex-1">Adult Twin</div>
            <div className="w-[100px] text-left">${adultTwinPrice.toLocaleString()}.00</div>
            <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
            <div className="w-[100px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultTwinPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {/* Child Half Twin */}
        {rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) > 0 && (
          <div className="flex text-[18px] font-onest text-[#242424]">
            <div className="flex-1">Child Half Twin</div>
            <div className="w-[100px] text-left">${childHalfTwinPrice.toLocaleString()}.00</div>
            <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithBed, 0)}</div>
            <div className="w-[100px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) * childHalfTwinPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {/* Child w/o Bed */}
        {rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0) > 0 && (
          <div className="flex text-[18px] font-onest text-[#242424]">
            <div className="flex-1">Child w/o Bed</div>
            <div className="w-[100px] text-left">${childWithoutBedPrice.toLocaleString()}.00</div>
            <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0)}</div>
            <div className="w-[100px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0) * childWithoutBedPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {/* Infant */}
        {rooms.reduce((acc, room) => acc + room.infants, 0) > 0 && (
          <div className="flex text-[18px] font-onest text-[#242424]">
            <div className="flex-1">Infant w/o Bed</div>
            <div className="w-[100px] text-left">${infantPrice.toLocaleString()}.00</div>
            <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.infants, 0)}</div>
            <div className="w-[100px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.infants, 0) * infantPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {/* Discount Section */}
        <div className="pt-[40px] space-y-[17px]">
          <div className="flex text-[18px] font-onest font-medium text-[#242424]">
            <div className="flex-1">Discount</div>
          </div>
          
          {/* Adult Discount */}
          {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
            <div className="flex text-[18px] font-onest text-[#242424]">
              <div className="flex-1">L2 Disc (${adultDiscount}.00)</div>
              <div className="w-[100px]"></div>
              <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
              <div className="w-[100px] text-right">
                -${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultDiscount).toLocaleString()}.00
              </div>
            </div>
          )}
          
          {/* Child Discount */}
          {rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) > 0 && (
            <div className="flex text-[18px] font-onest text-[#242424]">
              <div className="flex-1">L2 Disc (${childWithBedDiscount}.00)</div>
              <div className="w-[100px]"></div>
              <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithBed, 0)}</div>
              <div className="w-[100px] text-right">
                -${(rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) * childWithBedDiscount).toLocaleString()}.00
              </div>
            </div>
          )}
        </div>
        
        {/* Tax Section */}
        <div className="pt-[40px] space-y-[17px]">
          <div className="flex text-[18px] font-onest font-medium text-[#242424]">
            <div className="flex-1">Tax</div>
          </div>
          
          {/* Adult Tax */}
          {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
            <div className="flex text-[18px] font-onest text-[#242424]">
              <div className="flex-1">Adult Tax ($760.00)</div>
              <div className="w-[100px]"></div>
              <div className="w-[60px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
              <div className="w-[100px] text-right">
                ${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultTax).toLocaleString()}.00
              </div>
            </div>
          )}
          
          {/* Child Tax */}
          {(rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0)) > 0 && (
            <div className="flex text-[18px] font-onest text-[#242424]">
              <div className="flex-1">Child Tax ($760.00)</div>
              <div className="w-[100px]"></div>
              <div className="w-[60px] text-center">
                {rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0)}
              </div>
              <div className="w-[100px] text-right">
                ${(rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0) * childTax).toLocaleString()}.00
              </div>
            </div>
          )}
        </div>
        
        {/* Total */}
        <div className="pt-[30px] mt-[30px] border-t border-[#E8E8E8]">
          <div className="flex justify-between text-[18px] font-onest font-bold text-[#242424]">
            <div>Total</div>
            <div>${subtotal.toLocaleString()}.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}