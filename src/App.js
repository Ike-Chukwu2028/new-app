 import logo from './logo.svg';
 import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import top from './Image/freeMoney-1.5.webp';
import coin from './Image/coinimage.webp';
import acct from './Image/background.webp';

function App() {

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id='nav-coinbase'>CoinBase</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Web3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Learn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Individual</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Developers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Company</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit" id='sign-in'>Sign In</button>
        <button class="btn btn-outline-success" type="submit" id='get-started'>Get Started</button>
      </form>
    </div>
  </div>
</nav>

<div id='section'>
  <section id='first'>
  <section id='btc-image'>
  <a href='' id='jump-start'>Jump Start Your Portfolio -> </a><br></br><br></br>

  </section>
  <section id='big-p'>

  <p id='big-paragraph'>Jump Start Your Crypto Portfolio</p>

  </section>
  <section id='small-p'>
  <p>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>

  </section>
  <section id='button'>
  <input class="form-control me-2" type="email" placeholder='Email'></input>
  <button class="btn btn-outline-success" type="submit" id='blue'>Get Started</button>

  </section>
  </section>
  <section id='image-source'>

  <img src={top} alt=''></img>

  </section>
</div>

<div id='Explore'>
  <section id='h1'>
    <img src='' alt=''></img>
  </section>
  <section id='h3'>
  <h1>Explore web3 profiles, and claim one for free</h1>
  <p>Create and customize your web3 profile, check out other profiles, and<br></br> explore popular NFT collections and tokens.</p><br></br>
  <button>learn More -></button>

  </section>
</div>

<section id='table-1'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Change</th>
      <th scope="col">Chart</th>
      <th scope="col">Trade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bitcoin BTC</td>
      <td>NGN 23,159,778.09</td>
      <td>+0.19%</td>
      <td>Market</td>
      <td><button id='buy-btc'>Buy</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ethereum ETH</td>
      <td>NGN 1,467,047.40</td>
      <td>+4.62%</td>
      <td>Market</td>
      <td><button id='buy-ethereum'>Buy</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cardano ADA</td>
      <td>NGN 219.72</td>
      <td>+5.01%</td>
      <td>Market</td>
      <td><button id='buy-cardano'>Buy</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Solana SOL</td>
      <td>NGN 14,11821</td>
      <td>+1.94%</td>
      <td>Market</td>
      <td><button id='buy-solana'>Buy</button></td>
    </tr>
    
  </tbody>
</table>
</section>

<div id='shadow-box'>
  <section>
    <p id='Earn'>Earn up to $18 worth of <br></br>crypto</p>
    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
    <button>Start earning</button>
  </section>
  <section>
  <table class="table">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src='' alt=''></img></th>
      <td>The Graph GRT</td>
      <td>Earn $4 GRT</td>
    </tr>
    <tr>
      <th scope="row"><img src='' alt=''></img></th>
      <td>Amp AMP</td>
      <td>Earn $3 AMP</td>
    </tr>
    <tr>
      <th scope="row"><img src='' alt=''></img></th>
      <td>SHPING SHPING</td>
      <td>Earn $3 SHPING</td>
    </tr>
    <tr>
      <th scope="row"><img src='' alt=''></img></th>
      <td>NEAR Protocol NEAR</td>
      <td>Earn $3 NEAR</td>
    </tr>
  </tbody>
</table>
<a href=''>view more -></a>
  </section>
</div>

<section id='create'>
<h1>Create your cryptocurrency portfolio today</h1>
<p>Coinbase has a variety of features that make it the best place to start trading</p>
</section>

<div id='coinbase'>
<section>
  <img src='' alt=''></img>
  <h3>Manage your portfolio</h3>
  <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
  <img src='' alt=''></img>
  <h3>Recurring buys</h3>
  <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
  <img src='' alt=''></img>
  <h3>Vault protection</h3>
  <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
  <img src='' alt=''></img>
  <h3>Mobile apps</h3>
  <p>Stay on top of the markets with the Coinbase app for Android or iOS.</p>
</section>
<section id='coin-image'>
  <img src={coin} alt=''></img>
</section>

</div>

<br></br>
<hr></hr>
<section id='platform'>
<h1>The most trusted cryptocurrency platform</h1>
<p>Here are a few reasons why you should choose Coinbase</p>
</section>

<div id='three-section'>
<section>
<img src='' alt=''></img>
<h3>Secure storage</h3>
<p>We store the vast majority of the digital assets in secure offline storage.</p>
<br></br>
<br></br>
<a href=''>Learn how Coinbase keeps your funds safe and secure ></a>
</section>
<section>
<img src='' alt=''></img>
<h3>Protected assets</h3>
<p>Our risk management measures are designed to protect your assets.</p>
<br></br>
<br></br>
<a href=''>Learn about how your assets are protected ></a>
</section>
<section>
<img src='' alt=''></img>
<h3>Industry best practices</h3>
<p>Coinbase supports a variety of the most popular digital currencies.</p>
<br></br>
<br></br>
<a href=''>Learn how we implement industry best practices for account security ></a>
</section>

</div>
<br></br>

<div id='numbers'>
<section id='numbers-one'>
<h1>$145B</h1>
<p>Quarterly volume traded</p>
</section>
<section id='numbers-two'>
<h1>$100+</h1>
<p>Countries supported</p>

</section>
<section id='numbers-three'>
<h1>$130B</h1>
<p>Assets on platform</p>
</section>
</div>

<section id='gett-started'>
<h1>Get started in a few minutes</h1>
<p>Coinbase supports a variety of the most popular digital currencies.</p>
</section>

<div id='account'>
<hr></hr>
  <section>
  <img src='' alt=''></img>
  <h3>Create an account</h3>
  </section>
  <section>
  <img src='' alt=''></img>
  <h3>Link Your Bank Account</h3>
  </section>
  <section>
  <img src='' alt=''></img>
  <h3>Start buying & selling</h3>
  </section>
</div>
<div id='image'>
<section>
    <p id='Earn'>Earn up to $18 worth of crypto</p>
    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
    <button>Start earning</button>
  </section>
<section>
<img src={acct} alt=''></img>
</section>
</div>
<p id='single-p'>*Upon purchase of USDC, you will be automatically opted in to rewards. If you’d like to opt out or learn more about rewards, you can <a href='#'>click here.</a> The rewards rate is subject to change and can vary by region. Customers will be able to see the latest applicable rates directly within their accounts.</p>
<div id='four-sections'>
  <section>
  <h3>Coinbase</h3>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Spanish</a></li>
    <li><a class="dropdown-item" href="#">French</a></li>
    <li><a class="dropdown-item" href="#">Italian</a></li>
  </ul>
</div><br></br>
<p>@ 2023 Black Diamond</p>
<p>.<a href='Blog'>Blog</a> .<a href='http://www.twitter.com/' target='blank'>Twitter</a> .<a href='https://www.facebook.com/' target='blank'>Facebook</a></p>

  </section>
  <section>
  <h4>Company</h4>
  <a href='About'>About</a><br></br>
  <a href='Careers'>Careers</a><br></br>
  <a href='Affiliates'>Affiliates</a><br></br>
  <a href='Blog'>Blog</a><br></br>
  <a href='Press'>Press</a><br></br>
  <a href='Security'>Security</a><br></br>
  <a href='Investor'>Investor</a><br></br>
  <a href='Vendors'>Vendors</a><br></br>
  <a href='Legal & Privacy'>Legal & Privacy</a><br></br>
  <a href='Cookie policy'>Coookie Policy</a><br></br>
  <a href='Cookies Preferences'>Cookies Preferences</a><br></br>
  <a href='Do Not Share My Personal'>Do Not Share My Personal</a><br></br>
  <a href='Information'>Information</a><br></br>
  <a href='Digital Asset Disclosures'>Digital Asset Disclosures</a> <br></br><br></br>
  <h4>Learn</h4>
  <a href='Ethereum Merge'>Ethereum Merge</a><br></br>
  <a href='Browse Crypto Prices'>Browse Crypto Prices</a><br></br>
  <a href='Coinbase Bytes newsletter'>Coinbase Bytes newsletter</a><br></br>
  <a href='Crypto basics'>Crypto basics</a><br></br>
  <a href='Tips & tutorials'>Tips & tutorials</a><br></br>
  <a href='Market Updates'>Market Updates</a><br></br>
  <a href='What is Bitcoin'>What is Bitcoin?</a><br></br>
  <a href='What is crypto'>What is crypto?</a><br></br>
  <a href='What is a blockchain'>What is a blockchain?</a><br></br>
  <a href='How to set up a crypto wallet'>How to set up a crypto wallet</a><br></br>
  <a href='How to send crypto'>How to send crypto</a><br></br>
  <a href='Taxes'>Taxes</a><br></br>

  </section>
  <section>
  <h4>Individual</h4>
  <a href='Buy & sell'>Buy & sell</a><br></br>
  <a href='Earn free crypto'>Earn free crypto</a><br></br>
  <a href='Wallet'>Wallet</a><br></br>
  <a href='NFT'>NFT</a><br></br>
  <a href='Card'>Card</a><br></br>
  <a href='Derivatives'>Derivatives</a><br></br>
  <a href='Coinbase One'>Coinbase One</a><br></br>
  <h4>Business</h4>
  <a href='Institutional'></a><br></br>
  <a href='Prime'>Prime</a><br></br>
  <a href='Asset Hub'>Asset Hub</a><br></br>
  <a href='Commerce'>Commerce</a><br></br>
  <h4>Developers</h4>
  <a href='Cloud'>Cloud</a><br></br>
  <a href='Wallet as a Service'>Wallet as a Service</a><br></br>
  <a href='Wallet SDK'>Wallet SDK</a><br></br>
  <a href='Coinbase Wallet Faucet Get'>Coinbase Wallet Faucet - Get</a><br></br>
  <a href='testnet funds'>testnet funds</a><br></br>
  <a href='Coinbase Pay SDK'>Coinbase pay SDK</a><br></br>
  <a href='Node'>Node</a><br></br>
  <a href='Commerce'>Commerce</a><br></br>
  <a href='Base'>Base</a><br></br>
  <a href='Sign in with Coinbase'>Sign in With Coinbase</a><br></br>
  <a href='Rosetta'>Rosetta</a><br></br>
  <a href='Participate'>Participate</a><br></br>
  <a href='Prime API'>Prime API</a><br></br>

  </section>
  <section>
  <h4>Support</h4>
  <a href='Help center'>Help center</a><br></br>
  <a href='Contact us'>Contaact us</a><br></br>
  <a href='Create account'>Create account</a><br></br>
  <a href='ID Verification'>ID Verification</a><br></br>
  <a href='Account Information'>Account Information</a><br></br>
  <a href='Payment methods'>Payment methods</a><br></br>
  <a href='Account access'>Account access</a><br></br>
  <a href='Supported crypto'>Supported crypto</a><br></br>
  <a href='Supported countries'>supported Countries</a><br></br>
  <a href='Status'>Status</a><br></br>

  </section>
</div>

    </>
  )
  
}

export default App;
