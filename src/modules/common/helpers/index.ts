export function transformYouTubeUrl(inputUrl: string) {
	const regex =
	  /(?:youtube\.com\/(?:.*?(?:\?|&)v=|embed\/|v\/)|youtu\.be\/)([^#&?]+)/;
  
	// Use the regex to extract the video ID
	const match = inputUrl.match(regex);
  
	if (match && match[1]) {
	  const videoId = match[1];
  
	  // Construct the embedded video URL with autoplay
	  const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
	  return embeddedUrl;
	}
  
	return inputUrl;
  }