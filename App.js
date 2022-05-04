import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';
const state = {
  data1: [
    {
      id: 'SMS',
      name: 'SMS:8888888888',
      children: [
        {
          id: 'Email',
          name: 'Email',
          children: [
            {
              id: 'test123@gmail.com',
              name: 'test1339@gmail.com',
              
            },
          ],
          
        },
      ],
    },
    {
      id: 'SocialMedia',
      name: 'SocialMedia',
      children: [
        {
          id: 'Whatsapp',
          name: 'whatsapp-8888888888',
          children: [
            {
              id: 'Twitter',
              name: 'Twitter-@testt',
            },
            {
              id: 'Instagram',
              name: 'Instagram-test.__',
            },
            {
              id: 'Fb',
              name: 'FaceBook-test14',
            },
          ],
        },
      ],
      
    },
    {
      id: 'Email',
      name: 'LinkedIn',
      children: [
        {
          
          name: 'test',
          
        },
      ],
    },
  ],
  
  data2: [
    {
      id: 'SMS',
      name: 'SMS:999999999',
      children: [
        {
          id: 'Email',
          name: 'Email',
          children: [
            {
              id: 'test123@gmail.com',
              name: 'test123@gmail.com',
              
            },
          ],
          
        },
      ],
    },
    {
      id: 'SocialMedia',
      name: 'SocialMedia',
      children: [
        {
          id: 'Whatsapp',
          name: 'whatsapp-9999999999',
          children: [
            {
              id: 'Twitter',
              name: 'Twitter-@test123',
            },
            {
              id: 'Instagram',
              name: 'Instagram-test__123',
            },
            {
              id: 'Fb',
              name: 'FaceBook-test123',
            },
          ],
        },
      ],
      
    },
    {
      id: 'Email',
      name: 'LinkedIn',
      children: [
        {
          
          name: 'Test123',
          
        },
      ],
    },
  ],
  data3: [
    {
      id: 'SMS',
      name: 'SMS:7777777777',
      children: [
        {
          id: 'Email',
          name: 'Email',
          children: [
            {
              id: 'test123@gmail.com',
              name: 'example@gmail.com',
              
            },
          ],
          
        },
      ],
    },
    {
      id: 'SocialMedia',
      name: 'SocialMedia',
      children: [
        {
          id: 'Whatsapp',
          name: 'whatsapp-7777777777',
          children: [
            {
              id: 'Twitter',
              name: 'Twitter-@abc',
            },
            {
              id: 'Instagram',
              name: 'Instagram-ab_c.__',
            },
            {
              id: 'Fb',
              name: 'FaceBook-abc',
            },
          ],
        },
      ],
      
    },
    {
      id: 'Email',
      name: 'LinkedIn',
      children: [
        {
          
          name: 'James',
          
        },
      ],
    },
  ]
};

const getIndicator = (isExpanded, hasChildrenNodes) => {
  if (!hasChildrenNodes) {
    return '*';
  } else if (isExpanded) {
    return '-';
  } else {
    return '+';
  }
};

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center',backgroundColor: '#f08080' }}>
     <View style={{ height:200 , width:300,}}>
      <Button
        title="Suvee"
        onPress={() => navigation.navigate('Tom')}
      />
      <Button
        title="Harry"
        onPress={() => navigation.navigate('Harry')}
      />
      <Button
        title="James"
        onPress={() => navigation.navigate('James')}
      />
      <Button
        title="Hailey"
        onPress={() => navigation.navigate('Hailey')}
      />
      <Button
        title="Sherin"
        onPress={() => navigation.navigate('Sherin')}
      />
    </View></View>
  );
}

function DetailsScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#f08080'}}>
      
     <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TreeView
          data={state.data1}
          renderNode={
            ({
              node,
              level,
              isExpanded,
              hasChildrenNodes
            }) => {
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 25 * level,
                    fontSize: 20,
                    fontWeight:'bold',
                    fontFamily: "Open Sans",
                    marginTop:10,
                    paddingTop:10
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)}
                  {node.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
    <Button
        title="Go to Contacts"
        onPress={() => navigation.push('Contacts')}
      /></View>
      
    
  );
}
function DetailsScreen2({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#f08080' }}>
      
      
     <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TreeView
          data={state.data2}
          renderNode={
            ({
              node,
              level,
              isExpanded,
              hasChildrenNodes
            }) => {
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 25 * level,
                    fontSize: 18,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)}
                  {node.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
    <Button
        title="Go to Contacts"
        onPress={() => navigation.push('Contacts')}
      /></View>
    
    
  );
}
function DetailsScreen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#f08080' }}>
      
      
    <SafeAreaView style={{flex: 1}}>
     <View style={{padding: 10}}>
       <TreeView
         data={state.data3}
         renderNode={
           ({
             node,
             level,
             isExpanded,
             hasChildrenNodes
           }) => {
           return (
             <View>
               <Text
                 style={{
                   marginLeft: 25 * level,
                   fontSize: 18,
                 }}>
                 {getIndicator(isExpanded, hasChildrenNodes)}
                 {node.name}
               </Text>
             </View>
           );
         }}
       />
     </View>
   </SafeAreaView>
   <Button
       title="Go to Contacts"
       onPress={() => navigation.push('Contacts')}
     /></View>
    
  );
}
function DetailsScreen4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#f08080'}}>
      
      
     <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TreeView
          data={state.data1}
          renderNode={
            ({
              node,
              level,
              isExpanded,
              hasChildrenNodes
            }) => {
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 25 * level,
                    fontSize: 18,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)}
                  {node.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
    <Button
        title="Go to Contacts"
        onPress={() => navigation.push('Contacts')}
      /></View>
  );
}
function DetailsScreen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#f08080' }}>
      
     <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TreeView
          data={state.data2}
          renderNode={
            ({
              node,
              level,
              isExpanded,
              hasChildrenNodes
            }) => {
            return (
              <View>
                <Text
                  style={{

                    marginLeft: 25 * level,
                    fontSize: 18,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)}
                  {node.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>

    <Button
        title="Go to Contacts"
        onPress={() => navigation.push('Contacts')}
      /></View>
    
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Contacts" component={HomeScreen} />
        <Stack.Screen name="Tom" component={DetailsScreen1} />
        <Stack.Screen name="Harry" component={DetailsScreen2} />
        <Stack.Screen name="James" component={DetailsScreen3} />
        <Stack.Screen name="Hailey" component={DetailsScreen4} />
        <Stack.Screen name="Sherin" component={DetailsScreen5} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
