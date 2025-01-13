/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast"

export function fileToDataURI(file: File) {
  const maxSizeInBytes = 5 * 1024 * 1024

  if (file && !file.type.startsWith("image/")) {
    // Valid image file selected, handle it here
    toast({
      variant: "destructive",
      description: "File selected is not an image"
    })

    return { error: true }
  }

  if (file && file.size >= maxSizeInBytes) {
    toast({
      variant: "destructive",
      description: "Selected image exceeds the maximum file size (5MB)"
    })

    return { error: true }
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const dataURI = reader.result
      resolve(dataURI)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}




import { useEffect } from "react"

export function useClickOutsideClose(ref: any, onClose: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose, ref])
}
