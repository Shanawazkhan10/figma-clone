"use client"

import React, { useCallback } from 'react'
import LiveCursor from './cursor/LiveCursor'
import Cursor from './cursor/Cursor'
import CursorChat from './cursor/CursorChat'
import { useOthers, useUpdateMyPresence } from '@/liveblocks.config'

const Live = () => {
    const others = useOthers()
    const [{ cursor }, updateMyPresence] = useUpdateMyPresence() as any;
    const handlePointerMove = useCallback(() => {
        
     }, [])

    return (
        <div>
            <LiveCursor others={others} />
            {/* <Cursor />
            <CursorChat /> */}
        </div>
    )
}

export default Live