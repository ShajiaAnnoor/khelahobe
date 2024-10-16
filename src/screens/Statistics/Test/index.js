
import { View, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Test = () => {
  const teamAData = [4.5, 5.0, 4.8, 5.1, 6.2, 6.0, 5.8, 6.5, 6.3, 7.0, 7.5, 7.2, 7.8, 8.0, 8.3, 8.5, 9.0, 9.3, 9.5, 10.0];
  const teamBData = [3.5, 4.0, 4.2, 4.5, 5.0, 5.5, 5.8, 6.0, 6.2, 6.5, 7.0, 7.2, 7.5, 7.8, 8.0, 8.3, 8.5, 8.7, 9.0, 9.2];
  const overs = Array.from({length: 20}, (_, i) => i + 1);

  return (
    
      <View style={styles.container}>
        <LineChart
          data={{
            labels: overs.map(String),
            datasets: [
              {
                data: teamAData,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              },
              {
                data: teamBData,
                color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
            legend: ["Team A", "Team B"] // optional
          }}
          width={screenWidth - 16} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726'
            },
            propsForVerticalLabels: {
              display: 'none' // Hides vertical labels
            },
            propsForVerticalLines: {
              display: 'none' // Hides vertical lines
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  }
});

export default Test;
