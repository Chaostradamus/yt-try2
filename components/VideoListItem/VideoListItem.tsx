import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
};

const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;
  //   const minutes = Math.floor(video.duration / 60);
  //   const seconds = video.duration % 60;

  //   let viewsString = video.views.toString();
  //   if (video.views > 1_000_000) {
  //     viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  //   } else if (video.views > 1_000) {
  //     viewsString = (video.views / 1_000).toFixed(1) + "k";
  //   }

  const navigation = useNavigation();

  const openVideoPage = () => {
    navigation.navigate("VideoScreen", { id: video.id });
  };
  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      {/* {thumbnail} */}

      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {video.duration}
            {/* {minutes}
            :{seconds < 10 ? "0" : ""}
            {seconds} */}
          </Text>
        </View>
      </View>

      {/* {titlerow} */}
      <View style={styles.titleRow}>
        {/* {avatar} */}
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />

        {/* {middle container} */}
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name}
            {/* {viewsString} */}
            {video.views} {video.createdAt}
          </Text>
        </View>

        {/* {icon} */}
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </Pressable>
  );
};

export default VideoListItem;
