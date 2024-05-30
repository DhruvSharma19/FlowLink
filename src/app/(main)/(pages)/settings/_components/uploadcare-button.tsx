'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }

    const ctxProvider = ctxProviderRef.current
    if (ctxProvider) {
      ctxProvider.addEventListener('file-upload-success', handleUpload)
    }

    return () => {
      if (ctxProvider) {
        ctxProvider.removeEventListener('file-upload-success', handleUpload)
      }
    }
  }, [onUpload, router])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBKEY}
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.1/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton
