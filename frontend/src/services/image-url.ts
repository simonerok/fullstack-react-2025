import noImageUrl from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImageUrl;

  return url.replace("/media/games", "/media/crop/600/400/games");
};

export default getCroppedImageUrl;
