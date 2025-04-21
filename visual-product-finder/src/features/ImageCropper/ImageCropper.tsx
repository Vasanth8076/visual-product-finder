import React, { useState, useRef, useEffect } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

type Props = {
  src: string;
  onComplete: (croppedBase64: string) => void;
  onCancel: () => void;
};

export const ImageCropper: React.FC<Props> = ({ src, onComplete, onCancel }) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  
  const imgRef = useRef<HTMLImageElement>(null);
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

  const getCroppedImg = () => {
    const canvas = document.createElement("canvas");
    const scaleX = imgRef.current!.naturalWidth / imgRef.current!.width;
    const scaleY = imgRef.current!.naturalHeight / imgRef.current!.height;

    canvas.width = completedCrop!.width!;
    canvas.height = completedCrop!.height!;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(
      imgRef.current!,
      completedCrop!.x! * scaleX,
      completedCrop!.y! * scaleY,
      completedCrop!.width! * scaleX,
      completedCrop!.height! * scaleY,
      0,
      0,
      completedCrop!.width!,
      completedCrop!.height!
    );

    return canvas.toDataURL("image/jpeg").split(",")[1];
  };

  const handleDone = () => {
    if (completedCrop && imgRef.current) {
      const croppedBase64 = getCroppedImg();
      onComplete(croppedBase64);
    }
  };

  return (
    <div style={{ background: "#000000aa", position: "fixed", inset: 0, zIndex: 1000 }}>
      <div style={{ margin: "5% auto", width: "80%",  padding: "20px" }}>
        <ReactCrop crop={crop} onChange={setCrop} onComplete={setCompletedCrop}>
          <img ref={imgRef} src={src} alt="Crop source" />
        </ReactCrop>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <button onClick={onCancel} style={{ marginRight: 10  }}>Cancel</button>
          <button onClick={handleDone} disabled={!completedCrop?.width || !completedCrop?.height}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
