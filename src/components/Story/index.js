import './style.css'
import  Robperfil  from '../Imagens/Imagens-Post/robperfil.png'
import Lebron from '../Imagens/Imagens-Story/Lebron.jpg'
import Caio from '../Imagens/Imagens-Story/Caio.jpg'
import Casemiro from '../Imagens/Imagens-Story/Casemiro.jpeg'
import Fallen from '../Imagens/Imagens-Story/Fallen.jpg'
import Gaules from '../Imagens/Imagens-Story/Gaules.jpg'
import Neymar from '../Imagens/Imagens-Story/Neymar.jpg'
import Kevin from '../Imagens/Imagens-Story/Kevin.jpg'

export function Story() {

    return (
        <div className= "container">
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Fallen } alt="foto do story"/>
               </div>
               <span>Fallen</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= { Lebron } alt="foto do story"/>
               </div>
               <span>Lebron J</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Gaules } alt="foto do story"/>
               </div>
               <span>Gaules</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Kevin } alt="foto do story"/>
               </div>
               <span>Kevin jr</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Neymar } alt="foto do story"/>
               </div>
               <span>Neymar jr</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Casemiro } alt="foto do story"/>
               </div>
               <span>Casimiro</span> 
            </div>
            <div className= "user-elements">
               <div>
                    <img className= "image-user-story" src= {Caio } alt="foto do story"/>
               </div>
               <span>Caio Teixeira</span> 
            </div>
        </div>
    )
}