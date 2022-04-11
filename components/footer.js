import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const footerContent = {
    "en": {
        disclaimer: {
            one: 'Babcock & Brown Securities LLC (“Babcock & Brown”) is an SEC registered broker/dealer, ',
            finra: 'FINRA member',
            two: " firm and member of SIPC (for details, please see",
            sipc: 'www.sipc.org',
            three: "). All securities related activities and/or securities transactions are conducted solely through Babcock & Brown Securities LLC. Burnham Sterling & Company LLC  is an unregistered entity providing financial advisory services and an affiliate under common control of Babcock & Brown. Activities of Babcock & Brown described in this website may have been completed by an affiliate of Babcock & Brown."
        }
    },
    "ja": {
        disclaimer: {
            one: 'Babcock & Brown LLC（「B&B」）は、金融助言サービスを提供する未登録の機関であり、Babcock & Brown証券の共通の管理下にある関連会社です。Babcock & Brown証券は、SECに登録されたブローカー/ディーラであり、',
            finra: 'FINRAメンバー',
            two: "機関であり、SIPCのメンバーです（詳細は、",
            sipc: 'www.sipc.org',
            three: "をご参照ください。）。全ての有価証券に関連する活動及び/又は有価証券取引は、Babcock & Brown証券を通じて行われます。注：カウンターパーティーとは、B&B又はBabcock & Brown証券（又はその関連会社）が関与する取引の借主、レッシー、投資家、貸主、レッサー、買主、売主又は債務者である機関をいいます。本ウエブサイトに記載されるB&Bの活動は、B&Bの関連会社により実行されたものである場合があります。",
        }
    },
};

export default function Footer(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale } = router
    const { one, two, three, sipc, finra } = footerContent[locale].disclaimer;
    const wrapperClass = locale === 'ja' ? 'footer-ja' : 'footer-en';

    return (
        <div id="footerWrapper" className={wrapperClass}>
            <footer>
                <div id="sec">
                    <p id="disclaimer" className={locale}>{one} <Link href="http://www.finra.org" className="sipclink" target="_blank" rel="noreferrer">{finra}</Link> {two} <Link href="http://www.sipc.org" className="sipclink" target="_blank" rel="noreferrer">{sipc}</Link> {three}</p>
                    <p id="copyright">&copy; 2022 Babcock &amp; Brown, LLC. All rights reserved. <span><Link href="/lib/docs/BurnhamBusinessContinuity.pdf">Business Continuity</Link></span> | <span><Link href="/privacy-policy">Privacy Policy</Link></span> | <span><Link href="/terms-conditions">Terms and Conditions</Link></span></p>
                </div>
            </footer>
        </div>
    );
}
