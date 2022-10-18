import { Story } from '../Story'
import { Post } from '../Post'
import './style.css'
import { Suggestion } from '../Suggestion'
import  Robperfil  from '../Imagens/Imagens-Post/robperfil.png'
import  Gabriel from '../Imagens/Imagens-Post/Gabriel.jpeg'
import  Eren from '../Imagens/Imagens-Post/Eren.jpg'
import  Ja from '../Imagens/Imagens-Post/Ja.jpg'
import  Vini from '../Imagens/Imagens-Post/Vini.jpg'
import  ViniS from '../Imagens/Imagens-Post/ViniS.jpg'
import GabrielS from '../Imagens/Imagens-Post/GabrielS.jpg'
import  NeymarS from '../Imagens/Imagens-Post/NeymarS.jpg'
import  JaS from '../Imagens/Imagens-Post/JaS.jpg'
import  LebronS from '../Imagens/Imagens-Post/LebronS.jpg'
import  GaulesS from '../Imagens/Imagens-Post/GaulesS.jpg'
import  PedroS from '../Imagens/Imagens-Post/PedroS.jpg'
import  ErenS from '../Imagens/Imagens-Post/ErenS.jpg'
import Lebron from '../Imagens/Imagens-Story/Lebron.jpg'
import Gaules from '../Imagens/Imagens-Story/Gaules.jpg'
import Neymar from '../Imagens/Imagens-Story/Neymar.jpg'


export function Layout() {

    return (
        <>
            <div className= "MainGrid">
                <div className="First-Column" style={{gridArea: "FirstColumn"}}>
                    <div className= "box">
                        <Story />
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Gabriel}`} nome="Gabriel.Romão" imagempost={`${GabrielS}`} coment="My dream is, travel out of Brazil. " curtidas="1000" time="10"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Lebron}`} nome="Lebron James" imagempost={`${LebronS}`} coment="I would love to play with my son in the nba" curtidas="100k" time="5"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Neymar}`} nome="Neymar Jr" imagempost={`${NeymarS}`} coment="Esse ano eu ganho a copa do mundo!" curtidas="150k" time="3"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Eren}`} nome="Eren Yeager" imagempost={`${ErenS}`} coment="World peace" curtidas="55M" time="2"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Gaules}`} nome="Gaules(Triboneira)" imagempost={`${GaulesS}`} coment="Espero que o Brasil, possa ganhar o major do RJ" curtidas="25B" time="11"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Vini}`} nome="Vini Malvadeza" imagempost={`${ViniS}`} coment="O próximo brasileiro a ganharar o prêmio de melhor do mundo será eu. " curtidas="100k" time="9"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${PedroS}`} nome="Pedro" imagempost={`${PedroS}`} coment="Meu sonho desde pequeno foi, defender as cores do Brasil na copa." curtidas="100k" time="9"/>
                    </div>
                    <div className= "box" style={{margin: "30px 0"}}>
                        <Post imagemperfil={`${Ja}`} nome="Ja Morant" imagempost={`${JaS}`} coment="unanimous MVP" curtidas="100k" time="1"/>
                    </div>
                </div>
                <div style={{ gridArea: "SecondColumn" }} >
                    <div className= "suggestionBox" >
                        <Suggestion />
                    </div>
                </div>
            </div>  
        </>
    )
}