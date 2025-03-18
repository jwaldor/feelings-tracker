'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

export function RedirectIfAuthenticated() {
    const router = useRouter()
    const { isSignedIn } = useUser()

    useEffect(() => {
        if (isSignedIn) {
            router.push('/input')
        }
    }, [isSignedIn, router])

    return null
} 