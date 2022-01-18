import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/language-switcher'
import Header from '../components/header'
import Footer from '../components/footer'

const issuersContent = {
    "en": {
        title: "Issuers",
        intro: "Babcock & Brown is a leading provider of financial advisory services to assist clients in projects such as determining optimal financing strategies. Clients turn to Babcock & Brown to tap new investors, diversify their funding sources and access more sophisticated financing structures. Babcock & Brown is focused on satisfying its clients and developing long-term repeat customers.",
        listTitle: "Client Benefits",
        list: [
          "Financing costs competitive with public market transactions",
          "Access to new investors and new investor markets",
          "Transaction structures that are more flexible than traditional bond financing",
          "Options for issuers: diversified structures, jurisdictions and investors",
          "Potentially significant cost savings through low-cost tax leases",
          "Sophisticated financial analysis for optimal decision making",
        ],
    },
    "ja": {
      title: "証券発行会社",
      intro: "Babcock & Brown証券は、最適な資金調達戦略など、ストラクチャード ファイナンス (不動産、ローン、リースなど将来一定のキャッシュフローが見込める資産を裏付けとして発行される株式や債券等)を通じた資金調達を支援する金融助言パートナーです。発行会社のお客様は、新たな投資家を発掘し、資金調達源を多様化し、より洗練された資金調達ストレクチャーにアクセスするために、Babcock & Brown証券に助言を求めます。Babcock & Brown証券は、長期にわたりリピートする顧客との関係を構築することに注力しています。",
      listTitle: "発行会社のお客様へのメリット",
      list: [
        "公開市場取引との競争力を有する資金調達コスト",
        "新たな投資家及び新たな投資家市場へのアクセス",
        "伝統的な社債による資金調達と比べてより柔軟な取引ストラクチャー",
        "低コスト・タックス・リースを通じた、多額の費用節減の可能性",
        "最適な意思決定のための洗練された財務分析",
      ],    
    },
};

export default function Issuers(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { title, intro, listTitle, list } = issuersContent[locale];
    return (
        <div id="issuers" className="interior marketing">
            <Head>
                <title>{title}</title>
            </Head>

            <div id="container">
                <Header />

                <section id="maincontent">
                  <section id="content">
                    <h1><span>{title}</span></h1>
                    <div id="intro">
                      <p id="introp">{intro}</p>
                    </div>
                    <div id="slider">
                    
                      <div id="transfeatures">
                        <h2>{listTitle}</h2>
                        <ul className="listbox">
                          {list.map((item, index) => ( <li key={index}>{item}</li> ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                      </section>

                <Footer />
            </div>
        </div>
    )
}
