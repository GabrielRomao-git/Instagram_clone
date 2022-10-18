import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty, IoIosHeart } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'


export function Post(props) {
    const [coracao, curtir]=useState('');
    return (
        <>
            <header className= "header-post">
                <div className= "infos-post">
                    <img className= "img-header-post" src={props.imagemperfil} alt="foto-perfil"/>
                    <p>{props.nome}</p>
                </div>
                <FiMoreHorizontal />
            </header>
            <div className= "img-post">
                <img src={props.imagempost} alt= "post"/>
            </div>
            <div className='footer-post'>
                <IconContext.Provider value={{size: "24px"}} >
                    <section className= "engagement-post">
                        <div className= "icons-1">
                            <div className= "icons" onClick={() => curtir(!coracao)}>{coracao ? <IoIosHeart color='#ed4956'/> : <IoMdHeartEmpty />}</div>
                            <div className= "icons"><BsChat /></div>
                            <div className= "icons"><FiSend /></div>
                        </div>
                        <div className= "icons"><BsBookmark /></div>   
                    </section>
                </IconContext.Provider>
                <section className= "like">
                    <span>{props.curtidas} curtidas</span>
                </section>
                <div className= "legend">
                    <p>
                        <strong>{props.nome}</strong> {props.coment}
                    </p>
                </div>
                <div className= "time-post">
                    <time>Há {props.time} hora</time>
                </div>
                <div className= "comment">
                    <div className= "fake-comment">
                       <IconContext.Provider value={{size: '25px'}}>
                        <div className='icon'>
                            <BsEmojiSmile />
                        </div>
                       </IconContext.Provider>
                        <input placeholder= "Adicione um comentário..." />
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </> 
    )
}