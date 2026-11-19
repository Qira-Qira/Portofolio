import { CERTIFICATE_IMAGES } from '../data/portfolioData';

interface CertificateImageGalleryProps {
  limit?: number;
}

export function CertificateImageGallery({ limit }: CertificateImageGalleryProps) {
  const certificates = limit ? CERTIFICATE_IMAGES.slice(0, limit) : CERTIFICATE_IMAGES;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certificates.map((certificate) => (
        <figure
          key={certificate.id}
          className="overflow-hidden rounded-xl border-2 border-[#18181A] bg-white shadow-[4px_4px_0px_#18181A]"
        >
          <div className="aspect-[4/3] bg-[#FAF8F3] p-3 sm:p-4">
            <img
              src={certificate.src}
              alt={certificate.title}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <figcaption className="border-t-2 border-[#18181A] px-4 py-3 text-xs font-mono-code font-bold uppercase tracking-wide text-[#18181A]">
            {certificate.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
