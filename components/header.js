import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/language-switcher'

const navContent = {
    "en": {
        direct: "Direct",
        home: "Home",
        issuers: "Issuers",
        investors: "Investors",
        strength: "Financial Strength",
        contact: "Contact Us",
    },
    "ja": {
        direct: "米国 ダイレクト",
        home: "ホーム",
        issuers: "商品/サービス 発行会社",
        investors: "商品/サービス 投資家",
        strength: "弊社の 財務力",
        contact: "コンタクト",
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

export default function Header(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { direct, home, issuers, investors, strength, contact } = navContent[locale];
    const wrapperClass = locale === 'ja' ? 'wrapper-ja' : 'wrapper-en';
    return (
        <div id="headerwrapper" className={wrapperClass}>
            <header role="banner">
                <Link href="/" id="mainlogo" passHref>
                    <Logo />
                </Link>
                <dl id="headerContact">
                    <dt>{direct}</dt>
                    <dd>1 (203) 862 4800</dd>
                    <dt>Switch Language:</dt>
                    <dd className="flagLink">{<LanguageSwitcher />}</dd>
                </dl>
                
                <nav id="mainnav" role="navigation">
                    <ul>
                        <li id="homeNav"><Link href="/" passHref>{home}</Link></li>
                        <li id="productsNav" className="topnav"><span id="products">Products/Services</span>
                            <ul id="productsSubnav" className="subnav">
                                <li id="airlinesSubnav"><Link href="/issuers" passHref>{issuers}</Link></li>
                                <li id="investorsSubnav"><Link href="/investors" passHref>{investors}</Link></li>
                            </ul>
                        </li>
                        <li id="aboutNav" className="topnav"><span id="aboutus">About Us</span>
                            <ul id="aboutSubnav" className="subnav">
                                <li id="strengthNav"><Link href="/financial-strength" passHref>{strength}</Link></li>
                            </ul>
                        </li>
                        <li id="contactNav"><Link href="/contact-us" passHref>{contact}</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
