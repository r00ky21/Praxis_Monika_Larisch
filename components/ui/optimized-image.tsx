"use client"

import Image, { ImageProps } from "next/image"
import { useEffect, useState } from "react"

// Diese Komponente hilft bei der korrekten Anzeige von Bildern auf GitHub Pages
// mit berücksichtigung des basePath
export default function OptimizedImage(props: ImageProps) {
    const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)

    useEffect(() => {
        // Nur lokale Pfade anpassen, keine externen URLs
        if (typeof props.src === 'string' && props.src.startsWith('/')) {
            // In der Client-Komponente können wir den basePath für GitHub Pages manuell hinzufügen
            setImageSrc(`/Praxis_Monika_Larisch${props.src}`)
        } else {
            setImageSrc(props.src as string)
        }
    }, [props.src])

    if (!imageSrc) return null

    return <Image {...props} src={imageSrc} />
} 