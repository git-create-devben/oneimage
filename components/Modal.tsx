"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: UnsplashPhoto | null;
}

export default function Modal({ isOpen, closeModal, image }: ModalProps) {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{image.alt_description || "Unsplash Image"}</DialogTitle>
        </DialogHeader>
        <div key={image.id} className="relative w-full h-[200px] overflow-hidden " >
            <Image
              src={image.urls.regular}
              alt={image.alt_description || "Unsplash image"}
              fill
              className="object-cover w-full h-full rounded-lg"
              sizes="100"
              priority
            />
          </div>
        <p className="text-sm text-gray-500">Photographer: {image.user.name}</p>
        {/* <DialogClose className="absolute top-2 right-2">✕</DialogClose> */}
      </DialogContent>
    </Dialog>
  );
}
