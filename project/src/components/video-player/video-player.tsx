import {ConnectedProps, connect} from 'react-redux';
import {setCurrentPlayerTime, setVideoDuration} from '../../store/action';
import {useEffect, useRef, useState} from 'react';

import LoadingScreen from '../loading-screen/loading-screen';
import {ThunkAppDispatch} from '../../types/action';

const PREVIEW_HOVER_TIMEOUT = 1000;
const PLAYER_INTERVAL_TIMEOUT = 1000;

type VideoPlayerProps = {
  previewImage: string;
  src: string;
  muted: boolean;
  isActive: boolean;
  className?: string;
  isFilmScreen?: boolean;
  isFullScreen?: boolean;
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFilmPlay(currentTime: number) {
    dispatch(setCurrentPlayerTime(currentTime));
  },
  onFilmChange(videoDuration: number) {
    dispatch(setVideoDuration(videoDuration));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & VideoPlayerProps;

function VideoPlayer({previewImage, src, muted, isActive, className, isFilmScreen, isFullScreen, onFilmPlay, onFilmChange}: ConnectedComponentProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const isPlaying = isActive;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => {
        if (videoRef.current !== null) {
          onFilmChange(videoRef.current.duration);
        }
      };
    }

    if (isFilmScreen && videoRef.current !== null) {
      onFilmChange(videoRef.current.duration);

      videoRef.current.play();
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [isFilmScreen, onFilmChange, src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (!isFilmScreen) {
      if (isPlaying) {
        const id = setTimeout(() => {
          if (videoRef.current !== null) {
            videoRef.current.play();
          }
        }, PREVIEW_HOVER_TIMEOUT);

        return () => clearTimeout(id);
      }

      videoRef.current.load();
    }

    if (isPlaying) {
      videoRef.current.play();
      const id = setInterval(() => {
        if (videoRef.current === null) {
          return;
        }
        onFilmPlay(videoRef.current.currentTime);
      }, PLAYER_INTERVAL_TIMEOUT);
      return () => clearTimeout(id);
    }

    videoRef.current.pause();


  }, [isFilmScreen, isPlaying, onFilmPlay]);

  useEffect(() => {
    if (videoRef.current !== null) {
      muted ? videoRef.current.muted = true : videoRef.current.muted = false;
    }
  }, [muted]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isFullScreen) {
      videoRef.current.requestFullscreen();
    }

  }, [isFullScreen]);

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <video className={className} src={src} ref={videoRef} poster={previewImage} onCanPlayThrough={() => setIsLoaded(true)} />
    </>
  );
}

export {VideoPlayer};
export default connector(VideoPlayer);
