// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput, Form } from 'react-native';
// import CustomForm from './components/CustomForm';
// export default function Sign() {
//   const [name, setName] = useState('mati');
//   const [age, setAge] = useState('27');
//   const clickHandler = () => {
//     setName(
//       <View>
//         <Text></Text>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>
//         Anything is possible
//       </Text>
//       <Text style={styles.bodyAbout}>
//         {' '}
//         Sign up and let us help you improve your health.
//       </Text>

//       <Text style={styles.login}>
//       <TextInput />
//       <View style={styles.customerButtonContainer}>
//         <Button title="Login" />
//       </View>
//       <Text>
//         Username:{' '}
//         <TextInput
//           placeholder="Full Name..."
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       <Text>
//         Password:{' '}
//         <TextInput
//           placeholder="********"
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       <View style={styles.storeButtonContainer}>
//         <Button title="register" onPress={clickHandler} />
//       </View>
//       <Text>
//         Username:{' '}
//         <TextInput
//           placeholder="Full Name..."
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       <Text>
//         Cell:{' '}
//         <TextInput
//           placeholder="000-000-0000"
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       <Text>
//         Email:{' '}
//         <TextInput
//           placeholder="example@GWT.com"
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       <Text>
//         Password:{' '}
//         <TextInput
//           placeholder="*****"
//           onChangeText={(Value) => setName(Value)}
//           style={styles.inputField}
//         />
//       </Text>
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

