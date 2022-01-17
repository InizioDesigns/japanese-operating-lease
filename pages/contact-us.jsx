import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/language-switcher'
import Header from '../components/header'
import Footer from '../components/footer'

const contactContent = {
    "en": {
        welcome: "WELCOME TO OUR WATERFRONT OFFICE!",
        time: "Local Time:",
        direct: "Direct:",
        outsideUS: "Outside USA and Canada:",
        investorInquiry: "Investor Inquiries",
        clientInquiry: "Client (issuer) Inquiries",
        outsideNY: "Only 45 minutes from New York City.",
        downloadDirections: "Download driving directions",
    },
    "ja": {
        welcome: "当社のウォーターフロント・オフィスへようこそ！",
        time: "現地時間：",
        direct: "ダイレクト：",
        outsideUS: "米国及びカナダ以外： ",
        investorInquiry: "投資家問合せ先",
        clientInquiry: "クライアント（発行会社）問合せ先",
        outsideNY: "ニューヨーク市から45分。",
        downloadDirections: "運転の道順案内をダウンロード",
    },
};

const getTime = () => {
    var dt = new Date();
    console.log(dt); // Gives Tue Mar 22 2016 09:30:00 GMT+0530 (IST)

    dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
    console.log(dt); // Gives Tue Mar 22 2016 04:00:00 GMT+0530 (IST)

    var offset = -300; //Timezone offset for EST in minutes.
    var estDate = new Date(dt.getTime() + offset*60*1000);
    console.log(estDate); //Gives Mon Mar 21 2016 23:00:00 GMT+0530 (IST)
    return estDate.toLocaleTimeString([], {
        timeStyle: 'short'
      });
}

export default function Contact(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { welcome, time, direct, outsideUS, investorInquiry, clientInquiry, outsideNY, downloadDirections } = contactContent[locale];
    const now = getTime();
    return (
        <div id="contact" className="interior marketing">
            <Head>
                <title>Contact Us</title>
            </Head>
            <div id="container">
                <Header />

                <section id="maincontent">
                    <section id="content">
                        <h1>Contact Us</h1>
                        <section id="mapInset">
                            <a href="/lib/docs/Directions-to-Burnham-Sterling-Co.pdf" target="_blank"><span>Get Driving Directions &hellip;</span></a>
                        </section>
                        <section id="contactInfo">
                            <h2>{welcome}</h2>
                            <address className="vcard">
                                <div className="addr">
                                    <p><a href="/lib/docs/Directions-to-Burnham-Sterling-Co.pdf" target="_blank"><span className="street-address">29 River Road, Suite 102</span><br /><span className="locality">Cos Cob (Greenwich)</span>, <span className="region">CT</span> <span className="postal-code">06807</span>  <span className="country-name">USA</span></a></p>
                                    <p id="directphone">{direct} <a href="tel:+18554287642"><span className="tel">+1 (855) 428 7642</span></a></p>
                                    <p>{outsideUS} <a href="tel:+12038624800"><span className="tel">+1 (203) 862 4800</span></a></p>
                                </div>
                                <div id="localtime">
                                    <p>{time} <span id="currentTime">{now}</span></p>
                                    <canvas id="clock" className="CoolClock:burnham:45:noSeconds:-5"></canvas>
                                </div>
                            </address>
                            <dl>
                                <dt>{investorInquiry}</dt>
                                <dd><a href="mailto:joonho.lee@babcockandbrown.com" className="email">joonho.lee@babcockandbrown.com</a></dd>			
                                <dt>{clientInquiry}</dt>
                                <dd><a href="mailto:mike.morgan@babcockandbrown.com" className="email">mike.morgan@babcockandbrown.com</a></dd>
                            </dl>
                        </section>
                        <section id="contactDirections">
                            <p>{outsideNY} <a href="/lib/docs/Directions-to-Babcock-Brown-2019.pdf" target="_blank" id="dwnldDirections">{downloadDirections}</a></p>
                        </section>
                    </section>
                </section> 
                <Script src="/lib/js/coolclock.js"></Script>
                <Footer />
            </div>
        </div>
    )
}
