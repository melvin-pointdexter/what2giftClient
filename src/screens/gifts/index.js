import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import Style from "../../utilis/AppStyle";

import {Slider} from '@miblanchard/react-native-slider';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import * as Location from 'expo-location';
import AutoTags from 'react-native-tag-autocomplete';

/*const exampleTags = [
    { name: '#Wedding' },
    { name: '#Birthday' },
    { name: "#Party" },
    { name: '#Toy' },
    { name: '#Electronic' },
    { name: "#Stationary" },
];*/

const relationText =["Family","Significant Other","Friends","Far family","Co-worker"];

const Gifts= () => {

    const eventsList=["wedding","birthday", "valentines","new years"];

    const interestList=[
        { name: "stationary"},
        { name: "clothing"},
        { name: "electronics"},
        { name: "toys"},
        { name: "tools"},
        { name: "music"},
        { name: "art"}
    ];

    //const genders=["male", "female"];
    const changeGender = () => setGender(gend => (gend=="male") ? "female" : "male");

    const [budget, setBudget] = useState([500, 2000]);
    const [gender, setGender] = useState("male");
    const [events, setEvents] = useState([]);
    const [interest, setInterest] = useState([]);
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState({"latitude":0, "longitude":0});
    const [range, setRange] = useState(1000);
    const [related, setRelated] = useState(1);

    //=====================================
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let loc = await Location.getCurrentPositionAsync({});
            setLocation({"latitude":loc.coords.latitude, "longitude":loc.coords.longitude});
        })();
      }, []);
    //============================================
    return(
        <View style={Style.container}>
            <Text style={Style.subtitle}>Select Closeness: {relationText[related-1]}</Text>
            <Slider containerStyle={Style.slide} value={related} onValueChange={value => setRelated(value)}
            minimumValue={1} maximumValue={5} step={1}/>
            <Text style={Style.subtitle}>Budget</Text>
            <Slider containerStyle={Style.slide} value={budget} step={50} maximumValue={2500} minimumValue={50}
            onValueChange={value => setBudget([value[0], value[1]])}
            renderAboveThumbComponent={index => {
                return (<View style={{width:45, left:-170, backgroundColor:"#ffffff",alignItems:"center"}}><Text>{budget[index]}₪</Text></View>);
            }}/>
            <Text style={Style.subtitle}>Age: {age}</Text>
            <Slider containerStyle={Style.slide} value={age} onValueChange={value => setAge(value)}
            minimumValue={0} maximumValue={120} step={1}/>
            <Text style={Style.subtitle}>Gender: {gender}</Text>
            <Switch
                trackColor={{ false: "#6190cc", true: "#cc8888" }}
                thumbColor={(gender=="male") ? "#acccff" : "#ffbbbb"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={changeGender}
                value={gender=="female"}
            />
            <Text style={Style.subtitle}>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
            <TouchableOpacity style={Style.button}><Text>Search</Text></TouchableOpacity>
            <AutoTags
                        tags={events}
                        suggestions={eventsList}
                        labelExtractor={(item) => item}
                        suggestionExtractor={(item) => item}
                        onChangeTags={(event) => setEvents(event)}
                        onAddNewTag={(input) => {
                            if (input != '') {
                                if (events.length > 0 && events.find((item) => { if (item == input) return true; }) === undefined) {
                                    setEvents((tag) => [...tag, input]);
                                }
                                else if (events.length === 0) {
                                    setTags([input]);
                                }
                            }
                        }}
                        onSuggestionPress={(sugg) => {
                            if (events.length > 0 && events.find((item) => { if (item == sugg) return true }) === undefined)
                                setEvents((tag) => [...tag, sugg]);
                            else if (events.length === 0)
                                setEvents([sugg]);
                        }}
                        containerStyle={{ backgroundColor: '#ffffff', padding: 10, borderRadius: 20 }}
                    />
        </View>
    );
}

export default Gifts;