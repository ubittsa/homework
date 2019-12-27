import React from 'react';
import logo from './logo.svg';
import './App.css';

let NavBar = p =>

<div class="nav-bar">
    <label class="mobile-list" for="menuToggler">
        <i class="fa fa-bars"></i>
    </label>
        <input type="checkbox" id="menuToggler" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Locations</a></li>
            </ul>        
</div>

let Article = p =>
    <div>
         <img class="image-blog" src="images/rss1.jpg" alt="gdgs" />
            <h4>Apple i phone variations</h4>
                <p>Lorem Ipsum is simply dummy text of the <a class="ssilka"  href="#">printing and typesetting</a> industry. alley of type<a class="ssilka"  href="#">...Read More</a></p>
                    <div>30/12/12 By: Mariya</div>
    </div>

let Article2 = p =>
    <div>
         <img class="image-blog"src="images/rss2.jpg" alt="gdgs" />
            <h4>Apple i phone variations</h4>
                <p>Lorem Ipsum is simply <a class="ssilka"  href="#">dummy text</a> of the printing and typesetting industry. alley of type<a class="ssilka"  href="#">...Read More</a></p>
                    <div>30/12/12 By: Mariya</div>
    </div>


let Article3 = p =>
    <div>
        <p>Lorem Ipsum is simply<a class="ssilka"  href="#"> dummy text</a> of the printing and typesetting industry. alley of type<a class="ssilka"  href="#">...Read More</a></p>
            <div>30/12/12 By: Mariya</div>

    </div>



  function App() {
    return (
<div>
    <header>
        <div class="wrapper holder">
            <a class="logo" href="/"><img src="images/logo.png" alt="logo" /> </a>
            <NavBar />
        </div>
    </header>
    <main>
        <div class="wrapper content-holder">
            <section class="content">
                <h1><a href="#"><i class="fa fa-cogs" aria-hidden="true"></i></a>Progects</h1>
                <img src="images/banner1.jpg" alt="gdg" />
                <img src="images/banner2.jpg" alt="gdgs" />
                <img src="images/banner3.jpg" alt="gdgs" />
                <img src="images/banner4.jpg" alt="gdgs" />
            </section>
        </div>
            <div class=" wrapper article-holder">
                <div class="article-holder blog">
                    <h1><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a>From blog</h1>
                    <Article />
                    <Article2 />
            </div>
                <div class="article-holder tweet">
                    <h1><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> Twitter feed</h1>
                       <Article3 />
                       <Article3 />
                       <Article3 />
                </div>
            </div>
    </main>
    <footer class="wrapper">
    <div class="footer-holder">
        <address>@A-level 2017</address>
        <div class="social">
            <a href="#"><i class="fa fa-facebook-square"></i></a>
            <a href="#"><i class="fa fa-twitter-square"></i></a>
            <a href=""><i class="fa fa-youtube-square"></i></a>
            <a href="#"><i class="fa fa-cloud-download" aria-hidden="true"></i></a>
        </div>
    </div>
    </footer>

</div>

    );
  }

export default App;
