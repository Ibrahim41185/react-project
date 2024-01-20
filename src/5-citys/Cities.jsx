import React, { useState } from 'react'
import './cities.css'


const imags = [{title:"russai", imgpath:"russia.jpg" ,title2: "."},
{title:"china",title2:"lorem", imgpath:"pexels-johannes-plenio-1119972.jpg"},
{title:"france", imgpath:"francs2.jpg", title2: "lorem"},
{title:"england", imgpath:"england.jpg", title2: "lorem"},
]
const Cities = () => {
  const [arr, setarr] = useState(imags)
  return (
    <section className='light' >
        <h1 className='cities' >some photos in thes cities</h1>
      <div className="content">
          {arr.map((e) => {
            return(
              <div key={e.title} className='div1'>
              <img src= {e.imgpath} />
              <h2> {e.title} </h2>
             
            </div>
            )
          }
          )}

        </div>
    </section>
  )
}

export default Cities