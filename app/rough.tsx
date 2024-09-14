import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ActionButton from '@/components/ActionButton';
import { getItems } from '@/api/Items/getItems';
import { useMutation } from '@tanstack/react-query';
import { addEventItems } from '@/api/Events/addEventItems';
import { useGlobalSearchParams } from 'expo-router';
import { generateQuotation } from '@/api/Events/generateQuotation';

const rough = () => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>({});

  const { data } = getItems();

  const handleSelectItem = (item: any) => {
    setSelectedItems((prev) => {
      const isItemSelected = prev.some((selectedItem) => selectedItem.itemId === item.itemId);

      if (isItemSelected) {
        // Deselect item and remove it from the selected items list
        setItemQuantities((prevQuantities) => {
          const updatedQuantities = { ...prevQuantities };
          delete updatedQuantities[item.itemId]; // Remove quantity for deselected item
          return updatedQuantities;
        });
        return prev.filter((selectedItem) => selectedItem.itemId !== item.itemId);
      }

      // Select item and add it to the selected items list
      return [...prev, item];
    });
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(1, (prevQuantities[itemId] || 1) + change),
    }));
  };

  const renderItem = (item: any) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.itemId === item.itemId);

    return (
      <TouchableOpacity
        key={item.itemId}
        style={[styles.itemContainer, isSelected && styles.selectedItem]}
        onPress={() => handleSelectItem(item)}>
        <Image source={{ uri: item.itemImagePath }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.itemName}</Text>
        <Text style={styles.itemPrice}>Price: ₹{item.itemCost}</Text>

        {isSelected && (
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.itemId, -1)}
              style={styles.counterButton}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{itemQuantities[item.itemId] || 1}</Text>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.itemId, 1)}
              style={styles.counterButton}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const { mutate: addQuotation} = generateQuotation();
  const handleQuotation = () => {
    // Use the mutation
    

    // Iterate over the selected items and call the API for each item
    selectedItems.forEach((item: any) => {
      const { KeyId } = useGlobalSearchParams();

      addQuotation( {
        itemId: item.itemId,
        itemName: item.itemName,
        quantity: itemQuantities[item.itemId] || 1, // Default to 1 if quantity is not available
        eventId: Number(KeyId), // Replace with the actual event ID, should be dynamic
      },
    {
        onSuccess: (data: any) => {
          console.log('Quotation generated successfully:', data);
          // You can handle any success actions here, like showing a success message
        },
        onError: (error: any) => {
          console.error('Error generating quotation:', error);
          // Handle error (e.g., show an error message)
        },
    }
    )});

  const SubmitEvents = () => {
    // logic for submitting selected items
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.itemsGrid}>{data?.map((item: any) => renderItem(item))}</View>
      </ScrollView>

      {selectedItems.length > 0 && (
        <View style={styles.selectionContainer}>
          <Text style={styles.selectedItemsText}>Selected Items:</Text>
          <View style={styles.selectedItemsBox}>
            {selectedItems.map((item) => (
              <Text key={item.itemId}>
                {item.itemName} - {itemQuantities[item.itemId] || 1}x
              </Text>
            ))}
          </View>

          <View style={styles.buttonsContainer}>
            <ActionButton
              label="Generate Quotation"
              onPress={handleQuotation}
              enabled={true}
              style={styles.leftButton}
            />
            <ActionButton
              label="Submit"
              onPress={SubmitEvents}
              enabled={true}
              style={styles.rightButton}
            />
          </View>
        </View>
      )}
    </View>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  selectedItem: {
    borderColor: 'blue',
  },
  itemImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  counterButton: {
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  selectionContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  selectedItemsText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedItemsBox: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftButton: {
    width: '45%',
  },
  rightButton: {
    width: '45%',
  },
});

export default rough;