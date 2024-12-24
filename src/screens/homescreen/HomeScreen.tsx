import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor:'red',
    }}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})


// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   PanResponder,
// } from "react-native";
// import Svg, { Text as SvgText } from "react-native-svg";
// import { ColorPicker } from "react-native-color-picker";

// const EditableCanvas = () => {
//   const { width: screenWidth } = Dimensions.get("window");
//   const canvasHeight = 400;

//   const [textItems, setTextItems] = useState([
//     {
//       id: 1,
//       text: "Editable Text",
//       x: 50,
//       y: 100,
//       fontSize: 20,
//       color: "#000000",
//     },
//   ]);

//   const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
//   const [colorPickerVisible, setColorPickerVisible] = useState(false);

//   const panResponderRef = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (selectedTextId !== null) {
//           setTextItems((prevItems) =>
//             prevItems.map((item) =>
//               item.id === selectedTextId
//                 ? {
//                     ...item,
//                     x: Math.max(0, Math.min(screenWidth - 40, item.x + gestureState.dx)),
//                     y: Math.max(0, Math.min(canvasHeight, item.y + gestureState.dy)),
//                   }
//                 : item
//             )
//           );
//         }
//       },
//       onPanResponderRelease: () => {
//         // Reset any necessary states when dragging ends
//       },
//     })
//   ).current;

//   const handleAddText = () => {
//     const newTextItem = {
//       id: Date.now(),
//       text: "New Text",
//       x: 50,
//       y: 50,
//       fontSize: 20,
//       color: "#000000",
//     };
//     setTextItems([...textItems, newTextItem]);
//     setSelectedTextId(newTextItem.id);
//   };

//   const handleDeleteText = () => {
//     if (selectedTextId !== null) {
//       setTextItems(textItems.filter((item) => item.id !== selectedTextId));
//       setSelectedTextId(null);
//     }
//   };

//   const updateTextProperty = (property: string, value: any) => {
//     if (selectedTextId !== null) {
//       setTextItems(
//         textItems.map((item) =>
//           item.id === selectedTextId ? { ...item, [property]: value } : item
//         )
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Svg
//         width={screenWidth - 40}
//         height={canvasHeight}
//         style={styles.svgCanvas}
//         {...panResponderRef.panHandlers}
//         onTouchStart={(e) => {
//           const { locationX, locationY } = e.nativeEvent;
//           const tappedItem = textItems.find(
//             (item) =>
//               locationX >= item.x - 50 &&
//               locationX <= item.x + 100 &&
//               locationY >= item.y - 30 &&
//               locationY <= item.y + 30
//           );
//           if (tappedItem) {
//             setSelectedTextId(tappedItem.id);
//           } else {
//             setSelectedTextId(null);
//           }
//         }}
//       >
//         {textItems.map((item) => (
//           <SvgText
//             key={item.id}
//             x={item.x}
//             y={item.y}
//             fontSize={item.fontSize}
//             fill={item.color}
//             textAnchor="middle"
//           >
//             {item.text}
//           </SvgText>
//         ))}
//       </Svg>

//       {selectedTextId !== null && (
//         <View style={styles.editor}>
//           <TextInput
//             style={styles.input}
//             placeholder="Edit text"
//             value={textItems.find((item) => item.id === selectedTextId)?.text}
//             onChangeText={(text) => updateTextProperty("text", text)}
//           />

//           <View style={styles.row}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => setColorPickerVisible(true)}
//             >
//               <Text style={styles.buttonText}>Change Color</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => updateTextProperty("fontSize", 24)}
//             >
//               <Text style={styles.buttonText}>Increase Size</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => updateTextProperty("fontSize", 16)}
//             >
//               <Text style={styles.buttonText}>Decrease Size</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       <View style={styles.toolbar}>
//         <TouchableOpacity style={styles.button} onPress={handleAddText}>
//           <Text style={styles.buttonText}>Add Text</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleDeleteText}>
//           <Text style={styles.buttonText}>Delete Text</Text>
//         </TouchableOpacity>
//       </View>

//       {colorPickerVisible && (
//         <ColorPicker
//           onColorSelected={(color) => {
//             updateTextProperty("color", color);
//             setColorPickerVisible(false);
//           }}
//           style={styles.colorPicker}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   svgCanvas: {
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   editor: {
//     marginBottom: 20,
//   },
//   toolbar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   colorPicker: {
//     height: 300,
//   },
// });

// export default EditableCanvas;
