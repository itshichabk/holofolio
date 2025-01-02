"use client";

export default function Camera() {
  let mediaDevices = navigator.mediaDevices;

  return (
    <div>
        <video className="h-96 w-full" id="vid"/>
        <button onClick={() => {
            let video = document.getElementById("vid");

            mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
        }}>CLICK ME</button>
    </div>
  )
}
