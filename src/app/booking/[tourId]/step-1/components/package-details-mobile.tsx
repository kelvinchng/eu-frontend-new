'use client'

import React from 'react'

interface RoomData {
  id: number
  adults: number
  childrenWithBed: number
  childrenWithoutBed: number
  infants: number
}

interface PackageDetailsMobileProps {
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

export function PackageDetailsMobile({ rooms, pricing, subtotal }: PackageDetailsMobileProps) {
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
    <div className="bg-white rounded-[9px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] p-[23px]">
      <h3 className="font-onest font-bold text-[13px] text-[#242424] uppercase mb-[24px]">
        PACKAGE DETAILS
      </h3>
      
      <div className="space-y-[12px]">
        {/* Headers */}
        <div className="flex text-[12px] font-onest font-medium text-[#242424] pb-[12px] border-b border-[#E8E8E8]">
          <div className="flex-1">Fare</div>
          <div className="w-[60px] text-right">Price</div>
          <div className="w-[40px] text-center">Unit</div>
          <div className="w-[70px] text-right">Subtotal</div>
        </div>
        
        {/* Fare items */}
        {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
          <div className="flex text-[12px] font-onest text-[#242424]">
            <div className="flex-1">Adult Twin</div>
            <div className="w-[60px] text-right">${adultTwinPrice.toLocaleString()}.00</div>
            <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
            <div className="w-[70px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultTwinPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) > 0 && (
          <div className="flex text-[12px] font-onest text-[#242424]">
            <div className="flex-1">Child Half Twin</div>
            <div className="w-[60px] text-right">${childHalfTwinPrice.toLocaleString()}.00</div>
            <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithBed, 0)}</div>
            <div className="w-[70px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) * childHalfTwinPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0) > 0 && (
          <div className="flex text-[12px] font-onest text-[#242424]">
            <div className="flex-1">Child w/o Bed</div>
            <div className="w-[60px] text-right">${childWithoutBedPrice.toLocaleString()}.00</div>
            <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0)}</div>
            <div className="w-[70px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.childrenWithoutBed, 0) * childWithoutBedPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {rooms.reduce((acc, room) => acc + room.infants, 0) > 0 && (
          <div className="flex text-[12px] font-onest text-[#242424]">
            <div className="flex-1">Infant w/o Bed</div>
            <div className="w-[60px] text-right">${infantPrice.toLocaleString()}.00</div>
            <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.infants, 0)}</div>
            <div className="w-[70px] text-right">
              ${(rooms.reduce((acc, room) => acc + room.infants, 0) * infantPrice).toLocaleString()}.00
            </div>
          </div>
        )}
        
        {/* Discount Section */}
        {(rooms.reduce((acc, room) => acc + room.adults, 0) > 0 || rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) > 0) && (
          <div className="pt-[20px] space-y-[12px]">
            <div className="flex text-[12px] font-onest font-medium text-[#242424]">
              <div className="flex-1">Discount</div>
            </div>
            
            {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
              <div className="flex text-[12px] font-onest text-[#242424]">
                <div className="flex-1">L2 Disc (${adultDiscount}.00)</div>
                <div className="w-[60px]"></div>
                <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
                <div className="w-[70px] text-right">
                  –${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultDiscount).toLocaleString()}.00
                </div>
              </div>
            )}
            
            {rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) > 0 && (
              <div className="flex text-[12px] font-onest text-[#242424]">
                <div className="flex-1">L2 Disc (${childWithBedDiscount}.00)</div>
                <div className="w-[60px]"></div>
                <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.childrenWithBed, 0)}</div>
                <div className="w-[70px] text-right">
                  –${(rooms.reduce((acc, room) => acc + room.childrenWithBed, 0) * childWithBedDiscount).toLocaleString()}.00
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Tax Section */}
        {(rooms.reduce((acc, room) => acc + room.adults + room.childrenWithBed + room.childrenWithoutBed, 0) > 0) && (
          <div className="pt-[20px] space-y-[12px]">
            <div className="flex text-[12px] font-onest font-medium text-[#242424]">
              <div className="flex-1">Tax</div>
            </div>
            
            {rooms.reduce((acc, room) => acc + room.adults, 0) > 0 && (
              <div className="flex text-[12px] font-onest text-[#242424]">
                <div className="flex-1">Adult Tax ($760.00)</div>
                <div className="w-[60px]"></div>
                <div className="w-[40px] text-center">{rooms.reduce((acc, room) => acc + room.adults, 0)}</div>
                <div className="w-[70px] text-right">
                  ${(rooms.reduce((acc, room) => acc + room.adults, 0) * adultTax).toLocaleString()}.00
                </div>
              </div>
            )}
            
            {(rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0)) > 0 && (
              <div className="flex text-[12px] font-onest text-[#242424]">
                <div className="flex-1">Child Tax ($760.00)</div>
                <div className="w-[60px]"></div>
                <div className="w-[40px] text-center">
                  {rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0)}
                </div>
                <div className="w-[70px] text-right">
                  ${(rooms.reduce((acc, room) => acc + room.childrenWithBed + room.childrenWithoutBed, 0) * childTax).toLocaleString()}.00
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Total */}
        <div className="pt-[16px] mt-[16px] border-t border-[#E8E8E8]">
          <div className="flex justify-between text-[12px] font-onest font-bold text-[#242424]">
            <div>Total</div>
            <div>${subtotal.toLocaleString()}.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}