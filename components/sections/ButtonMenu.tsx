import React from 'react'
interface buttonMenu{
    open:()=>void
}
const ButtonMenu = ({open}:buttonMenu) => {
  return (
    <button aria-labelledby="open" aria-label='menu' type='button' onClick={open}>
    <svg className='md:hidden' width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="31" height="31" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0_27_66" transform="scale(0.0104167)"/>
</pattern>
<image id="image0_27_66" width="96" height="96" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVR4nO3asQ3AIBAEQeyc/gulALsBZEfPITQTE7zY9FoDAAAAAAAA4FTX34MxxrPikFP13j//+F51CHMChAkQJkCYAGEChAkAAAAAAABQzC6omF3Q5gQIEyBMgDABwgQIEwAAAAAAAKCYXVAxu6DNCRAmQJgAYQKECRAmAAAAAAAAAAAUeQHGdwwui9ThvQAAAABJRU5ErkJggg=="/>
</defs>
</svg>
</button>
  )
}

export default ButtonMenu