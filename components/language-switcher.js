import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import japan from '../public/lib/img/japan-16.png'
import usa from '../public/lib/img/usa-16.png';

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  // We only have two languages, so we can just hardcode the other locale
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          const label = locale === 'ja' ? 'Japanese' : 'English';
          const flag = locale === 'ja' ? japan : usa;
          const flagSrc = locale === 'ja' ? '/lib/img/japan-16.png' : '/lib/img/usa-16.png';

          return (
              <Link href={{ pathname, query }} as={asPath} locale={locale} key={locale}>
                <a><img src={flagSrc} alt={`${label} flag`} /> {label}</a>
              </Link>
          )
        })}
    </>
  )
}
