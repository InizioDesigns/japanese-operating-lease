import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const footerContent = {
    "en": {
        disclaimer: {
            one: 'The following firms are affiliated and under common control: Burnham Sterling & Company LLC, an unregistered entity providing financial advisory services; Babcock & Brown Securities LLC (BBS), an SEC registered broker/dealer and FINRA member firm; and Burnham Sterling Asset Management LLC (BSAM), a registered investment adviser. All securities related activities and/or securities transactions are conducted solely through Babcock & Brown Securities LLC, an SEC registered broker/dealer and',
            finra: 'FINRA member',
            two: 'firm.'
        }
    },
    "ja": {
        disclaimer: {
            one: '財務顧問サービスを提供する未登録会社Burnham Sterling &amp; Company LLC、SEC 登録ブローカー/ディーラーおよび',
            finra: 'FINRAメンバー',
            two: "メンバーファームBabcock &amp; Brown Securities LLC (BBS)、 資産運用会社であるバーヌハム・スターリング・アセット・マネジメントLLC (BSAM) の 3社は関連会社であり、共通の管理下にあります。証券関連活動および証券取引すべては BBSのみ通じて行われ、すべての資産運用サービスは BSAM によって提供されます。"
        }
    },
};

export default function Footer(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { one, two, three, sipc, finra } = footerContent[locale].disclaimer;
    const wrapperClass = locale === 'ja' ? 'footer-ja' : 'footer-en';
    const year = new Date;
    const thisYear = year.getFullYear(); 

    return (
        <div id="footerWrapper" className={wrapperClass}>
            <footer>
                <div id="sec">
                    <p id="disclaimer" className={locale}>{one} <Link href="http://www.finra.org" className="sipclink" target="_blank" rel="noreferrer">{finra}</Link> {two}</p>
                    <p id="copyright">&copy; {thisYear} Babcock &amp; Brown, LLC. All rights reserved. <span><Link href="/lib/docs/BurnhamBusinessContinuity.pdf">Business Continuity</Link></span> | <span><Link href="/privacy-policy">Privacy Policy</Link></span> | <span><Link href="/terms-conditions">Terms and Conditions</Link></span></p>
                </div>
            </footer>
        </div>
    );
}
