import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView,ImageBackground } from 'react-native';

const matchDetails = {
  match: 'BAN vs IND',
  date: 'October 1, 2024',
  venue: 'Sher-e-Bangla National Stadium, Dhaka',
  status: 'Live',
  toss: 'India won the toss and chose to bat',
  score: {
    team1: 'India',
    team2: 'Bangladesh',
    team1Score: '250/7',
    team2Score: '120/3 (15.4)',
  },
};

const teamLineup = {
  india: [
    'Rohit Sharma (C)',
    'Virat Kohli',
    'KL Rahul',
    'Shubman Gill',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Jasprit Bumrah',
    'Kuldeep Yadav',
    'Mohammed Shami',
    'Axar Patel',
    'Suryakumar Yadav',
  ],
  bangladesh: [
    'Shakib Al Hasan (C)',
    'Litton Das',
    'Mushfiqur Rahim',
    'Tamim Iqbal',
    'Mustafizur Rahman',
    'Mehidy Hasan',
    'Taskin Ahmed',
    'Shoriful Islam',
    'Afif Hossain',
    'Ebadot Hossain',
    'Mahmudullah',
  ],
};

export default function banvsind() {
  return (
    <ImageBackground
    source={{ uri: 'https://wallpapers.com/images/featured/iphone-wltnz5o1xymafqmo.jpg' }} // Replace with your background image URL
    style={styles.backgroundImage}
  >
    <ScrollView style={styles.container}>
      {/* Match Details */}
      <View style={styles.matchInfo}>
        <Text style={styles.title}>{matchDetails.match}</Text>
        <Text style={styles.subtitle}>Date: {matchDetails.date}</Text>
        <Text style={styles.subtitle}>Venue: {matchDetails.venue}</Text>
        <Text style={styles.status}>Status: {matchDetails.status}</Text>
        <Text style={styles.toss}>Toss: {matchDetails.toss}</Text>
      </View>

      {/* Scorecard */}
      <View style={styles.scorecard}>
        <Text style={styles.scoreTitle}>Scorecard</Text>
        <Text style={styles.score}>India: {matchDetails.score.team1Score}</Text>
        <Text style={styles.score}>Bangladesh: {matchDetails.score.team2Score}</Text>
      </View>

      {/* Team Lineups */}
      <View style={styles.lineupContainer}>
        <Text style={styles.lineupTitle}>India Lineup</Text>
        <FlatList
          data={teamLineup.india}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.player}>{item}</Text>
          )}
        />
      </View>

      <View style={styles.lineupContainer}>
        <Text style={styles.lineupTitle}>Bangladesh Lineup</Text>
        <FlatList
          data={teamLineup.bangladesh}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.player}>{item}</Text>
          )}
        />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    marginTop:90,
  },
  matchInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  toss: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  scorecard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  scoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  lineupContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  lineupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  player: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
});
