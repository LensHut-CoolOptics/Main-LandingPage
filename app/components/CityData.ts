export type CityKey = 'tumkur'|'hassan'|'bengaluru'
export const CALL_NUMBER = '+919999999999' // TODO: update
export const CityData: Record<CityKey, { name: string; heading: string; tagline: string; address: string; map: string; }> = {
  tumkur: {
    name: 'Tumakuru',
    heading: 'Lens Hut – Best Sunglasses, Premium Lenses & Designer Eyewear Store in Tumakuru',
    tagline: 'Discover Lens Hut, your go-to sunglasses store in Tumakuru offering the latest designer sunglasses, affordable eyeglasses, and premium contact lenses.',
    address: 'Lens Hut, MG Road, Tumakuru - 572101',
    map: 'https://maps.google.com/?q=Tumakuru'
  },
  hassan: {
    name: 'Hassan',
    heading: 'Lens Hut – Trusted Sunglasses & Eyewear Store in Hassan',
    tagline: 'Experience Lens Hut Hassan with branded sunglasses, stylish eyeglasses, and premium lenses at great prices.',
    address: 'Lens Hut, KR Puram, Hassan - 573201',
    map: 'https://maps.google.com/?q=Hassan'
  },
  bengaluru: {
    name: 'Bengaluru',
    heading: 'Lens Hut – Premium Sunglasses & Eyewear Boutique in Bengaluru',
    tagline: 'Discover your one-stop destination for branded sunglasses, stylish eyewear, and quality lenses in Bengaluru.',
    address: 'Lens Hut, Indiranagar, Bengaluru - 560038',
    map: 'https://maps.google.com/?q=Indiranagar+Bengaluru'
  }
}
