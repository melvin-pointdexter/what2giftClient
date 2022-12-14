import React, {useState, useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import Style from "../../utilis/AppStyle";

import {Slider} from '@miblanchard/react-native-slider';
import ReactTags from "react-tag-autocomplete";

const Gifts= () => {

    const eventsList=[
        { name: "wedding"},
        { name: "birthday"}
    ];

    const [budget, setBudget] = useState({});   //object min max
    const [gender, setGender] = useState(null);
    const [events, setEvents] = useState([]);
    const [interest, setInterest] = useState([]);
    const [age, setAge] = useState(0);
    const [locationRadius, setLocationRadius] = useState({});
    const [related, setRelated] = useState(1);

    //=====================================
    /*const [tags, setTags] = useState([])

    const [suggestions, setSuggestions] = useState([
        { id: 1, name: "Apples" },
        { id: 2, name: "Pears" },
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" }
    ])

    const reactTags = useRef()

    const onDelete = useCallback((tagIndex) => {
        setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags])

    const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
    }, [tags])*/
    //============================================
    return(
        <View style={Style.container}>
            <Text>Select Closeness: {related}</Text>
            <Slider containerStyle={Style.slide} value={related} onValueChange={value => setRelated(value)}
            minimumValue={1} maximumValue={5} step={1}/>
            <Text>Select</Text>
            {/*<ReactTags
            ref={reactTags}
            tags={tags}
            suggestions={suggestions}
            onDelete={onDelete}
            onAddition={onAddition}/>*/}
        </View>
    );
}

export default Gifts;