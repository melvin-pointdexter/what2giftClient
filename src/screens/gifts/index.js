import React, {useState, useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import Style from "../../utilis/AppStyle";

import {Slider} from '@miblanchard/react-native-slider';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
//import AutoTags from 'react-native-tag-autocomplete';

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

    const eventsList=[
        { name: "wedding"},
        { name: "birthday"}
    ];

    const [budget, setBudget] = useState([500, 2000]);
    const [gender, setGender] = useState(null);
    const [events, setEvents] = useState([]);
    const [interest, setInterest] = useState([]);
    const [age, setAge] = useState(0);
    const [locationRadius, setLocationRadius] = useState({});
    const [related, setRelated] = useState(1);
    //const [tags, setTags] = useState([]);

    //=====================================
    //============================================
    return(
        <View style={Style.container}>
            <Text>Select Closeness: {relationText[related-1]}</Text>
            <Slider containerStyle={Style.slide} value={related} onValueChange={value => setRelated(value)}
            minimumValue={1} maximumValue={5} step={1}/>
            <Text>Budget</Text>
            <Slider containerStyle={Style.slide} value={budget} step={50} maximumValue={2500} minimumValue={50}
            onValueChange={value => setBudget([value[0], value[1]])}
            renderAboveThumbComponent={index => {
                return (<View style={{width:45, left:-170, backgroundColor:"#ffffff",alignItems:"center"}}><Text>{budget[index]}₪</Text></View>);
            }}/>
            {/*<AutoTags
                        tags={tags}
                        suggestions={exampleTags}
                        labelExtractor={(item) => item.name}
                        suggestionExtractor={(item) => item.name}
                        onChangeTags={(tag) => setTags(tag)}
                        onAddNewTag={(input) => {
                            if (input != '') {
                                if (tags.length > 0 && tags.find((item) => { if (item.name == '#' + input) return true; }) === undefined) {
                                    setTags((tag) => [...tag, { name: '#' + input }]);
                                }
                                else if (tags.length === 0) {
                                    setTags([{ name: '#' + input }])
                                }
                            }
                        }}
                        onSuggestionPress={(sugg) => {
                            if (tags.length > 0 && tags.find((item) => { if (item.name == sugg.name) return true }) === undefined)
                                setTags((tag) => [...tag, { name: sugg.name }]);
                            else if (tags.length === 0)
                                setTags([{ name: sugg.name }])
                        }}
                        containerStyle={{ backgroundColor: 'white', padding: 10, borderRadius: 20 }}
                    />*/}
        </View>
    );
}

export default Gifts;