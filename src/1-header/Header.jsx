import { useState } from 'react'
import './header.css'


const Header = () => {
  const [showmeny, setshowmeny] = useState(false)
  return (
    <header>

      <div className=' head light'>

        <button onClick={() => {
          setshowmeny(true)
        }
        }><i class="fa-solid fa-bars-staggered"></i></button>
                <div className="icon"><i class="fa-solid fa-utensils"></i></div>

        <div className="nav">
          <ul>
            <li><a>about</a></li>
            <li><a>main</a></li>
            <li><a>projects</a></li>
            <li><a>skills</a></li>
            <li><a>contact</a></li>
          </ul>
        </div>
        {showmeny && <div className="show-menu">
          <ul>
            <button onClick={() => {
              setshowmeny(false)
            }
            }><i class="fa-solid fa-x"></i></button>
            <li><a>about</a></li>
            <li><a>main</a></li>
            <li><a>projects</a></li>
            <li><a>skills</a></li>
            <li><a>contact</a></li>




          </ul>

        </div>}


      </div>

    </header>
  )
}

export default Header