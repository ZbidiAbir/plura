'use client'
import UploadMediaForm from '@/components/forms/upload-media'
import CustomModal from '@/components/global/custom-modzl'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import React from 'react'

type Props = {
    subaccountId: string
}

const MediaUploadButton = ({ subaccountId }: Props) => {
    const { isOpen, setOpen, setClose } = useModal()

    return (
        <Button
            onClick={() => {
                setOpen(
                    <CustomModal
                        title="Upload Media"
                        subheading="Upload a file to your media bucket"
                    >
                        <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
                    </CustomModal>
                )
            }}
        >
            Upload
        </Button>
    )
}

export default MediaUploadButton