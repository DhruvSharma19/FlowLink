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
  const ctxProviderRef = useRef<LR.UploadCtxProvider | null>(null)

  useEffect(() => {
    const handleUpload = async (e: CustomEvent) => {
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
        pubkey="a1585912a580487f5b2d"
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
