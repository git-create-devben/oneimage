"use client";

import { useView } from "@/store/useView";
import { useEffect, useState } from "react";
import Column from "./Column";
import Grid from "./Grid";
import { useUnsplash } from "@/lib/unsplash";
import { useQuery } from "@/store/useQuery";
import Modal from "./Modal";

export default function Gallery() {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [selectedImage, setSelectedImage] = useState<UnsplashPhoto | null>(null);
  const { view } = useView();
  const { query } = useQuery();

  useEffect(() => {
    useUnsplash(query).then(setImages);
  }, [query]);

  const openModal = (image: UnsplashPhoto) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderView = () => {
    const ViewComponent = view === "Column" ? Column : Grid;
    return <ViewComponent images={images} openModal={openModal} />;
  };

  return (
    <main>
      <div className="">{renderView()}</div>
      <Modal isOpen={!!selectedImage} closeModal={closeModal} image={selectedImage} />
    </main>
  );
}
