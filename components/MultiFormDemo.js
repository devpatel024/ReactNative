// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Animated, ActivityIndicator } from 'react-native';

// const UserForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//     address: '',
//   });
//   const [submittedData, setSubmittedData] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [showLoader, setShowLoader] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });

//     if (errors[field]) {
//       setErrors({ ...errors, [field]: '' });
//     }
//     setSuccessMessage('');
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const getPasswordStrength = () => {
//     const { password } = formData;

//     if (!password) return 'Weak';

//     if (
//       password.length >= 12 &&
//       /[A-Z]/.test(password) &&
//       /[a-z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     ) {
//       return 'Very Strong';
//     }

//     if (
//       password.length >= 8 &&
//       /[A-Z]/.test(password) &&
//       /\d/.test(password)
//     ) {
//       return 'Strong';
//     }

//     if (password.length >= 6) {
//       return 'Medium';
//     }

//     return 'Weak';
//   };

//   const handleSubmit = () => {
//     setShowLoader(true); // Show loader before validation
//     setTimeout(() => {
//       const newErrors = {};
//       if (!formData.name) {
//         newErrors.name = 'Name is required';
//       }
//       if (!formData.email) {
//         newErrors.email = 'Email is required';
//       } else if (!validateEmail(formData.email)) {
//         newErrors.email = 'Invalid email format';
//       }

//       if (Object.keys(newErrors).length > 0) {
//         setErrors(newErrors);
//         setShowLoader(false); // Hide loader on error
//         return;
//       }

//       setSubmittedData(formData);
//       setSuccessMessage('Form submitted successfully!');
//       setShowModal(true); // Show modal on success
//       setShowLoader(false); // Hide loader on success
//     }, 1000); // Simulating a delay for loader
//   };

//   const handleReset = () => {
//     setFormData({
//       username: '',
//       name: '',
//       email: '',
//       password: '',
//       address: '',
//     });
//     setSubmittedData(null);
//     setErrors({});
//     setSuccessMessage('');
//   };

//   // Animation for the form
//   Animated.timing(animation, {
//     toValue: 1,
//     duration: 500,
//     useNativeDriver: true,
//   }).start();

//   const animatedStyle = {
//     opacity: animation,
//     transform: [
//       {
//         scale: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0.8, 1],
//         }),
//       },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       {showLoader && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#007BFF" />
//         </View>
//       )}
//       <Animated.View style={[styles.form, animatedStyle]}>
//         <Text style={styles.formTitle}>User Form</Text>
//         <Text style={styles.label}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter username"
//           value={formData.username}
//           onChangeText={(value) => handleInputChange('username', value)}
//         />

//         <Text style={styles.label}>Name *</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter name"
//           value={formData.name}
//           onChangeText={(value) => handleInputChange('name', value)}
//         />
//         {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

//         <Text style={styles.label}>Email *</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter email"
//           value={formData.email}
//           onChangeText={(value) => handleInputChange('email', value)}
//           keyboardType="email-address"
//         />
//         {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter password"
//             secureTextEntry={!passwordVisible}
//             value={formData.password}
//             onChangeText={(value) => handleInputChange('password', value)}
//           />
//           <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//             <Text style={styles.toggle}>{passwordVisible ? 'Hide' : 'Show'}</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.passwordStrength}>Password Strength: {getPasswordStrength()}</Text>

//         <Text style={styles.label}>Address</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter address"
//           value={formData.address}
//           onChangeText={(value) => handleInputChange('address', value)}
//         />

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//             <Text style={styles.submitButtonText}>Submit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
//             <Text style={styles.resetButtonText}>Reset</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       <Modal
//         visible={showModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setShowModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>Form Submitted Successfully!</Text>
//             {submittedData && (
//               <View style={styles.submittedDataContainer}>
//                 <Text>Username: {submittedData.username}</Text>
//                 <Text>Name: {submittedData.name}</Text>
//                 <Text>Email: {submittedData.email}</Text>
//                 <Text>Password: {submittedData.password}</Text>
//                 <Text>Address: {submittedData.address}</Text>
//               </View>
//             )}
//             <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
//               <Text style={styles.modalButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1,
//   },
//   formTitle: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   form: {
//     width: '90%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   errorText: {
//     color: 'white',
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   toggle: {
//     marginLeft: 10,
//     color: '#007BFF',
//     fontWeight: 'bold',
//   },
//   passwordStrength: {
//     marginBottom: 10,
//     fontStyle: 'italic',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   submitButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     marginRight: 10,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   resetButton: {
//     backgroundColor: '#FF4D4D',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   resetButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '80%',
//   },
//   modalText: {
//     marginBottom: 20,
//     fontSize: 18,
//   },
//   submittedDataContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   modalButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default UserForm;

