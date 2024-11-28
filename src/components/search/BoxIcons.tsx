"use client"
import { icons } from '@/json/icons';
import React, { useState } from 'react'

export default function BoxIcons() {
  const [icon, setIcon] = useState({
    like: false,
    favorite: false
  })

  const iconsData = icons(icon);

  return (
    <div className='flex justify-end gap-3 mt-5'>
      {iconsData.map(({ icon: Icon, key, status }) => (
        <Icon
          key={key}
          onClick={() => setIcon(prev => ({ ...prev, [key]: !status }))}
          className={`${status ? "fill-customWhite" : ""} cursor-pointer`}
        />
      ))}
    </div>
  )
}
