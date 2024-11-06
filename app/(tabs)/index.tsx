import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { EnvelopeIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={styles.wrapImage}>
            <Image
              style={styles.image}
              source={require("@/assets/images/dummy.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 12, color: Colors["light"].slate800 }}>
              Hello 👋
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: Colors["light"].slate800,
                marginTop: 4,
              }}>
              Singgih Budi Purnadi
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <EnvelopeIcon size={24} color={Colors["light"].slate400} />
          <View
            style={{
              position: "absolute",
              right: -8,
              top: -8,
              backgroundColor: "red",
              borderRadius: 999,
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
            }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
              99+
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors["light"].brand500,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  notification: {
    padding: 8,
    borderColor: Colors["light"].slate200,
    borderWidth: 1,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#fff",
  },
});
