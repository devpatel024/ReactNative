// import React from 'react';
// import { StyleSheet, View, Image } from 'react-native';

// const myImage = require('./assets/Ashoka_Chakra.png'); // Replace with your image

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.topSection} />
//       <View style={styles.middleSection}>
//         <Image source={myImage} style={styles.image} />
//       </View>
//       <View style={styles.bottomSection} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topSection: {
//     flex: 1,
//     backgroundColor: 'orange',
//   },
//   middleSection: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomSection: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
// });





// // // import { StatusBar } from 'expo-status-bar';
// // // import { StyleSheet, Text, View, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';
// // // import Headerdemo from './components/Headerdemo';
// // // import Content from './components/content';
// // // import Footer from './components/footer';
// // // export default function App() {
// // //   // const handlepress = (msg) => {
// // //   //   alert(msg);
// // //   // };

// // //   return (
// // //     <View style={styles.container}>

// // //       <Headerdemo />
// // //       {/* <Content />
// // //       <Footer /> */}
// // //       {/* <View style={styles.mainBox}>
// // //         <View style={styles.child1}>
// // //           <Text style={styles.Text}>Hello World!!!</Text>
// // //         </View>
// // //         <View style={styles.child2}>
// // //           <Pressable
// // //             style={({ pressed }) => [
// // //               {
// // //                 backgroundColor: pressed ? 'yellow' : 'white',
// // //                 transform: pressed ? [{ scale: 0.8 }] : [{ scale: 1 }],
// // //                 opacity: pressed ? 0.8 : 1,
// // //                 justifyContent: 'center',
// // //                 alignItems: 'center',
// // //                 height: 50,
// // //                 width: 150,
// // //               },
// // //               styles.button,
// // //             ]}
// // //             onPress={() => alert('button pressed')}
// // //           >
// // //             <Text style={[styles.Text, { color: 'black' }]}>Enter</Text>
// // //           </Pressable>
// // //         </View>
// // //       </View> */}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     justifyContent:'space-between',
// // //   },
// // //   // mainBox: {
// // //   //   width: 500,
// // //   //   height: 500,
// // //   //   backgroundColor: 'red',
// // //   //   justifyContent: 'center',
// // //   //   alignItems: 'center',
// // //   //   gap: 10,
// // //   // },
// // //   // Text: {
// // //   //   color: '#000',
// // //   //   fontSize: 20, // Add this for better readability
// // //   // },
// // //   // child1: {
// // //   //   width: 300,
// // //   //   height: 150,
// // //   //   backgroundColor: 'yellow',
// // //   //   justifyContent: 'center',
// // //   //   alignItems: 'center',
// // //   // },
// // //   // child2: {
// // //   //   width: 150,
// // //   //   height: 150,
// // //   //   backgroundColor: 'purple',
// // //   //   justifyContent: 'center',
// // //   //   alignItems: 'center',
// // //   // },
// // // });





// // // // import React from 'react';
// // // // import { StyleSheet, View, Image } from 'react-native';

// // // // const myImage = require('./assets/Ashoka_Chakra.png');

// // // // export default function App() {
// // // //   return (
// // // //     <View style={{ flex: 1 }}>
// // // //       <View style={{
// // // //         flex: 1,
// // // //         backgroundColor: 'orange'
// // // //       }}></View>
// // // //       <View style={{
// // // //         flex: 1,
// // // //         backgroundColor: "white",
// // // //         justifyContent: 'center',
// // // //         alignItems: 'center',
// // // //       }}>
// // // //         <Image source={'./assets/Ashoka_Chakra.png'} style={{ width: 150, height: 150 }} />
// // // //       </View>
// // // //       <View style={{
// // // //         flex: 1,
// // // //         backgroundColor: 'green'
// // // //       }}></View>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({

// // // // });


// // // import { StyleSheet, View } from 'react-native';
// // // import Header from './components/Header';
// // // import Content from './components/Content';
// // // import Footer from './components/Footer';

// // // export default function App() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Header />
// // //       <Content />
// // //       <Footer />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     justifyContent: 'space-between',
// // //   },
// // // });









// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const App = () => {
// //   return (
// //     <View style={styles.wrapper}>
// //       <View style={styles.container}>
// //         <View style={styles.box}>
// //           <View style={styles.part1}>
// //             <img src="./assets/Ashoka_Chakra.png" width={"80px"} height={"80px"} alt="" />
// //           </View>
// //           <View style={styles.part2}>
// //             <h3 style={{
// //               marginTop: "25px",
// //               marginBottom: "0px",
// //             }}>John Doe</h3>
// //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem nobis optio.</p>
// //             <View style={{
// //               display: 'flex',
// //               flexDirection: 'row',
// //               gap:"1rem",
// //             }}>
// //               <button style={{width:"40%",backgroundColor:'blue',color:'white',border:"0",padding:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",cursor:"pointer",}}>Follow</button>
// //               <button style={{width:"40%",backgroundColor:'blue',color:'white',border:"0",padding:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",cursor:"pointer",}}>Manage</button>
// //             </View>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   wrapper: {
// //     width: "100vw",
// //     height: "100vh",
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   container: {
// //     width: "300px",
// //     height: "500px",
// //     backgroundColor: "#ededed",
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   box: {
// //     width: "280px",
// //     height: "200px",
// //     backgroundColor: "#d3d0d1",
// //     marginTop: "10px",
// //     display: 'flex',
// //     flexDirection: 'row',
// //   },
// //   part1: {
// //     width: "30%",
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   part2: {
// //     width: "70%",
// //     paddingLeft: "15px",
// //   },
// // });


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// import { StyleSheet, View } from 'react-native';
// import TextInputDemo from './components/TextInputDemo';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <TextInputDemo />
//       <Text>Hello World!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'space-between',
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import TextInputDemo from './components/TextInputDemo';
// import MultiFormDemo from './components/MultiFormDemo.js';
import MultiFormDemoClass from './components/MultiFormDemoClass.js';



const App = () => {
  return (
    <View style={styles.container}>
      {/* <TextInputDemo></TextInputDemo> */}
      <MultiFormDemoClass></MultiFormDemoClass>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  }
})