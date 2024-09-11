
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EventField from "@/components/EventField";
import AddItemModal from "@/components/AddItemModal"; // Adjust import path as necessary
import ActionButton from "@/components/ActionButton";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { EventItems, getItems } from "@/api/Items/getItems";
import {  useQuery } from "@tanstack/react-query";
import { getEvents } from "@/api/Events/getEvents";
import { addEventItems } from "@/api/Events/addEventItems";
import GetEventId from "@/components/GetEventId";

const addDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [previewItems, setPreviewItems] = useState<string[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [itemsSelected, setItemsSelected] = useState<string[]>([]);
  const { data: fetchedItems, isLoading, isError } = useQuery({
    queryKey: ["get-items"],
    queryFn: getItems,
  });

  const { data } = getEvents();
  const { mutate: addEventItem } = addEventItems();
  const router = useRouter();
  const EventID = GetEventId();

  useEffect(() => {
    if (fetchedItems) {
      setItems(fetchedItems);
    }
  }, [fetchedItems]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      const itemNames = selectedItems.map((item, index) => `${index + 1}. ${item.name}`);
      setPreviewItems(itemNames);
    } else {
      setPreviewItems([]);
    }
  }, [selectedItems]);

  const handleAddItems = (items: any[]) => {
    setSelectedItems((prevItems) => {
      const updatedItems = [...prevItems, ...items];
      setItemsSelected(updatedItems);
      return updatedItems;
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleBackPress = () => {
    router.push("/addDetail");
  };

  const addItemToEvent = async () => {
    try {
      const lastEvent = EventID;
      console.log("Last Event ID: ", lastEvent);

      if (itemsSelected.length === 0) {
        console.warn("No items selected to add");
        Alert.alert("Warning", "No items selected to add to the event.");
        return;
      }

       addEventItem(
        itemsSelected.map((item: any) => ({
          itemId: item.itemId,
          itemName: item.itemName,
          quantity: item.quantity,
          eventId: lastEvent,
        }))as any);

      router.replace("/(root)/(menu)/eventdetail");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleGenerateQuotation = () => {
    Alert.alert("Generate Quotation", "Generate Quotation button clicked!");
  };

  return (
    <>
      <View style={styles.DrawerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.DrawerText}>Add Event</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.keyboardAvoidingView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.form}>
              <View style={styles.previewContainer}>
                {previewItems.length > 0 && (
                  <EventField
                    title="Preview Items"
                    value={previewItems.join("\n")}
                    placeholder="No items selected"
                    editable={false}
                    multiline
                    numberOfLines={previewItems.length}
                    style={styles.previewItemsField}
                  />
                )}
                {previewItems.length === 0 && (
                  <ActionButton
                    label="Add Items"
                    onPress={() => setIsModalVisible(true)}
                    enabled={true}
                    style={styles.addButton}
                  />
                )}

                {previewItems.length > 0 && (
                  <View style={styles.buttonContainer}>
                    <ActionButton
                      label="Add More"
                      onPress={() => setIsModalVisible(true)}
                      enabled={true}
                      style={styles.leftButton}
                    />
                    <ActionButton
                      label="Generate Quotation"
                      onPress={handleGenerateQuotation}
                      enabled={true}
                      style={styles.rightButton}
                    />
                  </View>
                )}
              </View>
            </View>
            <View style={styles.footer}>
              <ActionButton
                label="Back"
                onPress={handleBackPress}
                enabled={true}
                style={styles.footerButton}
              />
              <ActionButton
                label="Submit"
                onPress={addItemToEvent}
                enabled={true}
                style={styles.footerButton}
              />
            </View>
          </ScrollView>
        </View>

        <AddItemModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          items={items}
          onAddItem={handleAddItems}
        />
        {isLoading && <Text>Loading items...</Text>}
        {isError && <Text>Error fetching items</Text>}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#f8f8f8",
  },
  footerButton: {
    width: "45%",
  },
  customerDetailsField: {
    height: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  previewContainer: {
    width: "100%",
    marginBottom: 20,
  },
  previewItemsField: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    width: "95%",
    marginRight: 70,
    padding: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  leftButton: {
    width: "40%",
    marginLeft: 25,
  },
  rightButton: {
    width: "40%",
  },
  addButton: {
    padding: 4,
    maxWidth: 100,
    marginLeft: 25,
  },
  DrawerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 25,
    borderBottomWidth: 0.5,
  },
  DrawerText: {
    fontSize: 20,
    fontFamily: "MontserratMedium",
    marginLeft: 30,
  },
});

export default addDetail;
