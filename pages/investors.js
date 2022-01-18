import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/language-switcher'
import Header from '../components/header'
import Footer from '../components/footer'

const investorsContent = {
    "en": {
        title: "Investors",
        intro: "Babcock & Brown uses its worldwide relationships to source new investment opportunities. Once sourced, B&B structures the transaction, performs applicable due diligence, then presents the transaction to appropriate investors for their evaluation. B&B prides itself on presenting transactions that will be long-term contributors to investors' portfolios.",
        listTitle: "Sample B&B Transactions",
        list: [
            "USD Investment grade and high yield",
            "Senior with 5-15 year term",
            "Mezzanine with 4-10 year term",
            "High coupon CAP Notes",
            ", with kicker",
            "Assets on lease (i.e., whole asset investments)",
          ],
        list2Title: "Typical Transaction Features",
        list2: [
          "Competitive yields",
          "Mortgages and amortization",
          "Single issuer or diversified portfolios",
          "Invest alone or with multiple investors per deal4",
          "Customization to match investor requirements",
        ],
        sub: [
            "CAP Notes means Corporate Asset Preferred, which is a Burnham-proprietary secured debt obligation with upside based on equipment values.",
            "B&B also offers transactions in €, ¥, 元 and ₩.",
            "May also be structured as a bank loan.",
            "Minimum of US$10,000,000.",
        ]
    },
    "ja": {
        title: "投資家の皆さまへのメリット",
        intro: "Babcock & Brown証券は、新たな投資機会を調達するため、グローバルなリレーションシップを活用します。B&Bは取引のストラクチャリングを行い、適用されるデュー・デリジェンスを実施し、その後適切な投資家に対しそれらによる評価のために取引を提示します。B&Bは、投資家のポートフォリオに長期的に貢献する取引を提示することを、誇りとしています。",
        listTitle: "B&Bの取引サンプル",
        list: [
          "米ドル投資適格及びハイ・イールド社債",
          "5年から15年の期間のシニア社債",
          "4年から10年の期間のメザニン社債",
          "キッカー付きハイ・クーポンCAP債",
          "",
          "リース資産（ホール・アセット投資, 及び日本型オペレーティングリース投資）",
        ],
        list2Title: "典型的な取引の特徴",
        list2: [
          "競争力あるイールド",
          "モーゲージとアモタイゼーション",
          "単一の発行会社又は多様なポートフォリオ",
          "取引ごとに、単独による又は複数の投資家との投資",
          "投資家要件に合致させるカスタマイゼーション",
        ],
        sub: [
            "CAP債とは、設備の価値に基づくアップサイドを伴うBurnham私有の担保付債務である、コーポレート・アセット・プリファード（Corporate Asset Preferred）を意味します。",
            "B&Bは、€、¥、元及び₩の取引もオファーします。",
            "銀行ローンとして構成されることもあります。",
            "最低金額をUS$10,000,000とします。",
        ]   
    },
};

export default function Investors(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { title, intro, listTitle, list, list2Title, list2, sub } = investorsContent[locale];
    return (
        <div id="investors" className="interior marketing">
            <Head>
                <title>{title}</title>
            </Head>

            <div id="container">
                <Header />
                <section id="maincontent">
                    <section id="content">
                        <h1><span>{title}</span></h1>
                        <p id="intro" className={locale}>{intro}</p> 

                        <div id="slider">
                            <div id="placements">
                                <h2>{listTitle}</h2>
                                <ul className="listbox">
                                    <li>{list[0]}<sup><a href="#note2">2</a></sup></li>
                                    <li>{list[1]}<sup><a href="#note3">3</a></sup></li>
                                    <li>{list[2]}</li>
                                    <li>{list[3]}<sup>&reg; 1</sup>{list[4]}</li>
                                    <li>{list[5]}</li>
                                </ul>
                            </div>
                        
                            <div id="transfeatures">
                                <h2>{list2Title}</h2>
                                <ul className="listbox">
                                    <li>{list2[0]}</li>
                                    <li>{list2[1]}</li>
                                    <li>{list2[2]}</li>
                                    <li>{list2[3]}<sup><a href="#note4">4</a></sup></li>
                                    <li>{list2[4]}</li>
                                </ul>
                            </div>
                        </div>
                        <ol className="notes clear">
                            <li id="note1"><sup>1</sup> {sub[0]}</li>
                            <li id="note2"><sup>2</sup> {sub[1]}</li>
                            <li id="note3"><sup>3</sup> {sub[2]}</li>
                            <li id="note4"><sup>4</sup> {sub[3]}</li>
                        </ol>   
                    </section>
                </section>
                <Footer />
            </div>
        </div>
    )
}
