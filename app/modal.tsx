import { StyleSheet } from "react-native";

import { router } from "expo-router";
import { View } from "react-native";
import VideoPlayer from "react-native-media-console";

export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <VideoPlayer
        videoStyle={{ width: "100%", height: "100%" }}
        containerStyle={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://player.vimeo.com/external/1034571665.m3u8?s=badf12ea2d376708b461e523be3bb05a10099d5d&logging=false",
        }}
        onBack={() => router.back()}
      />
    </View>
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
