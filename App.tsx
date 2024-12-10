import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function MyVideoPlayer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const player = useVideoPlayer(videoSource, (player) => {});

  const videoRef = useRef<VideoView>(null);
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  useEffect(() => {
    if (isModalVisible && videoRef.current) {
      videoRef.current.enterFullscreen();
      player.loop = true;
      player.play();
      videoRef.current.enterFullscreen();
    }
  }, [isModalVisible, videoRef.current]);

  return (
    <>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.contentContainer}>
          <VideoView
            ref={videoRef}
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
          <View style={styles.controlsContainer}>
            <Button
              title={isPlaying ? "Pause" : "Play"}
              onPress={() => {
                if (isPlaying) {
                  player.pause();
                } else {
                  player.play();
                }
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <Button title="Open Modal" onPress={() => setIsModalVisible(true)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
