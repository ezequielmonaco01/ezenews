import { View, StyleSheet } from "react-native";

const NewSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSkeleton} />
      <View style={styles.imageSkeleton} />
      <View style={styles.content}>
        <View style={styles.descriptionSkeleton} />
        <View style={styles.descriptionSkeletonShort} />
        <View style={styles.textSkeleton} />
        <View style={styles.textSkeletonShort} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
    flexDirection: "column",
    marginBottom: 10,
  },
  imageSkeleton: {
    width: "100%",
    height: 130,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleSkeleton: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    height: 20,
    backgroundColor: "rgba(224, 224, 224, 0.8)",
    borderRadius: 4,
    zIndex: 1,
  },
  content: {
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
  descriptionSkeleton: {
    height: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    width: "100%",
  },
  descriptionSkeletonShort: {
    height: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    width: "70%",
  },
  textSkeleton: {
    height: 14,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
    width: "100%",
  },
  textSkeletonShort: {
    height: 14,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
    width: "60%",
  },
});

export default NewSkeleton;
