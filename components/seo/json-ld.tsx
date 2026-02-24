const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hyperbasak.com";

export function OrganizationJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growth Block",
    legalName: "주식회사 하이퍼바삭",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "단순 광고 집행을 넘어 비즈니스 맞춤형 성장 시스템을 구축합니다. 파트너 CMO 팀의 1:1 맞춤 컨설팅.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "선릉로 704",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@hyperbasak.com",
      contactType: "customer service",
      availableLanguage: "Korean",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Growth Block 마케팅 컨설팅",
    provider: {
      "@type": "Organization",
      name: "Growth Block",
    },
    description:
      "수익 구조 설계부터 운영까지, 비즈니스 맞춤형 성장 시스템 구축. 데이터 기반 의사결정, 수익 최적화, 통합 운영 관리, 전략 자산화 시스템.",
    areaServed: {
      "@type": "Country",
      name: "KR",
    },
    serviceType: [
      "마케팅 컨설팅",
      "그로스 마케팅",
      "CMO 대행",
      "퍼포먼스 마케팅",
      "수익 구조 설계",
    ],
    url: SITE_URL,
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Growth Block",
    url: SITE_URL,
    inLanguage: "ko",
    publisher: {
      "@type": "Organization",
      name: "Growth Block",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
