import React from 'react'

export default ()=> {
       function getYear(){
        return new Date().getFullYear()
    }
   return (
   <> 
        <footer >
           <p>Desenvolvido por Lucas &copy;{getYear()}</p>
        </footer>
    </> 
    )
}
  