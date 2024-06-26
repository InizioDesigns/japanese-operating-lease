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
        issuers: "発行会社のお客様/商品*サービス",
        investors: "投資家のお客様/商品*サービス",
        strength: "弊社の 財務力",
        contact: "お問い合わせ",
    },
};

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} id="babcocklogo">
        <Image src="/lib/img/main-logo-55.webp" alt="Babcock and Brown logo" height="55" width="540" />
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

                        <li id="airlinesSubnav" className="topnav"><Link href="/issuers" passHref>{issuers}</Link></li>
                        <li id="investorsSubnav" className="topnav"><Link href="/investors" passHref>{investors}</Link></li>
                        <li id="strengthNav" className="topnav"><Link href="/financial-strength" passHref>{strength}</Link></li>
                        <li id="contactNav"><Link href="/contact-us" passHref>{contact}</Link></li>
                        <li id="navLanguage" className="flagLink">{<LanguageSwitcher />}</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
