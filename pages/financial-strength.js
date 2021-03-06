import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/language-switcher'
import Header from '../components/header'
import Footer from '../components/footer'

const strengthContent = {
    "en": {
        title: "Financial Strength",
        p1: "Babcock & Brown Securities is backed by committed multi-year payment streams, providing recurring contractual cash flow regardless of business conditions. From this foundation, we are able to focus on the long term needs and interests of our clients.",
        p2a: "As an SEC-registered broker-dealer and FINRA member, Babcock & Brown Securities is subject to certain net capital maintenance and financial reporting requirements. The firm's latest balance sheet is available at",
        p2b: ".",
    },
    "ja": {
      title: "弊社の財務基盤",
      p1: "Babcock＆Brown証券は、契約上あらかじめ約束された複数年の継続的売上に支えられており、経済情勢や事業状況に関係なく、契約に基づく継続的なキャッシュフローを享受しています。",
      p2a: "Babcock & Brown証券は、SECに登録されたブローカー・ディーラー及びFINRAのメンバーとして、一定の純資本維持及び財務報告要件の適用を受けます。当社の最新のバランス・シートは、",
      p2b: " において閲覧することができます。",
    },
};

export default function Strength(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { title, p1, p2a, p2b } = strengthContent[locale];
    return (
        <div id="financialstrength" className="interior marketing">
            <div id="container">
                <Head>
                    <title>{title}</title>
                </Head>
                <Header />

                <section id="maincontent">
	                <section id="content">
                        <video autoPlay="autoPlay" loop="loop">
                            <source src="/lib/img/background_images/pumpjacks3/V3_2500x300_SC_V2.mov" />
                            <source src="/lib/img/background_images/pumpjacks3/V3_2500x300_MASTER.oggtheora.ogg" type='video/ogg; codecs="theora, vorbis"' />
                            <source src="/lib/img/background_images/pumpjacks3/V3_2500x300.mp4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                            <source src="/lib/img/background_images/pumpjacks3/V3_2500x300.webmhd.webm" type='video/webm; codecs="vp8, vorbis"' />
                        </video>
                        <h1><span style={{padding: "20px 0"}}>{title}</span></h1>
                        <p style={{paddingTop: "20px"}}>{p1}</p>
                        <p style={{paddingBottom: "20px"}}>{p2a} <Link href="http://www.sec.gov" target="_blank">www.sec.gov</Link> {p2b}</p>
                    </section>
                </section> 

                <Footer />
            </div>
        </div>
    )
}
