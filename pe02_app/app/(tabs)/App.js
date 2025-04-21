import React from 'react';
import { View,Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/53064240?s=200&v=4',
        }}
        style = {{width: 200, height: 150}}
      />

      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        marginTop:20,
      }}>Which course did you like?</Text>
      
      <TextInput style={{
           borderWidth: 1,
           borderColor: '#d3d3d3',
           padding: 10,
           marginVertical: 20,
      }} 
      placeholder="ex. CS624" />

      <View style={styles.subHeading}>
        <Text style={styles.subHeadingText}>Core Requirements (24 credits)</Text>
      </View>
      <Text style={styles.course}>CS 504 Software Engineering</Text>
      <Text style={styles.course}>CS 605 Programming Computing</Text>
      <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
      <Text style={styles.course}>CS 533 Computer Architecture</Text>
      <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>CS 510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>CS 620 Machine Learning & Deep Learning</Text>
      
      <View style={styles.subHeading}>
        <Text style={styles.subHeadingText}>Depth of Study Courses (12 credits)</Text>
      </View>
      <Text style={styles.course}>CS624 Full-Stack Development I</Text>
      <Text style={styles.course}>CS628 Full-Stack Development II</Text>

      <View style={styles.subHeading}>
        <Text style={styles.subHeadingText}>Capstone Course (4 credits)</Text>
      </View>
      <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  subHeading: {
    backgroundColor: 'yellow',
    padding: 10,
    marginTop: 20,
    width: 350,
    height: 50,
  },

  subHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  course: {
    fontSize: 16,
    marginVertical: 6,
  },

});