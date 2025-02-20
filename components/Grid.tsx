import TiltedCard from "./Tcard";

const Grid = ({ images, openModal }: { images: UnsplashPhoto[]; openModal: (image: UnsplashPhoto) => void }) => {
   return (
      <main className="p-4">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images?.map((image) => (
               <div key={image.id} className="cursor-pointer relative w-full h-[200px] overflow-hidden hover:scale-110 transition-all" onClick={() => openModal(image)}>
                  {/* <Image
                     src={image.urls.regular}
                     alt={image.alt_description || "Unsplash image"}
                     fill
                     className="object-cover w-full h-full rounded-lg"
                     sizes="100"
                     priority
                  /> */}
                  <TiltedCard
                     imageSrc={image.urls.regular}
                     altText={image.alt_description}
                     captionText={image.alt_description}
                     containerHeight="300px"
                     containerWidth="300px"
                     imageHeight="300px"
                     imageWidth="300px"
                     rotateAmplitude={12}
                     scaleOnHover={1.2}
                     showMobileWarning={false}
                     showTooltip={true}
                     displayOverlayContent={true}
                     // overlayContent={
                     //    <p className="tilted-card-demo-text">
                     //      {image.user.name}
                     //    </p>
                     // }
                  />

               </div>
            ))}
         </div>
      </main>
   );
};

export default Grid;
