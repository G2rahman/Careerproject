import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaDollarSign } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import finance from '../finance.png';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import Logo from './Logo';

export const data = [
  ['Element', 'Density', { role: 'style' }],
  ['Copper', 8.94, '#b87333'], // RGB value
  ['Silver', 10.49, 'silver'], // English color name
  ['Gold', 19.3, 'gold'],
  ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
];

const data1 = [
  {
    title: 'What to Choose?',
    description:
      'I have been pretty insistant that I will never buy options. Over 70% of options expire worthless. The only stock worth buying is SPY, becuase compared to QQQ and other ETFS it is a relative "risk-off" asset. In the recent 2022 market dip, QQQ dropped to ,while SPY dropped by . Individual stocks dropped by alot more. I think covered calls(selling calls on an asset) is supreme is because this means that if you sell a call, that means over 70% of the time you will make profit. The other 30% of the time when these calls do not expire worthless, the increased price in the asset will make you profit. ',
  },
  {
    title: 'Now what asset should you run these Covered Calls on?',
    description:
      'There are several types of stocks you can pick from in my opinion. We can pick from ETFS, tech stocks, finance, commondities, crypto stocks, and meme stocks. Selling covered calls on ETFs is safe, becuase it is so diversified. Due low implied volatality(how much the market thinks the stock will), the returns will not be great but they should be somehwat profitable. Tech stocks have great volaitltiy including Tesla. I know tsla is not a tech stock but it has volatility of one.Finance and commondoity stocks should have medocire returns, but they are relatively stable. Crypto stocks are insanely volatile, offering large returns but the risk is also enourmous, as it seems as in a bear market they are the first to sell off and the last to go up. Meme stocks are not stable, but they offer great returns. I have some expierence with meme stocks, but the issue is in a bear market, they will slughtered and liekly will not increase along with the risk of the company going bankrupt.',
  },
  {
    title: 'Coming Soon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi.',
  },
  {
    title: 'Coming Soon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta.',
  },
];
//npm install react-icon
function Basics() {
  return (
    <div>
      <ul className="menu">
        <Link to="Homepage">
          <li>Home</li>
        </Link>
        <Link to="Wsb">
          <li>WSB</li>
        </Link>
        <Link to="Basics">
          <li>Basics</li>
        </Link>
      </ul>

      <div className="flipcard">
        <div className="nomenu">
          <div className="flipcard1">
            <div className="card-inner1">
              <div className="front-face1">
                <div className="front-text1">
                  <h1>Investment type:Shares</h1>
                  <h1> Margin:yes</h1>
                </div>
                <div className="social-icons1">
                  <i>
                    <FaDollarSign />
                  </i>
                </div>
              </div>
              <div className="back-face1">
                <h1>
                  Everybody knows what shares is. You want to invest? Buy
                  shares. Shares are a little part of the company. For retail I
                  wouldn't buy shares of anything but SPY or GLD. I will explain
                  why in a later section
                </h1>
              </div>
            </div>
          </div>
          <div className="flipcard2">
            <div className="card-inner2">
              <div className="front-face2">
                <div className="front-text2">
                  <h1>Investment type:Options(including spreads)</h1>
                  <h1>Margin:no</h1>
                </div>
                <div className="social-icons2">
                  <i>
                    <FaCoins />
                  </i>
                </div>
              </div>
              <div className="back-face2">
                <h1>
                  Options is a contract which allows whoever buys it, the right
                  to buy or sell an underlying asset at a specified strike price
                  on/before the specified date. In simpler terms, it means the
                  stock has to move to the strike price AND more to factor in
                  theta decay within the expiration date of your option. I don't
                  reccomend any retail investors to buy options. Spreads are
                  specific types of options.
                </h1>
              </div>
            </div>
          </div>
          <div className="flipcard3">
            <div className="card-inner3">
              <div className="front-face3">
                <div className="front-text3">
                  <h1>Investment type:Covered Calls</h1>
                  <h1>Margin:yes</h1>
                </div>
                <div className="social-icons3">
                  <i>
                    <FaShoppingBag />
                  </i>
                </div>
              </div>
              <div className="back-face3">
                <h1>
                  Covered calls is a combination of shares and SELLING options,
                  not buying options. In my opinion the safest and ONLY way to
                  invest/trade.
                </h1>
                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="400px"
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordioncontent">
        <div className="app-description">
          <h1>Thesis: Create a successful investing strategy/portolio. The issue with longterm investing in single stocks or ETFS is that in periods of negative returns or stagnant growth, there is no growth or profit. </h1>
          <p>
            In this section, I will give my personal thoughts, strategy, mindset, and "look at data" on the way I see the market from the moment it opens to the moment it closes. Many of these things might only apply to me.
          </p>
        </div>
        <AccordionWrapper>
          {data1.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </AccordionWrapper>
        <Logo/>
      </div>
    </div>
  );
}

export default Basics;
