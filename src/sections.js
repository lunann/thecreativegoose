import React from 'react'
import './sections.css'

function Sections() {
    const sectionStyle = {
        borderRadius: '50%',
        animation: 'move 30s linear infinite',
    }
    return (
        <section class="section">
            <div id="up-left" style={sectionStyle}></div>
            <div id="up-right" style={sectionStyle}></div>
            <div id="down-left" style={sectionStyle}></div>
            <div id="down-right" style={sectionStyle}></div>
        </section>
    )
}
export default Sections