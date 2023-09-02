import { transformYouTubeUrl } from '../../helpers';
import { YoutubeContainer } from './styles';

export function CustomIframe({ videoUrl }: { videoUrl: string }) {
  return (
    <YoutubeContainer
      id="ytplayer"
      src={transformYouTubeUrl(videoUrl)}></YoutubeContainer>
  );
}
