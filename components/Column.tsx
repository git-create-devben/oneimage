import TiltedCard from "./Tcard";

const Column = ({ images, openModal }: { images: UnsplashPhoto[]; openModal: (image: UnsplashPhoto) => void }) => {
    return (
        <main className="p-4">
            <div className="flex flex-col gap-4">
                {images?.map((image) => (
                    <div key={image.id} className=" cursor-pointer relative w-full h-[300px] overflow-hidden" onClick={() => openModal(image)}>

                        <TiltedCard
                            imageSrc={image.urls.regular}
                            altText={image.alt_description}
                            captionText={image.alt_description}
                            containerHeight="300px"
                            containerWidth="100%"
                            imageHeight="300px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        //  overlayContent={
                        //     <p className="tilted-card-demo-text">
                        //       {image.user.name}
                        //     </p>
                        //  }
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Column;
