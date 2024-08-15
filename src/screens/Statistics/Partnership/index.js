import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLabel } from 'victory-native';
import Svg from 'react-native-svg';

const PartnershipChart= () => {
  const partnerships = [
    { batters: 'A & B', player1: 'Babim', runs1: 30, player2: 'Sakib', runs2: 20 },
    { batters: 'B & C', player1: 'Babimna', runs1: 40, player2: 'Shanto', runs2: 30 },
    { batters: 'C & D', player1: 'MotuBabim', runs1: 20, player2: 'taskin', runs2: 10 },
    { batters: 'D & E', player1: 'Jopujopubabim', runs1: 30, player2: 'Rishad', runs2: 30 },
    // Add more partnerships as needed
  ];

  const formattedData = partnerships.map(p => ({
    //batters: p.batters,
    runs1: p.runs1,
    runs2: p.runs2,
    player1Name: p.player1,
    player2Name: p.player2,
  }));

  return (
    <View contentContainerStyle={styles.container}>
      <Svg width={300} height={400} >
      <VictoryChart
      //alignment={'middle'}
      //justifyContent={{}}
      //domainPadding={{ x: [100, 100] }}
        //theme={VictoryTheme.material}
        //domainPadding={20}
        //height={400}
          //width={320}
          //padding={{ top: 5, bottom: 5, left: 5, right: 5 }}
      >
        
        
        <VictoryAxis
           style={{
            axis: { stroke: "none" },
            ticks: { stroke: "none" },
            tickLabels: { fill: "none" },
          }}
        />

<VictoryAxis
           style={{
            axis: { stroke: "none" },
            ticks: { stroke: "none" },
            tickLabels: { fill: "none" },
          }}
        />



        <VictoryStack  colorScale={['#4CAF50', '#FF5722']}>
         
          <VictoryBar
          horizontal
         // marginLeft={'auto'}
         
          alignment={'middle'}
          barWidth={10}
            data={formattedData}
            x="batters"
            y="runs1"
            labels={({ datum }) => `${datum.runs1}`}
            labelComponent={<VictoryLabel dy={-10} />}
            style={{
              data: { width: 10},
              labels: { fontSize: 12, fill: '#000' }
            }}
          />
         

          <VictoryBar
          //horizontal
          barWidth={10}
         // marginRight={6}
          alignment={'middle'}
            data={formattedData}
            x="batters"
            y="runs2"
            labels={({ datum }) => `${datum.runs2}`}
            labelComponent={<VictoryLabel dy={-10} />}
            
            style={{
              data: { width: 20 },
              labels: { fontSize: 12, fill: '#000',padding:5}
              
            }}
          />
          
        </VictoryStack>
       
        {formattedData.map((datum, index) => (
          <VictoryLabel
          
            key={index}
            text={datum.player1Name}
            x={40}
            y={(index + 1) * 60}
            textAnchor="end"
            style={{ fontSize: 12, fill: '#000' }}
          />
        ))}
        {formattedData.map((datum, index) => (
          <VictoryLabel
            key={index}
            text={datum.player2Name}
            x={340}
            y={(index + 1) * 60}
            //dx={290}
            textAnchor="end"
            style={{ fontSize: 12, fill: '#000' }}
          />
        ))}
      </VictoryChart>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 16,
    //marginInline:'0 auto',
    backgroundColor: '#F5FCFF',
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PartnershipChart;

