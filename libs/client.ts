import { createClient } from 'microcms-js-sdk'
export const client = createClient({
    serviceDomain: 'ykzkiig4gy',
    apiKey: process.env.API_KEY || '',
})