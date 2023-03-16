import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string

export const BASE_PATH = publicRuntimeConfig.basePath

// microCMS
export const API_URL = process.env.NEXT_PUBLIC_API_URL as string
export const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string
export const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string

// emailjs
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
export const EMAILJS_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
export const EMAILJS_PTEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string

// supabase
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
export const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
export const SUPABASE_JWT = process.env.SUPABASE_JWT as string

// posts
let perPage = 0
if (typeof process.env.NEXT_PUBLIC_PER_PAGE === 'string') {
  perPage = Number(process.env.NEXT_PUBLIC_PER_PAGE)
}
export const PER_PAGE = perPage
