{/*import React from 'react';
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
    padding: 6,
    //marginInline:'0 auto',
    backgroundColor: '#F5FCFF',
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PartnershipChart;*/}

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';

/*
const partnerships = [
  { player1: 'Babim Al Hasan',player2:'Sakib Al Hasan', runs1: 30, runs2: 20, totalRuns:50, ball1:20, ball2:12, totalBall:32 },
  { player1: 'Babim Kumar Das',player2:'Taskin Ahmed', runs1: 40, runs2: 10, totalRuns:50, ball1:25, ball2:20, totalBall:45  },
  { player1: 'Motu',player2:'Babim', runs1: 25, runs2: 35, totalRuns:60, ball1:20, ball2:42, totalBall:62  },
  { player1: 'Babim',player2:'Sakib', runs1: 50, runs2: 50, totalRuns:100, ball1:50, ball2:32, totalBall:82  },

];
*/
/*
const maxRuns = Math.max(
  ...partnerships.map(partnership => partnership.runs1 + partnership.runs2)
);
*/
const App = ({data}) => {
   console.log("where is partnership");
  console.log(data);

  const maxRuns = Math.max(
    ...data.partnerships.map(partnership => parseInt(partnership.firstContribution) + parseInt(partnership.secondContribution))
  );
  
  return (
    <SafeAreaView style={styles.container}>
      {/*<Text style={styles.title}>Cricket Partnership Runs</Text>*/}
      {data && data.partnerships.map((partnership, index) => (
        <View key={index} style={styles.partnershipContainer}>
        <View style={{display:'flex',flexDirection:'row'}}>
          <Text style={styles.partnershipTextLeft}>{partnership.firstBatsman}</Text>
          <Text style={styles.totalRunsByBallsText}>{partnership.runs}({partnership.ball})</Text>
           <Text style={styles.partnershipTextRight}>{partnership.secondBatsman}</Text>

          </View>
          
          <View style={styles.runsTextContainer}>
          <View>
            {/*<Text style={styles.runsText}>Babim</Text>*/}
            <Text style={styles.runs1Text}>{partnership.firstContribution}{/*({partnership.ball1})*/}</Text>
             {/*<Text style={styles.runsText}>{partnership.runs1}</Text>*/}
            </View> 
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { flex: parseInt(partnership.firstContribution ) / maxRuns, backgroundColor: '#4caf50',display:'flex', justifyContent:'flex-end' }]} />
              <View style={[styles.progressBar, { flex: parseInt(partnership.secondContribution ) / maxRuns, backgroundColor: '#2196f3',display:'flex',justifyContent:'flex-start' }]} />
            </View>
             <View> 
             {/*<Text style={styles.runsText}>Sakib</Text>*/}
            <Text style={styles.runs2Text}>{partnership.secondContribution}{/*({partnership.ball2})*/}</Text>
            {/*<Text style={styles.runsText}>{partnership.runs2}</Text>*/}
             </View> 
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  partnershipContainer: {
    width: '100%',
    marginVertical: 10,
   // flexDirection:'column',
    //justifyContent:'space-between',

  },
  partnershipTextLeft: {
    fontSize: 12,
    marginBottom: 5,
    textAlign:'left',
//    backgroundColor:'gray',
     marginRight:'2rem',
  },
  partnershipTextRight: {
    fontSize: 12,
    marginBottom: 5,
    textAlign:'right',
//    backgroundColor:'gray',
     marginLeft:'2rem',
  },

  totalRunsByBallsText: {
    fontSize: 12,
    marginBottom: 5,
   // textAlign:'right',
//    backgroundColor:'pink',
    marginLeft:'auto',
    marginRight:'auto',
  },

  progressBarWrapper: {
    flexDirection: 'row',
    margin:'0 auto',
    height: 10,
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 5,
    backgroundColor: '',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '90%',
    width:"90%",
  },
  runsTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  runs1Text: {
    width: 50,
    textAlign: 'left',
    fontSize:12,

  },
  runs2Text: {
    width: 50,
    textAlign: 'right',
    fontSize:12,

  },
});

export default App;
