import { motion } from "framer-motion";
import { Maximize2, Play, Image, Video } from "lucide-react";
import { CardImage } from "./Card";

export function MediaGallery({
  images = {},
  video = {},
  title = "Project Media",
  onImageClick,
}) {
  const mediaItems = [];

  Object.entries(images).forEach(([key, src]) => {
    if (src) {
      mediaItems.push({
        id: key,
        type: "image",
        src,
        alt: `${title} - ${key}`,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      });
    }
  });

  if (video.demo) {
    mediaItems.push({
      id: "demo",
      type: "video",
      src: video.demo,
      poster: video.poster,
      alt: `${title} - Demo Video`,
      label: "Demo Video",
    });
  }

  if (mediaItems.length === 0) {
    return (
      <section className="py-12" aria-labelledby="media-heading">
        <h3 id="media-heading" className="text-2xl font-bold text-text mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Main Project Photo", icon: Image },
            { label: "Hardware Photo", icon: Image },
            { label: "Circuit/Wiring Photo", icon: Image },
            { label: "Working Prototype Photo", icon: Image },
          ].map((item, i) => (
            <div key={i} className="relative">
              <CardImage src={null} placeholder={item.label} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" aria-labelledby="media-heading">
      <h3 id="media-heading" className="text-2xl font-bold text-text mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
            onClick={() => onImageClick?.(item)}
          >
            {item.type === "image" ? (
              <>
                <CardImage src={item.src} alt={item.alt} />
                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                    aria-label={`View ${item.label}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageClick?.(item);
                    }}
                  >
                    <Maximize2 className="w-5 h-5 text-text" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </div>
              </>
            ) : (
              <>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
                  {item.poster ? (
                    <img
                      src={item.poster}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <Video className="w-12 h-12 text-slate-400" />
                    </div>
                  )}
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label={`Play ${item.label}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageClick?.(item);
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-white/90 rounded-full"
                    >
                      <Play className="w-8 h-8 text-text" />
                    </motion.div>
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded">
                  {item.label}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function MediaLightbox({
  isOpen,
  onClose,
  currentItem,
  items,
  onNavigate,
}) {
  if (!isOpen || !currentItem) return null;

  const currentIndex = items.findIndex((item) => item.id === currentItem.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      <button
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("prev");
            }}
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("next");
            }}
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <motion.div
        className="max-w-5xl max-h-[90vh] w-full"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
      >
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        ) : (
          <video
            src={currentItem.src}
            poster={currentItem.poster}
            controls
            className="max-w-full max-h-[80vh] rounded-lg"
            autoPlay
            muted
          />
        )}
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentItem.label}
      </div>
    </motion.div>
  );
}