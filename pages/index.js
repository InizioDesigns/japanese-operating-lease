import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'

const homeContent = {
    "en": {
        hero: {
            intro:
                "Babcock & Brown is a leading provider of financial advisory and capital raising services to CAPEX-intensive issuers.",
            description:
                "Babcock & Brown Securities has placed hundreds of millions of dollars in private debt, equity and sale/leaseback transactions backed by assets. We specialize in advising issuers, investors and sellers on financing options and placing transactions valued between $50 million and $1 billion.",
        },
        clients: "Top Industry Counterparties",
        access: "Global Access",
        placement: "Debt, Equity & Lease Placement",
        mgmt: "KPI Enhancement",
    },
    "ja": {
        hero: {
            intro:
                "Babcock & Brown証券は、資本的支出を強化する発行会社に対し金融助言及び資本調達サービスを提供する、主要なプロバイダーです。",
            description:
                "Babcock & Brown証券は、数億ドルの 債券、 株式、日本型オペレーティングリース及びセール/リースバック取引を取り扱ってきました。当社は、5,000万ドルから10億ドルの取引に関する、発行会社、投資家及び売主に対する助言に特化しています。",
        },
        clients: "業界トップクラスのクライアント",
        access: "グローバル・アクセス",
        placement: "デット、株式及びリースの取扱い", 
        mgmt: "経験豊富なマネージメント・チーム",
    },
};

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image src="/lib/img/main-logo.svg" alt="Babcock and Brown logo" height="68" width="475" />
      </a>
    )
  })

export default function TestPage(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { hero, clients, access, placement, mgmt } = homeContent[locale];
    return (
        <div id="homepage" className="home marketing">
            <Head>
                <title>Babcock &amp; Brown</title>
            </Head>
            <div id="container">
                <Header />

                <section id="maincontent">
                    <section id="content">
                        <h1>Babcock &amp; Brown</h1>
                        <ul id="focalPoints">
                        <li id="topclients" className=""><span>{clients}</span></li>
                            <li id="globalaccess" className="clientlogos"><span className="text">{access}</span></li>
                            <li id="debtequity" className="clientlogos"><span className="text">{placement}</span></li>
                            <li id="foundedby" className="clientlogos"><span className="text">{mgmt}</span></li>
                        </ul>
                        <aside>
                            <h2 className={`asidetexthead ${locale}`}>{hero.intro}</h2>
                            <p className={locale}>{hero.description}</p>
                        </aside>
                    </section>
                </section>

                <Footer />
            </div>
        </div>
    )
}
