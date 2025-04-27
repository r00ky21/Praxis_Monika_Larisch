"use client"

import Image, { ImageProps, StaticImageData } from "next/image"
import { useEffect, useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder'> {
    blurPlaceholder?: boolean;
}

// Diese Komponente hilft bei der korrekten Anzeige von Bildern auf GitHub Pages
// mit berücksichtigung des basePath und verbesserten Performance-Optimierungen
export default function OptimizedImage({ blurPlaceholder = false, loading = "lazy", ...props }: OptimizedImageProps) {
    const [imageSrc, setImageSrc] = useState<string | StaticImageData | undefined>(undefined)
    const isProd = process.env.NODE_ENV === 'production'

    useEffect(() => {
        // Nur lokale Pfade anpassen, keine externen URLs
        if (typeof props.src === 'string' && props.src.startsWith('/')) {
            // In der Produktion (GitHub Pages) den basePath hinzufügen, in der Entwicklung nicht
            setImageSrc(isProd ? `/Praxis_Monika_Larisch${props.src}` : props.src)
        } else {
            setImageSrc(props.src as string | StaticImageData)
        }
    }, [props.src, isProd])

    if (!imageSrc) return null

    // Wenn priority gesetzt ist, sollte kein loading="lazy" verwendet werden
    const shouldUseLoading = !props.priority ? loading : undefined

    // Stelle sicher, dass sizes vorhanden ist, wenn responsive
    const imageProps = {
        ...props,
        src: imageSrc,
        loading: shouldUseLoading,
        // Qualität für verbesserte Ladezeit optimieren
        quality: props.quality || 80,
        // Standardgröße setzen, wenn nicht anders angegeben
        sizes: props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
        // Placeholder-Konfiguration
        placeholder: blurPlaceholder ? "blur" as const : undefined,
        blurDataURL: blurPlaceholder ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3C/svg%3E" : undefined,
    }

    return <Image {...imageProps} />
} 