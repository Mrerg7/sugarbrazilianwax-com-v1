import { DOMAIN_OFFER, SITE } from './site';

const askingPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: DOMAIN_OFFER.priceCurrency,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}).format(Number(DOMAIN_OFFER.price));

export const HOME_FAQS = [
  {
    question: `Is ${SITE.domain} for sale?`,
    answer: `Yes. ${SITE.domain} is a premium exact-match .com available for immediate acquisition. Asking price is ${askingPrice} USD. Serious offers are considered, and transfer can be completed via escrow.`,
  },
  {
    question: 'Why is this domain valuable for SEO?',
    answer:
      'SugarBrazilianWax.com matches the exact commercial phrase clients search when looking for Brazilian sugar waxing. Exact-match .com domains help brand recall, type-in traffic, and topical relevance for salon, mobile, product, and training businesses.',
  },
  {
    question: 'What businesses fit SugarBrazilianWax.com?',
    answer:
      'Specialized sugar wax salons, mobile/concierge sugaring services, natural hair-removal product brands, training academies, franchises, and booking platforms focused on Brazilian sugaring.',
  },
  {
    question: 'How does domain transfer work?',
    answer: `After agreeing on terms, transfer is handled through a reputable escrow service. Contact ${SITE.email} to start a confidential inquiry. Most transfers complete within a few business days once payment clears.`,
  },
  {
    question: 'What is Brazilian sugar waxing?',
    answer:
      'Brazilian sugar waxing (sugaring) uses a natural paste of sugar, lemon, and water applied near body temperature. It removes hair with less trauma than traditional hot wax and is popular with clients seeking a gentler, chemical-light option.',
  },
] as const;
