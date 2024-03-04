import React from "react";
import './MainContent.css';
import playlist1 from '../../assets/playlist/1.jpeg'
import playlist2 from '../../assets/playlist/2.png'
import playlist3 from '../../assets/playlist/3.jpeg'
import playlist4 from '../../assets/playlist/4.jpeg'
import playlist5 from '../../assets/playlist/5.jpeg'
import playlist6 from '../../assets/playlist/6.jpeg'
import playlist7 from '../../assets/playlist/7.jpeg'
import playlist8 from '../../assets/playlist/8.jpeg'
import playlist9 from '../../assets/playlist/9.jpeg'
import playlist10 from '../../assets/playlist/10.jpeg'
import playlist11 from '../../assets/playlist/11.jpeg'
import playlist12 from '../../assets/playlist/12.jpeg'
import playlist13 from '../../assets/playlist/13.jpeg'
import playlist14 from '../../assets/playlist/14.jpeg'
import playlist15 from '../../assets/playlist/15.jpeg'


const MainContent = () => {
    return (
        <div class="main__content"> 
            <section id="result-playlist" class="section__playlist-cards">
                <div class="salutation">
                    <h1>Boa noite</h1>
                </div>
                <div class="playlist-cards__introduction">
                    <h2>Navegar por todas as seções</h2>
                </div>
                <ul class="playlist-cards">
                    <li class="cards card1">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist1} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card2">
                        <a href="">
                            <span class="playlist-name">Feitos para você</span>
                            <img src={playlist2} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card3">
                        <a href="">
                            <span class="playlist-name">Lançamentos</span>
                            <img src={playlist3} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card4">
                        <a href="">
                            <span class="playlist-name">Creators</span>
                            <img src={playlist4} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card5">
                        <a href="">
                            <span class="playlist-name">Para treinar</span>
                            <img src={playlist5} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card6">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist6} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card7">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist7} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card8">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist8} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card9">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist9} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card10">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist10} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card11">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist11} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card12">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist12} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card13">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist13} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card14">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist14} alt="Card 1" />
                        </a>
                    </li>
                    <li class="cards card15">
                        <a href="">
                            <span class="playlist-name">Boas festas</span>
                            <img src={playlist15} alt="Card 1" />
                        </a>
                    </li>
                </ul>
            </section>
            <div id="result-artist" class="hidden">
                <div class="grid-container">
                    <div class="artist-card" id="">
                        <div class="card-img">
                            <img id="artist-img" class="artist-img" />
                            <div class="play">
                                <span class="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div class="card-text">
                            <a title="Foo Fighters" class="vst" href="">
                                <span class="artist-name" id="artist-name"></span>
                                <span class="artist-categorie" id="artist-genre">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;