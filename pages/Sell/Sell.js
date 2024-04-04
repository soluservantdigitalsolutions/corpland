import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from "../../components/ImageBackground/BackgroundImage";
import Card from "../../components/Cards/Card";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Category 1", "Category 2", "Category 3"]; //

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <BackgroundImage>
          <View className="p-5">
            <Card>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCategory(itemValue)
                }>
                {categories.map((category, index) => (
                  <Picker.Item
                    key={index}
                    label={category}
                    value={category}
                  />
                ))}
              </Picker>
            </Card>
          </View>
        </BackgroundImage>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Sell;
