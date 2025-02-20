"use client";

import { useView } from "@/store/useView";
import { useState } from "react";
import Column from "./Column";
import Grid from "./Grid";
import { useUnsplash } from "@/hook/unsplash";
import { useQuery } from "@/store/useQuery";
import Modal from "./Modal";

const Gallery = () => {
  const { view } = useView();
  const { query } = useQuery();
  const { images, loading, error } = useUnsplash(query); // ✅ Correct usage

  const [selectedImage, setSelectedImage] = useState<UnsplashPhoto | null>(null);

  const openModal = (image: UnsplashPhoto) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderView = () => {
    const ViewComponent = view === "Column" ? Column : Grid;
    return <ViewComponent images={images} openModal={openModal} />;
  };

  return (
    <main>
      {loading && <p>Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <div>{renderView()}</div>}
      <Modal isOpen={!!selectedImage} closeModal={closeModal} image={selectedImage} />
    </main>
  );
};

export default Gallery;
