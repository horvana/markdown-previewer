import React, { useRef } from 'react'

function AutoResizeTextarea() {
    const textareaRef = useRef(null);

    const handleTextareaClick = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }
}

export default AutoResizeTextarea