import Layout from '../../../components/Layout'
import {useRouter }from 'next/router'
import { useEffect } from 'react'

export default function ClientByCode() {
    const router = useRouter()
    
    useEffect(() => {
        console.log(router.query)
    })
    return (
        <Layout title="Dynamic Navigation">
            <div>Branch = {router.query.branch}</div>
            <div>Code = {router.query.code}</div>
        </Layout>
    )
}