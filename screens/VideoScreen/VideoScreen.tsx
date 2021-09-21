import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  
} from "react-native";

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import styles from "./styles";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";

import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";

import { AntDesign } from "@expo/vector-icons";
import comments from "../../assets/data/comments.json";
import VideoComments from "../../components/VideoComments";
import VideoComment from "../../components/VideoComment";

const VideoScreen = () => {
  const commentsSheetRef = useRef<BottomSheetModal>(null);

  const openComments = () => {
    commentsSheetRef.current?.present();
  };

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name}
            <Text> </Text>
            {/* {viewsString} */}
            {video.views} {video.createdAt}
          </Text>
        </View>

        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="export" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderColor: "#3d3d3d",
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        >
          <Image style={styles.avatar} source={{ uri: video.user.image }} />

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {video.user.name}
            </Text>
            <Text style={{ color: "grey", fontSize: 18 }}>
              {video.user.subscribers} subscribers
            </Text>
          </View>
          <Text
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Subscribe
          </Text>
        </View>

        {/* comments */}

        <Pressable
          onPress={openComments}
          style={{ padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: "white" }}>Comments 333</Text>
          <VideoComment comment={comments[0]} />
          {/* comment component */}
        </Pressable>

        {/* All comments */}
        <BottomSheetModal
          ref={commentsSheetRef}
          snapPoints={["70%"]}
          index={0}
          backgroundComponent={({ style }) => (
            <View style={[style, { backgroundColor: "#4d4d4d" }]} />
          )}
        >
          <VideoComments />
        </BottomSheetModal>
      </View>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

{
  /* <FlatList
  data={videos}
  renderItem={({ item }) => <VideoListItem video={item} />}
  ListHeaderComponent={VideoScreen}
/>; */
}

export default VideoScreenWithRecommendation;
