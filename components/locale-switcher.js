import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import japan from '../public/lib/img/japan.png'
import usa from '../public/lib/img/usa.png';

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          const label = locale === 'ja' ? 'Japanese' : 'English';
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a><Image src={usa} alt="Logo" /> {label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
